import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatProgressSpinnerModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'task-tracker';
  constructor(
    private matIconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer
  ) {
    
    const normalizeSvg = (svgText: string) => {
      if (!svgText) return svgText;
      let s = svgText.replace(/(fill=)(".*?"|'[^']*')/gi, 'fill="currentColor"');
      s = s.replace(/(stroke=)(".*?"|'[^']*')/gi, 'stroke="currentColor"');
      s = s.replace(/\s(width|height)=\"[^\"]*\"/gi, '');
      return s;
    };

    const registerIcon = (iconId: string) => {
      const candidates = [
        `/assets/icons/${iconId}.svg`,
      ];

      const tryRegisterFrom = async (idx = 0) => {
        if (idx >= candidates.length) {
          const fallback = this.sanitizer.bypassSecurityTrustResourceUrl(candidates[0]);
          this.matIconRegistry.addSvgIcon(iconId, fallback);
          const lowerF = String(iconId).toLowerCase();
          if (lowerF !== iconId) this.matIconRegistry.addSvgIcon(lowerF, fallback);
          return;
        }

        const path = candidates[idx];
        try {
          const r = await fetch(path);
          if (!r.ok) throw new Error('not found');
          const svgText = await r.text();
          const normalized = normalizeSvg(svgText);
          const safe = this.sanitizer.bypassSecurityTrustHtml(normalized);
          try {
            this.matIconRegistry.addSvgIconLiteral(iconId, safe);
            const lower = String(iconId).toLowerCase();
            if (lower !== iconId) this.matIconRegistry.addSvgIconLiteral(lower, safe);
          } catch (e) {
          }
        } catch {
        }
      };

      void tryRegisterFrom(0);
    };

  }


}
