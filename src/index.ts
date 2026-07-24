import {type Personne, TypeDocument} from "./types.ts";
import DocumentFactory from "./DocumentFactory.ts";

const personne: Personne = {
    nom: "DHDT",
    prenom: "CLEM",
    dateNaissance: "2000-01-01",
    numeroIdentifiant: "123456789",
};

const factory = new DocumentFactory();

factory.creerDocument(TypeDocument.CNI, personne).lancerImpression();
