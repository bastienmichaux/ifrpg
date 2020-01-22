interface buttonTemplate {
  text: string;
  click: () => any;
};

interface textInputTemplate {
  id: string;
  name: string;
};

interface radioInputTemplate {
  id: string;
  values: Array<string>;
};

const niy = () => console.warn('niy');

class DomService {
  static getButton(tpl: buttonTemplate): HTMLButtonElement {
    const btn = document.createElement('button');
    btn.textContent = tpl.text;
    btn.addEventListener('mouseup', tpl.click);
    return btn;
  }

  static getP(text: string): HTMLParagraphElement {
    const p = document.createElement('p');
    p.textContent = text;
    return p;
  }

  static getTextInput(tpl: textInputTemplate): HTMLInputElement {
    const input = document.createElement('input');
    input.type = 'text';
    input.id = tpl.id;
    // input.value = tpl.id;
    input.name = tpl.name;
    return input;
  }

  static getTextInputDiv(tpl: textInputTemplate): DocumentFragment {
    const frg = new DocumentFragment();
    const input = this.getTextInput(tpl);
    const label = document.createElement('label');
    label.textContent = tpl.id.toLowerCase();
    label.htmlFor = tpl.id;
    frg.appendChild(label);
    frg.appendChild(document.createElement('br'));
    frg.appendChild(input);
    frg.appendChild(document.createElement('br'));
    return frg;
  }

  static getRadioInputs(tpl: radioInputTemplate): HTMLDivElement {
    const div = document.createElement('div');
    const values = tpl.values;
    values.forEach(value => {
      // radio input
      const input = document.createElement('input');
      input.type = 'radio';
      input.name = tpl.id;
      input.value = value.toLowerCase();
      // label
      const label = document.createElement('label');
      label.textContent = value;
      label.htmlFor = 'niy'; // #%
      // assembly
      div.appendChild(input);
      div.appendChild(label);
      div.appendChild(document.createElement('br'));
    });
    return div;
  }
}

class AppService {
  static clear(): void {
    const app = document.getElementById('app');
    while (app.firstChild) {
      app.removeChild(app.firstChild)
    }
  }
}

class CharacterCreationView {
  static submitCharacter() {
    niy();
  }
  static render(): void {
    // page title
    const title = DomService.getP('create your character');

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

class StartView {
  static newGame(): void {
    CharacterCreationView.render();
  }
  static continueGame(): void {
    niy();
  }
  static render(): void {
    const savedGameExists = false; // #%

    // start screen title
    const title = DomService.getP('ifprg');

    // new game button
    const newGameBtn = DomService.getButton({
      text: 'new game',
      click: this.newGame
    });
    newGameBtn.style.display = 'block';

    // continue game button
    const continueGameBtn = DomService.getButton({
      text: 'continue game',
      click: this.continueGame
    });
    continueGameBtn.disabled = savedGameExists;
    newGameBtn.style.display = 'block';

    // assembly
    AppService.clear();
    const frg = new DocumentFragment();
    frg.appendChild(title);
    frg.appendChild(newGameBtn);
    frg.appendChild(continueGameBtn);
    document.getElementById('app').appendChild(frg);
  }
}

CharacterCreationView.render();
