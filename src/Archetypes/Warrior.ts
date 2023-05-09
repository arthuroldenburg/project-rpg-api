import Archetype from './Archetype';

class Warrior extends Archetype {
  energyType = 'stamina';
  static WarriorInstances = 0;
  constructor(name: string) {
    super(name);
    Warrior.WarriorInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return Warrior.WarriorInstances;
  }
}

export default Warrior;