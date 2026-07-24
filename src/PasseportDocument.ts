import DocumentAImprimer from "./DocumentAImprimer";

export default class PasseportDocument extends DocumentAImprimer {
  protected override operationSpecifique(): void {
    console.log("specifique : reliure...");
    this.systeme.operationSpecifique();
  }

  protected override nomDocument(): string {
    return "Passeport";
  }
}
