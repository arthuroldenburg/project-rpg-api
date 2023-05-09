import Archetype from './Archetype';

class Ranger extends Archetype {
  energyType = 'stamina';
  static RangerInstances = 0;
  constructor(name: string) {
    super(name);
    Ranger.RangerInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return Ranger.RangerInstances;
  }
}

export default Ranger;