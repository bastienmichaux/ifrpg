import { CONSTANTS } from "./constants.app";

export class Character {
  readonly name: string;
  readonly gender: boolean;

  // primary characteristics
  strength: number;
  dexterity: number;
  endurance: number;
  intelligence: number;
  perception: number;
  charisma: number;

  // secondary characteristics
  hp: number;
  maxHp: number;

  // aliases
  BASE_CHAR = CONSTANTS.BASE_CHARACTERISTICS;

  // TODO: what's needed to generate a character?
  // (randomly or based on player's choices)
  constructor(name: string, gender: boolean) {
    this.name = name;
    this.gender = gender;

    // primary characteristics
    this.strength = this.BASE_CHAR;
    this.dexterity = this.BASE_CHAR;
    this.endurance = this.BASE_CHAR;
    this.intelligence = this.BASE_CHAR;
    this.perception = this.BASE_CHAR;
    this.charisma = this.BASE_CHAR;

    // secondary characteristics
    this.hp = this.maxHp = CONSTANTS.BASE_HP;
  }
}
