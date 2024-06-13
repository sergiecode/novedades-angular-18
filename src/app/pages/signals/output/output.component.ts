import { Component, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { OutputChildComponent } from '../output-child/output-child.component';

@Component({
  selector: 'app-output',
  standalone: true,
  imports: [MatBadgeModule, MatButtonModule, MatIconModule, OutputChildComponent],
  templateUrl: './output.component.html',
  styleUrl: './output.component.css'
})
export class OutputComponent {

  badge = signal<number>(0);

  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }

  handleSumar() {
    this.badge.update((value: number) => value + 1);
  }

  handleDelete(value: number) {
    this.badge.update(() => value);
  }

}
