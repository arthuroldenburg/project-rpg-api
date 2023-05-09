import Race from './Race';

class Halfling extends Race {
  maxLifePoints = 60;
  static HalflingInstances = 0;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Halfling.HalflingInstances += 1;
  }

  static createdRacesInstances(): number {
    return Halfling.HalflingInstances;
  } 
}

export default Halfling;