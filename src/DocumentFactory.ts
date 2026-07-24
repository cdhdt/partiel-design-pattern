import { type Personne, TypeDocument } from "./types";
import Imprimante from "./Imprimante";
import CniMinistere from "./CniMinistere";
import CniDocument from "./CniDocument";
import type DocumentAImprimer from "./DocumentAImprimer";

export default class DocumentFactory {
  imprimante: Imprimante;

  constructor(imprimante: Imprimante = new Imprimante()) {
    this.imprimante = imprimante;
  }

  creerDocument(type: TypeDocument, personne: Personne): DocumentAImprimer {
    if (type === TypeDocument.CNI) {
      return new CniDocument(new CniMinistere(personne, this.imprimante));
    }

    throw new Error(`type ${type} non pris en charge`);
  }
}
