import { DomService } from "./service.dom";
import { AppService } from "./service.app";

export class ExplorationView {
  static render() {
    // time - day
    const dayP = DomService.getP('NoName character - Day 1 - noon');

    // aside
    const inventoryBtn = DomService.getButton({
      text: 'Inventory',
      click: () => console.log('niy')
    });
    const characterBtn = DomService.getButton({
      text: 'Character',
      click: () => console.log('niy')
    });
    const diaryBtn = DomService.getButton({
      text: 'Diary',
      click: () => console.log('niy')
    });
    const travelBtn = DomService.getButton({
      text: 'Travel',
      click: () => console.log('niy')
    });
    const explorationBtn = DomService.getButton({
      text: 'Exploration',
      click: () => console.log('niy')
    });
    const spellbookBtn = DomService.getButton({
      text: 'Spellbook',
      click: () => console.log('niy')
    });
    const settingsBtn = DomService.getButton({
      text: 'Menu',
      click: () => console.log('niy')
    });

    // assembly
    AppService.clear();
    const frg = new DocumentFragment();
    frg.appendChild(dayP);
    frg.appendChild(explorationBtn);
    frg.appendChild(inventoryBtn);
    frg.appendChild(characterBtn);
    frg.appendChild(diaryBtn);
    frg.appendChild(spellbookBtn);
    frg.appendChild(travelBtn);
    frg.appendChild(settingsBtn);
    document.getElementById('app').appendChild(frg);
  }
}
