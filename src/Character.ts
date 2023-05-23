import Fighter, { SimpleFighter } from './Fighter';
import Energy from './Energy';
import Race, { Elf } from './Races';
import Archetype, { Mage } from './Archetypes';
import getRandomInt from './utils';

class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;

  get race(): Race { return this._race; }
  get archetype(): Archetype { return this._archetype; }
  get maxLifePoints(): number { return this._maxLifePoints; }
  get lifePoints(): number { return this._lifePoints; }
  get strength(): number { return this._strength; }
  get defense(): number { return this._defense; }
  get dexterity(): number { return this._dexterity; }
  get energy(): Energy {
    return {
      type_: this._energy.type_, amount: this._energy.amount,
    }; 
  }
  
  constructor(name: string) {
    this._dexterity = getRandomInt(1, 10);
    this._race = new Elf(name, this._dexterity);
    this._archetype = new Mage(name);
    this._maxLifePoints = Number((this._race.maxLifePoints / 2).toFixed());
    this._lifePoints = this._maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._energy = { type_: 'mana', amount: getRandomInt(1, 10) };
  }

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this._defense;
    if (damage > 0) this._lifePoints -= damage;
    if (damage <= 0) this._lifePoints -= 1;
    if (this.lifePoints <= 0) this._lifePoints = -1;
    return this.lifePoints;
  }
  
  attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this._strength);
  }
  
  levelUp(): void {
    const setMaxLife = this._maxLifePoints + getRandomInt(1, 10);
    this._maxLifePoints = setMaxLife;
    if (setMaxLife > 99) {
      this._maxLifePoints = 99;
    }
    this._lifePoints = this._maxLifePoints;
    this._dexterity += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    this._strength += getRandomInt(1, 10);
    this._energy = { type_: 'mana', amount: 10 };
  }

  special?(enemy: Fighter): void {
    console.log(this.attack, enemy);
  }
}

export default Character;