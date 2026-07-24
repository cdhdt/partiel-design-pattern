import DocumentAImprimer from "./DocumentAImprimer";

export default class CniDocument extends DocumentAImprimer {
  protected override operationSpecifique(): void {
    console.log("specifique : plastification...");
    this.systeme.operationSpecifique();
  }

  protected override nomDocument(): string {
    return "CNI";
  }
}
