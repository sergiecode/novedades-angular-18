import { Component, output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'output-child',
  standalone: true,
  imports: [MatButtonModule, MatDividerModule, MatIconModule],
  templateUrl: './output-child.component.html',
  styleUrl: './output-child.component.css'
})
export class OutputChildComponent {
  sumar = output<void>();
  delete = output<number>();

  enviarSuma() {
    this.sumar.emit();
  }

  reset() {
    this.delete.emit(0);
  }
}
