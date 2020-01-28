export class Character {
  readonly name: string;
  readonly gender: boolean;

  constructor(name: string, gender: boolean) {
    this.name = name;
    this.gender = gender;
  }
}
