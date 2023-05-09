import Race from './Race';

class Elf extends Race {
  maxLifePoints = 99;
  static elfInstances = 0;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Elf.elfInstances += 1;
  }

  static createdRacesInstances(): number {
    return Elf.elfInstances;
  }
}

export default Elf;