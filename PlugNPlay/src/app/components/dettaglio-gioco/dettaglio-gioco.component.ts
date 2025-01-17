import { Component, Input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Gioco } from '../../models/gioco.model';

@Component({
  selector: 'app-dettaglio-gioco',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './dettaglio-gioco.component.html',
  styleUrl: './dettaglio-gioco.component.css'
})
export class DettaglioGiocoComponent {
  @Input() gioco?: Gioco;

  constructor(private router: Router) {}

  onClick() {
    if (this.gioco) {
      if (this.gioco.disponibile) {
        console.log('Acquisto del gioco:', this.gioco.titolo);
        // Implementare logica acquisto
      } else {
        this.router.navigate(['/prenota', this.gioco.id]);
      }
    }
  }
}
