export interface Personne {
    nom: string;
    prenom: string;
    dateNaissance: string;
    numeroIdentifiant: string;
}

export type FormatPapier = "carte" | "livret";
export type TypeEncre = "noir" | "couleur" | "securisee";

export interface ParametresImpression {
    formatPapier: FormatPapier;
    typeEncre: TypeEncre;
    resolution: number;
}

export enum TypeDocument {
    CNI = "CNI",
    PASSEPORT = "PASSEPORT",
    CARTE_VITALE = "CARTE_VITALE",
}
