abstract class Archetype {
  readonly name: string;
  readonly special: number;
  readonly cost: number;
  static achetypeInstances = 0;
  constructor(name: string) {
    this.name = name;
    this.special = 0;
    this.cost = 0;
    Archetype.achetypeInstances += 1;
  }

  static createdArchetypeInstances() {
    throw new Error('Not implemented');
  }

  abstract get energyType(): string;
}

export default Archetype;