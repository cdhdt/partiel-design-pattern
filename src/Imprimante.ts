import type { FormatPapier, ParametresImpression, TypeEncre } from "./types";

export default class Imprimante {
    preparerEncre(typeEncre: TypeEncre): void {
        console.log(`[Imprimante] Préparation encre (${typeEncre})...`);
    }

    verifierPapier(formatPapier: FormatPapier): void {
        console.log(`[Imprimante] Vérification papier (format ${formatPapier})...`);
    }

    imprimer(parametres: ParametresImpression): void {
        console.log(
            `[Imprimante] Impression en cours (format: ${parametres.formatPapier}, encre: ${parametres.typeEncre})...`,
        );
    }

    decouper(formatPapier: FormatPapier): void {
        console.log(`[Imprimante] Découpe au format ${formatPapier}...`);
    }
}
