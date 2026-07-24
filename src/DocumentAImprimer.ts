import type IDocumentImprimable from "./IDocumentImprimable";

export default abstract class DocumentAImprimer {
  constructor(protected readonly systeme: IDocumentImprimable) {}

  lancerImpression(): void {
    console.log(`--- Début de l'impression : ${this.nomDocument()} ---`);
    console.log("Récupération des informations...");
    this.systeme.recupererInformations();
    console.log("Préparation des encres...");
    this.systeme.preparerEncres();
    console.log("Vérification de la présence de papier...");
    this.systeme.verifierPapier();
    console.log("Impression...");
    this.systeme.imprimer();
    console.log("Découpe...");
    this.systeme.decouper();
    this.operationSpecifique();
    console.log(`--- Fin de l'impression : ${this.nomDocument()} ---`);
  }

  protected operationSpecifique(): void {}

  protected abstract nomDocument(): string;
}
