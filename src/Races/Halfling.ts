import Race from './Race';

class Halfling extends Race {
  maxLifePoints = 60;
  static halflingInstances = 0;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Halfling.halflingInstances += 1;
  }

  static createdRacesInstances(): number {
    return Halfling.halflingInstances;
  } 
}

export default Halfling;