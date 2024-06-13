import { Component, ElementRef, viewChild, viewChildren } from '@angular/core';

@Component({
  selector: 'queries',
  standalone: true,
  imports: [],
  templateUrl: './queries.component.html',
  styleUrl: './queries.component.css'
})
export class QueriesComponent {

  h1 = viewChild<ElementRef<HTMLHeadingElement>>("titulo");
  h2 = viewChild.required<ElementRef<HTMLHeadingElement>>("titulo");
  soloLectura = viewChildren("soloLectura")

  ngAfterViewInit() {
    console.log(this.h1.name);
    console.log(this.h2.name);
    console.log(this.soloLectura);
  }

}
