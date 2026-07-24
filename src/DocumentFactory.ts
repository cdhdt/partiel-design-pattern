import Imprimante from "./Imprimante";

export default class DocumentFactory {
  imprimante: Imprimante;

  constructor(imprimante: Imprimante = new Imprimante()) {
    this.imprimante = imprimante;
  }


}
