import type IDocumentImprimable from "./IDocumentImprimable";
import type CarteVitaleCpam from "./CarteVitaleCpam";

export default class CarteVitaleAdapter implements IDocumentImprimable {
  carteVitaleCpam: CarteVitaleCpam;

  constructor(carteVitaleCpam: CarteVitaleCpam) {
    this.carteVitaleCpam = carteVitaleCpam;
  }

  recupererInformations(): void {
    this.carteVitaleCpam.fetchPatientData();
  }

  preparerEncres(): void {
    this.carteVitaleCpam.initializeInk();
  }

  verifierPapier(): void {
    this.carteVitaleCpam.verifySupport();
  }

  imprimer(): void {
    this.carteVitaleCpam.startPrint();
  }

  decouper(): void {
    this.carteVitaleCpam.cutCard();
  }

  operationSpecifique(): void {
    this.carteVitaleCpam.finalizeCard();
  }
}
