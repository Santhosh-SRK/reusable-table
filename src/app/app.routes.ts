import { Routes } from '@angular/router';

export const routes: Routes = [
  // Default route - redirects to login page
  {
    path: '',
    redirectTo: '/document/documentupload',
    pathMatch: 'full',
  },

  {
    path: 'document/documentupload',
    loadComponent: () =>
      import('./document/documentupload/documentupload.component').then(
        (m) => m.DocumentUploadComponent,
      ),
  },

  { path: '**', redirectTo: 'document/documentupload' },
];
