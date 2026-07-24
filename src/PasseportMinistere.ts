import type IDocumentImprimable from "./IDocumentImprimable";
import type { Personne } from "./types";
import type Imprimante from "./Imprimante";

export default class PasseportMinistere implements IDocumentImprimable {
  constructor(
    private readonly personne: Personne,
    private readonly imprimante: Imprimante,
  ) {}

  recupererInformations(): void {
    console.log(
      `[Passeport] Récupération des informations de ${this.personne.prenom} ${this.personne.nom}...`,
    );
  }

  preparerEncres(): void {
    this.imprimante.preparerEncre("securisee");
  }

  verifierPapier(): void {
    this.imprimante.verifierPapier("livret");
  }

  imprimer(): void {
    this.imprimante.imprimer({ formatPapier: "livret", typeEncre: "securisee", resolution: 300 }); // 300 dpi est visiblement le standard d'impresion, pas trouvé de source sur la vrai résolution des documents officiels.
  }

  decouper(): void {
    this.imprimante.decouper("livret");
  }

  operationSpecifique(): void {
    console.log("[Passeport] Reliure du livret...");
  }
}
