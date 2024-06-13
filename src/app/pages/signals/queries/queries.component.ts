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
  h2 = viewChild.required<ElementRef<HTMLHeadingElement>>("subtitulo");
  soloLectura = viewChildren<ElementRef<HTMLHeadingElement>>("soloLectura");

  ngAfterViewInit() {
    this.h2().nativeElement.textContent = "Nuevo Valor asignado al subtitulo";
    console.log(this.h1()?.nativeElement);
    console.log(this.h2()?.nativeElement);
    console.log(this.soloLectura());
  }

}
