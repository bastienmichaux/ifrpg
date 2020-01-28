import { Character } from "./model.character";

export class CharacterService {
  static getDescription(ch: Character): string {
    return `${ch.name} is a ${CharacterService.genderToString(ch.gender)}`;
  }

  static genderToString(gender: boolean): string {
    return gender === true ? 'man' : 'woman';
  }
}
