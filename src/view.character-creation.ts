import { AppService } from "./service.app";
import { DomService } from "./service.dom";
import { ExplorationView } from "./view.exploration";

export class CharacterCreationView {
  static submitCharacter() {
    ExplorationView.render();
  }
  static render(): void {
    // page title
    const title = DomService.getP('Create your character');

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
      values: ['Warrior', 'Thief', 'Wizard']
    });

    // submit button
    const submitBtn = DomService.getButton({
      text: 'Create character',
      click: this.submitCharacter
    });
    submitBtn.className = 'blocky';

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
