export interface Prenotazione {
  id: number;
  giocoId: number;
  nomeCompleto: string;
  email: string;
  telefono: string;
  indirizzo: string;
  dataPrenotazione: Date;
  stato: 'In attesa' | 'Confermata' | 'Completata';
}