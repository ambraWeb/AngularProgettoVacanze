// componente che DOVREBBE mostrare i dettagli di un singolo gioco
// DOVREBBE essere nella modale al click sul titolo

import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Gioco } from '../../models/gioco.model';
import { PrenotazioneService } from '../../services/prenotazione.service';

@Component({
  selector: 'app-dettaglio-gioco',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dettaglio-gioco.component.html',
  styleUrl: './dettaglio-gioco.component.css'
})
export class DettaglioGiocoComponent {
  // gioco ricevuto in input dal padre
  @Input() gioco?: Gioco;

  constructor(
    private router: Router,
    private prenotazioneService: PrenotazioneService
  ) {}

  // gestisce il click sul pulsante acquista/prenota nel dettaglio
  onClick() {
    if (this.gioco) {
      if (this.gioco.disponibile) {
        this.prenotazioneService.effettuaAcquisto(this.gioco.id, this.gioco.prezzo);
        alert('Acquisto completato con successo!');
      } else {
        this.router.navigate(['/prenota', this.gioco.id]);
      }
    }
  }
}
