// interface commune cni + passeport
export default interface IDocumentImprimable {
  recupererInformations(): void;
  preparerEncres(): void;
  verifierPapier(): void;
  imprimer(): void;
  decouper(): void;
  operationSpecifique(): void;
}
