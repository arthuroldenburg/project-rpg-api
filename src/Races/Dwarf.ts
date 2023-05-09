import Race from './Race';

class Dwarf extends Race {
  maxLifePoints = 80;
  static DwarfInstances = 0;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Dwarf.DwarfInstances += 1;
  }

  static createdRacesInstances(): number {
    return Dwarf.DwarfInstances;
  }
}

export default Dwarf;