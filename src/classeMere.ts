export class Vehicule {
  marque: string;
  modèle: string;
  anneeConstruction: number;
  private kilomètre: number;
  constructor(
    paramMarque: string,
    paramModèle: string,
    paramAnneeConstruction: number,
    paramKilomètre: number
  ) {
    this.marque = paramMarque;
    this.modèle = paramModèle;
    this.anneeConstruction = paramAnneeConstruction;
    this.kilomètre = paramKilomètre;
  }

  calculateKm(kilomètreParcourue: number) {
    this.kilomètre += kilomètreParcourue;
  }
  getKm(): number {
    return this.kilomètre;
  }
  setKm(newKm: number) {
    this.kilomètre = newKm;
  }
}
