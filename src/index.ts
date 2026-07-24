import { type Personne, TypeDocument } from "./types";
import DocumentFactory from "./DocumentFactory";

const personne: Personne = {
  nom: "DHDT",
  prenom: "CLEM",
  dateNaissance: "2000-01-01",
  numeroIdentifiant: "123456789",
};

const factory = new DocumentFactory();

factory.creerDocument(TypeDocument.CNI, personne).lancerImpression();
factory.creerDocument(TypeDocument.CARTE_VITALE, personne).lancerImpression();
factory.creerDocument(TypeDocument.PASSEPORT, personne).lancerImpression();
