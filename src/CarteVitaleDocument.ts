import DocumentAImprimer from "./DocumentAImprimer";

export default class CarteVitaleDocument extends DocumentAImprimer {
  protected override operationSpecifique(): void {
    console.log("specifique : finalisation de la carte..."); // temp le temps de voir si ca casse sans
    this.systeme.operationSpecifique();
  }

  protected override nomDocument(): string {
    return "Carte Vitale";
  }
}
