import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { InputComponent } from './pages/signals/input/input.component';
import { OutputComponent } from './pages/signals/output/output.component';
import { QueriesComponent } from './pages/signals/queries/queries.component';
import { ModelInputsComponent } from './pages/signals/model-inputs/model-inputs.component';
import { ContentComponent } from './pages/content/content.component';
import { OptimizedImageComponent } from './pages/optimized-image/optimized-image.component';
import { DeferComponent } from './pages/defer/defer.component';
import { FormsComponent } from './pages/forms/forms.component';
import { RedireccionComponent } from './pages/redireccion/redireccion.component';
import { DetalleUsuariosComponent } from './pages/detalle-usuarios/detalle-usuarios.component';
import { ErrorHandler, inject } from '@angular/core';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'signals',
    children: [
      {
        path: 'inputs', component: InputComponent
      },
      {
        path: 'outputs', component: OutputComponent
      },
      {
        path: 'queries', component: QueriesComponent
      },
      {
        path: 'model-inputs', component: ModelInputsComponent
      },
    ]
  },
  { path: 'content', component: ContentComponent },
  { path: 'optimized-image', component: OptimizedImageComponent },
  { path: 'defer', component: DeferComponent },
  { path: 'forms', component: FormsComponent },
  { path: 'redireccion', component: RedireccionComponent },
  {
    path: 'detalle-anterior/:id', redirectTo: ({ params }) => {
      const errorHandler = inject(ErrorHandler);
      const userIdParam = params['id'];
      if (userIdParam != 3) {
        return `/detalle-usuario/${userIdParam}`;
      } else {
        errorHandler.handleError(new Error('Attempted navigation to user page without user ID.'));
        return `/not-found`;
      }
    },
  },
  { path: 'detalle-usuario/:id', component: DetalleUsuariosComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
