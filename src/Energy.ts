type EnergyType = 'stamina' | 'mana';

export { EnergyType };

interface Energy {
  type_: EnergyType
  amount: number
}

export default Energy;