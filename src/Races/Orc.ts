import Race from './Race';

class Orc extends Race {
  maxLifePoints = 74;
  static OrcInstances = 0;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Orc.OrcInstances += 1;
  }

  static createdRacesInstances(): number {
    return Orc.OrcInstances;
  } 
}

export default Orc;