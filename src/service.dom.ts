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

export class DomService {
  static getButton(tpl: buttonTemplate): HTMLButtonElement {
    const btn = document.createElement('button');
    btn.textContent = tpl.text;
    btn.addEventListener('mouseup', tpl.click);
    return btn;
  }

  static getBlockyButton(tpl: buttonTemplate): HTMLButtonElement {
    const btn = DomService.getButton(tpl);
    btn.className = 'blocky';
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
