import Archetype from './Archetype';

class Mage extends Archetype {
  energyType = 'mana';
  static MageInstances = 0;
  constructor(name: string) {
    super(name);
    Mage.MageInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return Mage.MageInstances;
  }
}

export default Mage;