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
  BASE_CHAR_SCORE = CONSTANTS.BASE_PRIMARY_CHARACTERISTIC_SCORE;

  constructor(name: string, gender: boolean) {
    this.name = name;
    this.gender = gender;

    // primary characteristics
    this.strength = this.BASE_CHAR_SCORE;
    this.dexterity = this.BASE_CHAR_SCORE;
    this.endurance = this.BASE_CHAR_SCORE;
    this.intelligence = this.BASE_CHAR_SCORE;
    this.perception = this.BASE_CHAR_SCORE;
    this.charisma = this.BASE_CHAR_SCORE;

    // secondary characteristics
    this.hp = this.maxHp = CONSTANTS.BASE_HP;
  }
}
