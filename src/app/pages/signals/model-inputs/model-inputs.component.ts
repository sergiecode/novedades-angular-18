import { NgStyle } from '@angular/common';
import { Component, model } from '@angular/core';

@Component({
  selector: 'app-model-inputs',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './model-inputs.component.html',
  styleUrl: './model-inputs.component.css'
})
export class ModelInputsComponent {

  protected checked = model(false) // lo que antes era el ngModel

  toggle() {
    this.checked.set(!this.checked())
    console.log(this.checked())
  }

}
