import { Vehicule } from "./classeMere";

export class spaceship extends Vehicule {
  private immatriculation: string | null;
  constructor(
    paramMarqueF: string,
    paramModèleF: string,
    paramAnneeConstruction: number,
    onSenFouEnFaiteDuNom: string | null,
    kilomètre: number
  ) {
    super(paramMarqueF, paramModèleF, paramAnneeConstruction, kilomètre);
    this.immatriculation = onSenFouEnFaiteDuNom;
  }

  calculateKm(kilomètreParcourue: number): void {
    this.setKm(this.getKm() + 10 * kilomètreParcourue);
  }
}

// export class superSpaceShip extends spaceship {
//   constructor(a: string, b: string, c: number, unTruc: string | null) {
//     super(a, b, c, unTruc);
//   }
// }
