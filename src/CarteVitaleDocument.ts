import DocumentAImprimer from "./DocumentAImprimer";

export default class CarteVitaleDocument extends DocumentAImprimer {
  protected override operationSpecifique(): void {
    console.log("specifique : finalisation de la carte...");
    this.systeme.operationSpecifique();
  }

  protected override nomDocument(): string {
    return "Carte Vitale";
  }
}
