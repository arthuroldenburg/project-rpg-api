import Race from './Race';

class Orc extends Race {
  maxLifePoints = 74;
  static orcInstances = 0;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Orc.orcInstances += 1;
  }

  static createdRacesInstances(): number {
    return Orc.orcInstances;
  } 
}

export default Orc;