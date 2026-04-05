import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
import * as i2 from "@angular/common";
import * as i3 from "@angular/material/icon";
function TableConfirmDialogComponent_button_11_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 9);
    i0.ɵɵlistener("click", function TableConfirmDialogComponent_button_11_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onCancel()); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.data.cancelText || "Cancel", " ");
} }
/**
 * TableConfirmDialogComponent
 * Reusable material dialog for alerts and confirmations
 * Fully styled and independent for npm distribution
 */
export class TableConfirmDialogComponent {
    dialogRef;
    data;
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    onConfirm() {
        this.dialogRef.close(true);
    }
    onCancel() {
        this.dialogRef.close(false);
    }
    static ɵfac = function TableConfirmDialogComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || TableConfirmDialogComponent)(i0.ɵɵdirectiveInject(i1.MatDialogRef), i0.ɵɵdirectiveInject(MAT_DIALOG_DATA)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TableConfirmDialogComponent, selectors: [["app-table-confirm-dialog"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 14, vars: 6, consts: [[1, "dialog-container"], [1, "dialog-header"], [1, "dialog-title"], ["mat-icon-button", "", "aria-label", "Close", 1, "close-btn", 3, "click"], [1, "dialog-body"], [1, "dialog-message"], [1, "dialog-footer"], ["mat-stroked-button", "", "class", "cancel-btn", 3, "click", 4, "ngIf"], ["mat-raised-button", "", 3, "click"], ["mat-stroked-button", "", 1, "cancel-btn", 3, "click"]], template: function TableConfirmDialogComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "h2", 2);
            i0.ɵɵtext(3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "button", 3);
            i0.ɵɵlistener("click", function TableConfirmDialogComponent_Template_button_click_4_listener() { return ctx.onCancel(); });
            i0.ɵɵelementStart(5, "mat-icon");
            i0.ɵɵtext(6, "close");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(7, "div", 4)(8, "p", 5);
            i0.ɵɵtext(9);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(10, "div", 6);
            i0.ɵɵtemplate(11, TableConfirmDialogComponent_button_11_Template, 2, 1, "button", 7);
            i0.ɵɵelementStart(12, "button", 8);
            i0.ɵɵlistener("click", function TableConfirmDialogComponent_Template_button_click_12_listener() { return ctx.onConfirm(); });
            i0.ɵɵtext(13);
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx.data.title);
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate(ctx.data.message);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", !ctx.data.isAlert);
            i0.ɵɵadvance();
            i0.ɵɵclassMap(ctx.data.isAlert ? "alert-btn" : "confirm-btn");
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate1(" ", ctx.data.okText || (ctx.data.isAlert ? "OK" : "Confirm"), " ");
        } }, dependencies: [CommonModule, i2.NgIf, MatDialogModule, MatIconModule, i3.MatIcon], styles: [".dialog-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;min-width:320px;max-width:500px;gap:0;background:#fff;border-radius:8px;overflow:hidden}.dialog-header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding:16px 20px;border-bottom:1px solid #e5e7eb;background:#f9fafb;gap:12px;.dialog-title{margin:0;font-size:16px;font-weight:600;color:#111827;flex:1}.close-btn{color:#6b7280;height:32px;width:32px;min-width:32px;&:hover{background:#e5e7eb}}}.dialog-body[_ngcontent-%COMP%]{padding:20px;flex:1;.dialog-message{margin:0;font-size:14px;color:#374151;line-height:1.5}}.dialog-footer[_ngcontent-%COMP%]{display:flex;gap:12px;padding:16px 20px;border-top:1px solid #e5e7eb;background:#f9fafb;justify-content:flex-end;button{min-width:100px;font-size:14px;font-weight:500;border-radius:6px;text-transform:uppercase;letter-spacing:.5px}.cancel-btn{color:#6b7280;border-color:#d1d5db;&:hover{background:#f3f4f6;border-color:#9ca3af}}.confirm-btn{background:#6b7280;color:#fff;&:hover{background:#4b5563}}.alert-btn{background:#3b82f6;color:#fff;&:hover{background:#2563eb}}}.dark-theme[_nghost-%COMP%], .dark-theme   [_nghost-%COMP%]{.dialog-container{background:#1f2937}.dialog-header{background:#111827;border-bottom-color:#374151;.dialog-title{color:#f3f4f6}.close-btn{color:#9ca3af;&:hover{background:#374151}}}.dialog-body{.dialog-message{color:#d1d5db}}.dialog-footer{background:#111827;border-top-color:#374151;.cancel-btn{color:#9ca3af;border-color:#4b5563;&:hover{background:#374151;border-color:#6b7280}}.confirm-btn{background:#6b7280;&:hover{background:#9ca3af}}.alert-btn{background:#3b82f6;&:hover{background:#1d4ed8}}}}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TableConfirmDialogComponent, [{
        type: Component,
        args: [{ selector: 'app-table-confirm-dialog', standalone: true, imports: [CommonModule, MatDialogModule, MatIconModule], template: `
    <div class="dialog-container">
      <!-- Dialog Header -->
      <div class="dialog-header">
        <h2 class="dialog-title">{{ data.title }}</h2>
        <button 
          mat-icon-button 
          (click)="onCancel()"
          class="close-btn"
          aria-label="Close">
          <mat-icon>close</mat-icon>
        </button>
      </div>

      <!-- Dialog Body -->
      <div class="dialog-body">
        <p class="dialog-message">{{ data.message }}</p>
      </div>

      <!-- Dialog Footer -->
      <div class="dialog-footer">
        <!-- For confirm: show cancel button -->
        <button 
          *ngIf="!data.isAlert"
          mat-stroked-button 
          (click)="onCancel()"
          class="cancel-btn">
          {{ data.cancelText || 'Cancel' }}
        </button>
        
        <!-- OK / Confirm button -->
        <button 
          mat-raised-button 
          [class]="data.isAlert ? 'alert-btn' : 'confirm-btn'"
          (click)="onConfirm()">
          {{ data.okText || (data.isAlert ? 'OK' : 'Confirm') }}
        </button>
      </div>
    </div>
  `, styles: [".dialog-container{display:flex;flex-direction:column;min-width:320px;max-width:500px;gap:0;background:#fff;border-radius:8px;overflow:hidden}.dialog-header{display:flex;align-items:center;justify-content:space-between;padding:16px 20px;border-bottom:1px solid #e5e7eb;background:#f9fafb;gap:12px;.dialog-title{margin:0;font-size:16px;font-weight:600;color:#111827;flex:1}.close-btn{color:#6b7280;height:32px;width:32px;min-width:32px;&:hover{background:#e5e7eb}}}.dialog-body{padding:20px;flex:1;.dialog-message{margin:0;font-size:14px;color:#374151;line-height:1.5}}.dialog-footer{display:flex;gap:12px;padding:16px 20px;border-top:1px solid #e5e7eb;background:#f9fafb;justify-content:flex-end;button{min-width:100px;font-size:14px;font-weight:500;border-radius:6px;text-transform:uppercase;letter-spacing:.5px}.cancel-btn{color:#6b7280;border-color:#d1d5db;&:hover{background:#f3f4f6;border-color:#9ca3af}}.confirm-btn{background:#6b7280;color:#fff;&:hover{background:#4b5563}}.alert-btn{background:#3b82f6;color:#fff;&:hover{background:#2563eb}}}:host-context(.dark-theme){.dialog-container{background:#1f2937}.dialog-header{background:#111827;border-bottom-color:#374151;.dialog-title{color:#f3f4f6}.close-btn{color:#9ca3af;&:hover{background:#374151}}}.dialog-body{.dialog-message{color:#d1d5db}}.dialog-footer{background:#111827;border-top-color:#374151;.cancel-btn{color:#9ca3af;border-color:#4b5563;&:hover{background:#374151;border-color:#6b7280}}.confirm-btn{background:#6b7280;&:hover{background:#9ca3af}}.alert-btn{background:#3b82f6;&:hover{background:#1d4ed8}}}}\n"] }]
    }], () => [{ type: i1.MatDialogRef }, { type: undefined, decorators: [{
                type: Inject,
                args: [MAT_DIALOG_DATA]
            }] }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(TableConfirmDialogComponent, { className: "TableConfirmDialogComponent", filePath: "lib\\table-confirm-dialog.component.ts", lineNumber: 225 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtY29uZmlybS1kaWFsb2cuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvcmV1c2FibGUtdGFibGUvc3JjL2xpYi90YWJsZS1jb25maXJtLWRpYWxvZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxlQUFlLEVBQUUsZUFBZSxFQUFnQixNQUFNLDBCQUEwQixDQUFDO0FBQzFGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7OztJQTJDL0MsaUNBSXFCO0lBRG5CLDJMQUFTLGlCQUFVLEtBQUM7SUFFcEIsWUFDRjtJQUFBLGlCQUFTOzs7SUFEUCxjQUNGO0lBREUsbUVBQ0Y7O0FBckNSOzs7O0dBSUc7QUE2TUgsTUFBTSxPQUFPLDJCQUEyQjtJQUU3QjtJQUN5QjtJQUZsQyxZQUNTLFNBQW9ELEVBQzNCLElBQWdCO1FBRHpDLGNBQVMsR0FBVCxTQUFTLENBQTJDO1FBQzNCLFNBQUksR0FBSixJQUFJLENBQVk7SUFDL0MsQ0FBQztJQUVKLFNBQVM7UUFDUCxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzlCLENBQUM7cUhBWlUsMkJBQTJCLDhEQUc1QixlQUFlOzZEQUhkLDJCQUEyQjtZQXBNaEMsQUFERixBQUZGLDhCQUE4QixhQUVELFlBQ0E7WUFBQSxZQUFnQjtZQUFBLGlCQUFLO1lBQzlDLGlDQUlxQjtZQUZuQix3R0FBUyxjQUFVLElBQUM7WUFHcEIsZ0NBQVU7WUFBQSxxQkFBSztZQUVuQixBQURFLEFBRGlCLGlCQUFXLEVBQ25CLEVBQ0w7WUFJSixBQURGLDhCQUF5QixXQUNHO1lBQUEsWUFBa0I7WUFDOUMsQUFEOEMsaUJBQUksRUFDNUM7WUFHTiwrQkFBMkI7WUFFekIsb0ZBSXFCO1lBS3JCLGtDQUd3QjtZQUF0Qix5R0FBUyxlQUFXLElBQUM7WUFDckIsYUFDRjtZQUVKLEFBREUsQUFERSxpQkFBUyxFQUNMLEVBQ0Y7O1lBbEN1QixlQUFnQjtZQUFoQixvQ0FBZ0I7WUFZZixlQUFrQjtZQUFsQixzQ0FBa0I7WUFPekMsZUFBbUI7WUFBbkIsd0NBQW1CO1lBVXBCLGNBQW9EO1lBQXBELDZEQUFvRDtZQUVwRCxjQUNGO1lBREUseUZBQ0Y7NEJBckNJLFlBQVksV0FBRSxlQUFlLEVBQUUsYUFBYTs7aUZBeU0zQywyQkFBMkI7Y0E1TXZDLFNBQVM7MkJBQ0UsMEJBQTBCLGNBQ3hCLElBQUksV0FDUCxDQUFDLFlBQVksRUFBRSxlQUFlLEVBQUUsYUFBYSxDQUFDLFlBQzdDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F1Q1Q7O3NCQW9LRSxNQUFNO3VCQUFDLGVBQWU7O2tGQUhkLDJCQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE1hdERpYWxvZ01vZHVsZSwgTUFUX0RJQUxPR19EQVRBLCBNYXREaWFsb2dSZWYgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xyXG5pbXBvcnQgeyBNYXRJY29uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XHJcbi8qKlxyXG4gKiBEaWFsb2cgZGF0YSBpbnRlcmZhY2VcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgRGlhbG9nRGF0YSB7XHJcbiAgdGl0bGU6IHN0cmluZztcclxuICBtZXNzYWdlOiBzdHJpbmc7XHJcbiAgb2tUZXh0Pzogc3RyaW5nO1xyXG4gIGNhbmNlbFRleHQ/OiBzdHJpbmc7XHJcbiAgaXNBbGVydD86IGJvb2xlYW47IC8vIHRydWUgZm9yIGFsZXJ0IChzaW5nbGUgYnV0dG9uKSwgZmFsc2UgZm9yIGNvbmZpcm0gKHR3byBidXR0b25zKVxyXG59XHJcblxyXG4vKipcclxuICogVGFibGVDb25maXJtRGlhbG9nQ29tcG9uZW50XHJcbiAqIFJldXNhYmxlIG1hdGVyaWFsIGRpYWxvZyBmb3IgYWxlcnRzIGFuZCBjb25maXJtYXRpb25zXHJcbiAqIEZ1bGx5IHN0eWxlZCBhbmQgaW5kZXBlbmRlbnQgZm9yIG5wbSBkaXN0cmlidXRpb25cclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLXRhYmxlLWNvbmZpcm0tZGlhbG9nJyxcclxuICBzdGFuZGFsb25lOiB0cnVlLFxyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIE1hdERpYWxvZ01vZHVsZSwgTWF0SWNvbk1vZHVsZV0sXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxkaXYgY2xhc3M9XCJkaWFsb2ctY29udGFpbmVyXCI+XHJcbiAgICAgIDwhLS0gRGlhbG9nIEhlYWRlciAtLT5cclxuICAgICAgPGRpdiBjbGFzcz1cImRpYWxvZy1oZWFkZXJcIj5cclxuICAgICAgICA8aDIgY2xhc3M9XCJkaWFsb2ctdGl0bGVcIj57eyBkYXRhLnRpdGxlIH19PC9oMj5cclxuICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgbWF0LWljb24tYnV0dG9uIFxyXG4gICAgICAgICAgKGNsaWNrKT1cIm9uQ2FuY2VsKClcIlxyXG4gICAgICAgICAgY2xhc3M9XCJjbG9zZS1idG5cIlxyXG4gICAgICAgICAgYXJpYS1sYWJlbD1cIkNsb3NlXCI+XHJcbiAgICAgICAgICA8bWF0LWljb24+Y2xvc2U8L21hdC1pY29uPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDwhLS0gRGlhbG9nIEJvZHkgLS0+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJkaWFsb2ctYm9keVwiPlxyXG4gICAgICAgIDxwIGNsYXNzPVwiZGlhbG9nLW1lc3NhZ2VcIj57eyBkYXRhLm1lc3NhZ2UgfX08L3A+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPCEtLSBEaWFsb2cgRm9vdGVyIC0tPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZGlhbG9nLWZvb3RlclwiPlxyXG4gICAgICAgIDwhLS0gRm9yIGNvbmZpcm06IHNob3cgY2FuY2VsIGJ1dHRvbiAtLT5cclxuICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgKm5nSWY9XCIhZGF0YS5pc0FsZXJ0XCJcclxuICAgICAgICAgIG1hdC1zdHJva2VkLWJ1dHRvbiBcclxuICAgICAgICAgIChjbGljayk9XCJvbkNhbmNlbCgpXCJcclxuICAgICAgICAgIGNsYXNzPVwiY2FuY2VsLWJ0blwiPlxyXG4gICAgICAgICAge3sgZGF0YS5jYW5jZWxUZXh0IHx8ICdDYW5jZWwnIH19XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPCEtLSBPSyAvIENvbmZpcm0gYnV0dG9uIC0tPlxyXG4gICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICBtYXQtcmFpc2VkLWJ1dHRvbiBcclxuICAgICAgICAgIFtjbGFzc109XCJkYXRhLmlzQWxlcnQgPyAnYWxlcnQtYnRuJyA6ICdjb25maXJtLWJ0bidcIlxyXG4gICAgICAgICAgKGNsaWNrKT1cIm9uQ29uZmlybSgpXCI+XHJcbiAgICAgICAgICB7eyBkYXRhLm9rVGV4dCB8fCAoZGF0YS5pc0FsZXJ0ID8gJ09LJyA6ICdDb25maXJtJykgfX1cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICBgLFxyXG4gIHN0eWxlczogW2BcclxuICAgIC5kaWFsb2ctY29udGFpbmVyIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgbWluLXdpZHRoOiAzMjBweDtcclxuICAgICAgbWF4LXdpZHRoOiA1MDBweDtcclxuICAgICAgZ2FwOiAwO1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB9XHJcblxyXG4gICAgLmRpYWxvZy1oZWFkZXIge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgIHBhZGRpbmc6IDE2cHggMjBweDtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlNWU3ZWI7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNmOWZhZmI7XHJcbiAgICAgIGdhcDogMTJweDtcclxuXHJcbiAgICAgIC5kaWFsb2ctdGl0bGUge1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBjb2xvcjogIzExMTgyNztcclxuICAgICAgICBmbGV4OiAxO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuY2xvc2UtYnRuIHtcclxuICAgICAgICBjb2xvcjogIzZiNzI4MDtcclxuICAgICAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICAgICAgd2lkdGg6IDMycHg7XHJcbiAgICAgICAgbWluLXdpZHRoOiAzMnB4O1xyXG5cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICNlNWU3ZWI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmRpYWxvZy1ib2R5IHtcclxuICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgZmxleDogMTtcclxuXHJcbiAgICAgIC5kaWFsb2ctbWVzc2FnZSB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBjb2xvcjogIzM3NDE1MTtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmRpYWxvZy1mb290ZXIge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBnYXA6IDEycHg7XHJcbiAgICAgIHBhZGRpbmc6IDE2cHggMjBweDtcclxuICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlNWU3ZWI7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNmOWZhZmI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcblxyXG4gICAgICBidXR0b24ge1xyXG4gICAgICAgIG1pbi13aWR0aDogMTAwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuY2FuY2VsLWJ0biB7XHJcbiAgICAgICAgY29sb3I6ICM2YjcyODA7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjZDFkNWRiO1xyXG5cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICNmM2Y0ZjY7XHJcbiAgICAgICAgICBib3JkZXItY29sb3I6ICM5Y2EzYWY7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuY29uZmlybS1idG4ge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICM2YjcyODA7XHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogIzRiNTU2MztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5hbGVydC1idG4ge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMzYjgyZjY7XHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogIzI1NjNlYjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICA6aG9zdC1jb250ZXh0KC5kYXJrLXRoZW1lKSB7XHJcbiAgICAgIC5kaWFsb2ctY29udGFpbmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMWYyOTM3O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuZGlhbG9nLWhlYWRlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzExMTgyNztcclxuICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjMzc0MTUxO1xyXG5cclxuICAgICAgICAuZGlhbG9nLXRpdGxlIHtcclxuICAgICAgICAgIGNvbG9yOiAjZjNmNGY2O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNsb3NlLWJ0biB7XHJcbiAgICAgICAgICBjb2xvcjogIzljYTNhZjtcclxuXHJcbiAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzM3NDE1MTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5kaWFsb2ctYm9keSB7XHJcbiAgICAgICAgLmRpYWxvZy1tZXNzYWdlIHtcclxuICAgICAgICAgIGNvbG9yOiAjZDFkNWRiO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLmRpYWxvZy1mb290ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMxMTE4Mjc7XHJcbiAgICAgICAgYm9yZGVyLXRvcC1jb2xvcjogIzM3NDE1MTtcclxuXHJcbiAgICAgICAgLmNhbmNlbC1idG4ge1xyXG4gICAgICAgICAgY29sb3I6ICM5Y2EzYWY7XHJcbiAgICAgICAgICBib3JkZXItY29sb3I6ICM0YjU1NjM7XHJcblxyXG4gICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMzNzQxNTE7XHJcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogIzZiNzI4MDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jb25maXJtLWJ0biB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjNmI3MjgwO1xyXG5cclxuICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjOWNhM2FmO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmFsZXJ0LWJ0biB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjM2I4MmY2O1xyXG5cclxuICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMWQ0ZWQ4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIGBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUYWJsZUNvbmZpcm1EaWFsb2dDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPFRhYmxlQ29uZmlybURpYWxvZ0NvbXBvbmVudD4sXHJcbiAgICBASW5qZWN0KE1BVF9ESUFMT0dfREFUQSkgcHVibGljIGRhdGE6IERpYWxvZ0RhdGFcclxuICApIHt9XHJcblxyXG4gIG9uQ29uZmlybSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKHRydWUpO1xyXG4gIH1cclxuXHJcbiAgb25DYW5jZWwoKTogdm9pZCB7XHJcbiAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZShmYWxzZSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==