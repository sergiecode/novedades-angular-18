import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { InputComponent } from './pages/signals/input/input.component';
import { OutputComponent } from './pages/signals/output/output.component';
import { QueriesComponent } from './pages/signals/queries/queries.component';

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
    ]
  },

  { path: '**', redirectTo: '', pathMatch: 'full' },
];
