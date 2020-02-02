export class CharacterService {
  static genderToString(gender: boolean): string {
    return gender ? 'man' : 'woman';
  }
}
