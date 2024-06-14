import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-usuarios',
  standalone: true,
  imports: [],
  templateUrl: './detalle-usuarios.component.html',
  styleUrl: './detalle-usuarios.component.css'
})
export class DetalleUsuariosComponent {

  loading: boolean = true;
  id = signal<number | undefined>(undefined);

  private _route = inject(ActivatedRoute);

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      this.id.set(params['id']);
    }
    )
  }

}