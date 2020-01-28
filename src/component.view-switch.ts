import { DomService } from "./service.dom";

export class ViewSwitchComponent {
  static renderInventoryView() {
    console.log('niy');
  }
  static renderCharacterView() {
    console.log('niy');
  }
  static renderDiaryView() {
    console.log('niy');
  }
  static renderTravelView() {
    console.log('niy');
  }
  static renderExplorationView() {
    console.log('niy');
  }
  static renderSpellbookView() {
    console.log('niy');
  }
  static renderSettingsView() {
    console.log('niy');
  }
  static render(): DocumentFragment {
    // buttons
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
    const frg = new DocumentFragment;
    frg.appendChild(explorationBtn);
    frg.appendChild(inventoryBtn);
    frg.appendChild(characterBtn);
    frg.appendChild(diaryBtn);
    frg.appendChild(spellbookBtn);
    frg.appendChild(travelBtn);
    frg.appendChild(settingsBtn);
    return frg;
  }
}
