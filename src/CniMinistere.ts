import type IDocumentImprimable from "./IDocumentImprimable";
import type { Personne } from "./types";
import Imprimante from "./Imprimante";

export default class CniMinistere implements IDocumentImprimable {
  constructor(
    private readonly personne: Personne,
    private readonly imprimante: Imprimante,
  ) {}

  recupererInformations(): void {
    console.log(`[CNI] Récupération des informations de ${this.personne.prenom} ${this.personne.nom}...`);
  }

  preparerEncres(): void {
    this.imprimante.preparerEncre("securisee");
  }

  verifierPapier(): void {
    this.imprimante.verifierPapier("carte");
  }

  imprimer(): void {
    this.imprimante.imprimer({ formatPapier: "carte", typeEncre: "securisee", resolution: 300 });
  }

  decouper(): void {
    this.imprimante.decouper("carte");
  }

  operationSpecifique(): void {
    console.log("[CNI] Plastification de la carte...");
  }
}
