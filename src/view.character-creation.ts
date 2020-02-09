import { AppService } from "./service.app";
import { DomService } from "./service.dom";
import { ExplorationView } from "./view.exploration";
import { Character } from "./model.character";
import { NewGameService } from "./service.new-game";

export class CharacterCreationView {
  static getSelectedValues(): Character {
    // TODO: smarter
    const nameInput = <HTMLInputElement>document.getElementById('name');
    const name = nameInput.value;
    const genderRadioInputs = document.getElementsByName('gender');
    let selectedGender: boolean;
    genderRadioInputs.forEach((input: HTMLInputElement) => {
      if (input.checked === true) {
        selectedGender = (input.value === 'male' ? true : false);
      }
    });
    return new Character(name, selectedGender);
  }

  static submitCharacter() {
    const character = CharacterCreationView.getSelectedValues();
    NewGameService.setNewGame();
    ExplorationView.render();
  }

  static render(): void {
    // page title
    const title = DomService.getH1('Create your character');

    // gender input
    const genderInput = DomService.getRadioInputs({
      id: 'gender',
      values: ['Male', 'Female']
    });

    // name input
    const nameInput = DomService.getTextInput({
      id: 'name',
      name: 'Name'
    });

    // class input
    const classInput = DomService.getRadioInputs({
      id: 'class',
      values: [
        'Warrior',
        'Thief',
        'Wizard'
      ]
    });

    // submit button
    const submitBtn = DomService.getBlockyButton({
      text: 'Create character',
      click: CharacterCreationView.submitCharacter
    });

    // assembly
    AppService.clear();
    const frg = new DocumentFragment();
    frg.appendChild(title);
    frg.appendChild(DomService.getP('Character gender'));
    frg.appendChild(genderInput);
    frg.appendChild(DomService.getP('Character name'));
    frg.appendChild(nameInput);
    frg.appendChild(DomService.getP('Character class'));
    frg.appendChild(classInput);
    frg.appendChild(submitBtn);
    document.getElementById('app').appendChild(frg);
  }
}
