import Race from './Race';

class Dwarf extends Race {
  maxLifePoints = 80;
  static dwarfInstances = 0;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Dwarf.dwarfInstances += 1;
  }

  static createdRacesInstances(): number {
    return Dwarf.dwarfInstances;
  }
}

export default Dwarf;