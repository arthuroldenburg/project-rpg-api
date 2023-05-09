import Archetype from './Archetype';

class Necromancer extends Archetype {
  energyType = 'mana';
  static NecromancerInstances = 0;
  constructor(name: string) {
    super(name);
    Necromancer.NecromancerInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return Necromancer.NecromancerInstances;
  }
}

export default Necromancer;