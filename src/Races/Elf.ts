import Race from './Race';

class Elf extends Race {
  maxLifePoints = 99;
  static ElfInstances = 0;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Elf.ElfInstances += 1;
  }

  static createdRacesInstances(): number {
    return Elf.ElfInstances;
  }
}

export default Elf;