import { Forfait } from "./forfait";


export const FORFAITS: Forfait[] = [
    {  id : "1",
        destination: "Panama City, Panama",
        villeDeDepart: "Montreal",
        hotel: {
            id: "1",
            nom: "Hotel El Panama",
            adresse: "Calle Eusebio A. Morales 111",
            nbreChambres: 40,
            nbretoiles: 4,
            caracteristiques: ["au bord de mer", " salle de cinéma", " salle de gym"]
        },
        dateDepart: "2020-12-01",
        dateRetour: "2021-02-05",
        prix: 2476 ,
        rabais : 70,
        vedette : true
     },
     {  id : "2",
        destination: "Panama City, Panama",
        villeDeDepart: "Montreal",
        hotel: {
            id: "2",
            nom: "Hotel Riu Plaza",
            adresse: "Calle 50 con 53 Este Urb",
            nbreChambres: 55,
            nbretoiles: 5,
            caracteristiques: ["plage", " piscine", " buffet à volonté"]
        },
        dateDepart: "2020-12-31",
        dateRetour: "2021-02-01",
        prix: 1500 ,
        rabais : 50,
        vedette : false
     },
     {  id : "3",
        destination: "Panama City, Panama",
        villeDeDepart: "Montreal",
        hotel: {
            id: "3",
            nom: "Hard Rock Hotel",
            adresse: "123 Boulevard El Hayek",
            nbreChambres: 40,
            nbretoiles: 4,
            caracteristiques: ["Wi-Fi gratuit", " salle de gym", " Spa"]
        },
        dateDepart: "2020-12-10",
        dateRetour: "2021-02-10",
        prix: 1400 ,
        rabais : 0,
        vedette : true
     }

];
