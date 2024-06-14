import 'zone.js';
import { Component, signal } from '@angular/core';
import { ChartComponent } from './chart/chart.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-defer',
  standalone: true,
  imports: [ChartComponent, MatProgressSpinnerModule, MatTabsModule, MatButtonModule, MatDividerModule, MatIconModule],
  templateUrl: './defer.component.html',
  styleUrl: './defer.component.css'
})
export class DeferComponent {
  isVisible = signal(false);

}
