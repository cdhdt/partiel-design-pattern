import { type Personne, TypeDocument } from "./types";
import Imprimante from "./Imprimante";
import CniMinistere from "./CniMinistere";
import CniDocument from "./CniDocument";
import type DocumentAImprimer from "./DocumentAImprimer";
import CarteVitaleCpam from "./CarteVitaleCpam";
import CarteVitaleDocument from "./CarteVitaleDocument";
import CarteVitaleAdapter from "./CarteVitaleAdapter";
import PasseportDocument from "./PasseportDocument";
import PasseportMinistere from "./PasseportMinistere";

export default class DocumentFactory {
  imprimante: Imprimante;

  constructor(imprimante: Imprimante = new Imprimante()) {
    this.imprimante = imprimante;
  }

  creerDocument(type: TypeDocument, personne: Personne): DocumentAImprimer {
    if (type === TypeDocument.CNI) {
      return new CniDocument(new CniMinistere(personne, this.imprimante));
    }
    if (type === TypeDocument.CARTE_VITALE) {
      return new CarteVitaleDocument(
        new CarteVitaleAdapter(new CarteVitaleCpam(personne, this.imprimante)),
      );
    }
    if (type === TypeDocument.PASSEPORT) {
      return new PasseportDocument(new PasseportMinistere(personne, this.imprimante));
    }

    throw new Error(`type ${type} non pris en charge`);
  }
}
