abstract class Race {
  private _name: string;
  private _dexterity: number;
  constructor(readonly name: string, readonly dexterity: number) {
    this._name = name;
    this._dexterity = dexterity;
  }

  abstract get maxLifePoints(): number;

  static createdRacesInstances() {
    throw new Error('Not implemented');
  }
}

export default Race;