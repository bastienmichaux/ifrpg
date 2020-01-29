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
      click: () => ViewSwitchComponent.renderInventoryView
    });
    const characterBtn = DomService.getButton({
      text: 'Character',
      click: () => ViewSwitchComponent.renderCharacterView
    });
    const diaryBtn = DomService.getButton({
      text: 'Diary',
      click: () => ViewSwitchComponent.renderDiaryView
    });
    const travelBtn = DomService.getButton({
      text: 'Travel',
      click: () => ViewSwitchComponent.renderTravelView
    });
    const explorationBtn = DomService.getButton({
      text: 'Exploration',
      click: () => ViewSwitchComponent.renderExplorationView
    });
    const spellbookBtn = DomService.getButton({
      text: 'Spellbook',
      click: () => ViewSwitchComponent.renderSpellbookView
    });
    const settingsBtn = DomService.getButton({
      text: 'Menu',
      click: () => ViewSwitchComponent.renderSettingsView
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
