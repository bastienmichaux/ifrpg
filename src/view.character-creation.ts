import { AppService } from "./service.app";
import { DomService } from "./service.dom";

export class CharacterCreationView {
  static submitCharacter() {
    console.warn('niy');
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
    const nameInput = DomService.getTextInputDiv({
      id: 'name',
      name: 'Name'
    });

    // submit button
    const submitBtn = DomService.getButton({
      text: 'create character',
      click: this.submitCharacter
    });
    submitBtn.style.display = 'block';

    // assembly
    AppService.clear();
    const frg = new DocumentFragment();
    frg.appendChild(title);
    frg.appendChild(genderInput);
    frg.appendChild(nameInput);
    frg.appendChild(submitBtn);
    document.getElementById('app').appendChild(frg);
  }
}
