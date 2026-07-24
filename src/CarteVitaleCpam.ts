import type { Personne } from "./types";
import Imprimante from "./Imprimante";

export default class CarteVitaleCpam {
  constructor(
    private readonly personne: Personne,
    private readonly imprimante: Imprimante,
  ) {}

  fetchPatientData(): void {
    console.log(`[CPAM] Récupération du dossier de ${this.personne.prenom} ${this.personne.nom}...`);
  }

  initializeInk(): void {
    this.imprimante.preparerEncre("couleur");
  }

  verifySupport(): void {
    this.imprimante.verifierPapier("carte");
  }

  startPrint(): void {
    this.imprimante.imprimer({ formatPapier: "carte", typeEncre: "couleur", resolution: 300 });
  }

  cutCard(): void {
    this.imprimante.decouper("carte");
  }

  finalizeCard(): void {
    console.log("[CPAM] Finalisation de la carte Vitale...");
  }
}
