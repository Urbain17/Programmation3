import { Hotel } from './hotel';

export interface Forfait {
    id : string;
    destination: string,
    villeDeDepart: string,
    hotel: Hotel,
    dateDepart: string;
    dateRetour: string;
    prix: number;
    rabais : number;
    vedette : boolean

}