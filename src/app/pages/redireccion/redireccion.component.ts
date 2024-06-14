import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-redireccion',
  standalone: true,
  imports: [MatButtonModule, MatDividerModule, MatIconModule],
  templateUrl: './redireccion.component.html',
  styleUrl: './redireccion.component.css'
})
export class RedireccionComponent {

  private _router = inject(Router);

  navegate(id: number): void {
    this._router.navigate([`/detalle-anterior`, id]);
  }
}
