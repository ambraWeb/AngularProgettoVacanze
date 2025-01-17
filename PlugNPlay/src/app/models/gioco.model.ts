export interface Gioco {
  id: number;
  titolo: string;
  descrizione: string;
  genere: string;
  dataRilascio: Date;
  prezzo: number;
  disponibile: boolean;
  imgCopertina: string;
}