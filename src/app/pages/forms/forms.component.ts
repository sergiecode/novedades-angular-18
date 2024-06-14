import { Component, OnInit } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NgClass],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})
export class FormsComponent {

  contactForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    })
  }


  enviar(event: Event) {
    event.preventDefault();
    if (this.contactForm.valid) console.log(this.contactForm.value);
    else {
      this.contactForm.markAllAsTouched();
      console.error('Formulario inválido');
    }
  }

  ngOnInit(): void {
    // Eventos de formulario:
    // this.contactForm.events.subscribe((event) => {
    //   console.log(event);
    // });

    // Eventos de Controlador:
    // this.contactForm.get('email')?.events.subscribe((events) => {
    //   console.log(events);
    // });

    // NO ES LO MISMO QUE:

    // VALOR de formulario:
    // this.contactForm.valueChanges.subscribe((value) => {
    //   console.log(value);
    // });

    // VALOR de Controlador:
    // this.contactForm.get('email')?.valueChanges.subscribe((value) => {
    //   console.log(value);
    // });


  }

  hasErrors(field: string, typeError: string) {
    return this.contactForm.get(field)?.hasError(typeError) && this.contactForm.get(field)?.touched;
  }

}