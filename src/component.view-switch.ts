import { DomService } from "./service.dom";
import { InventoryView } from "./view.inventory";
import { CharacterView } from "./view.character";
import { DiaryView } from "./view.diary";
import { TravelView } from "./view.travel";
import { ExplorationView } from "./view.exploration";
import { SpellbookView } from "./view.spellbook";
import { SettingsView } from "./view.settings";

// "navbar" in main game view

export class ViewSwitchComponent {
  static renderInventoryView() {
    InventoryView.render();
  }

  static renderCharacterView() {
    CharacterView.render();
  }

  static renderDiaryView() {
    DiaryView.render();
  }

  static renderTravelView() {
    TravelView.render();
  }

  static renderExplorationView() {
    ExplorationView.render();
  }

  static renderSpellbookView() {
    SpellbookView.render();
  }

  static renderSettingsView() {
    SettingsView.render();
  }

  // TODO: toggle display/enabled
  static getComponent(): DocumentFragment {
    const inventoryBtn = DomService.getButton({
      text: 'Inventory',
      click: () => ViewSwitchComponent.renderInventoryView()
    });
    const characterBtn = DomService.getButton({
      text: 'Character',
      click: () => ViewSwitchComponent.renderCharacterView()
    });
    const diaryBtn = DomService.getButton({
      text: 'Diary',
      click: () => ViewSwitchComponent.renderDiaryView()
    });
    const travelBtn = DomService.getButton({
      text: 'Travel',
      click: () => ViewSwitchComponent.renderTravelView()
    });
    const explorationBtn = DomService.getButton({
      text: 'Exploration',
      click: () => ViewSwitchComponent.renderExplorationView()
    });
    const spellbookBtn = DomService.getButton({
      text: 'Spellbook',
      click: () => ViewSwitchComponent.renderSpellbookView()
    });
    const settingsBtn = DomService.getButton({
      text: 'Menu',
      click: () => ViewSwitchComponent.renderSettingsView()
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
