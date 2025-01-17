import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-prenotazione',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-prenotazione.component.html',
  styleUrl: './form-prenotazione.component.css'
})
export class FormPrenotazioneComponent implements OnInit {
  formPrenotazione: FormGroup;
  giocoId?: number;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) {
    this.formPrenotazione = this.fb.group({
      nomeCompleto: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', Validators.required],
      indirizzo: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.giocoId = Number(this.route.snapshot.paramMap.get('id'));
  }

  onSubmit() {
    if (this.formPrenotazione.valid) {
      console.log('Form submitted:', {
        ...this.formPrenotazione.value,
        giocoId: this.giocoId
      });
    }
  }
}
