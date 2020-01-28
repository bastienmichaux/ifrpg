import { Character } from "./model.character";

export class CharacterGenerator {
  static getCharacter(): Character {
    return new Character('Anonymous', true);
  }
}
