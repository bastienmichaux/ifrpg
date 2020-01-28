import { AppService } from './service.app';
import { DomService } from './service.dom';
import { CharacterCreationView } from './view.character-creation';

export class StartView {
  static newGame(): void {
    CharacterCreationView.render();
  }
  static continueGame(): void {
    console.warn('niy');
  }
  static render(): void {
    // $TODO: get it from storage
    const savedGameExists = false;

    // start screen title
    const title = DomService.getP('ifprg');

    // new game button
    const newGameBtn = DomService.getButton({
      text: 'New game',
      click: this.newGame
    });
    newGameBtn.className = 'blocky';

    // continue game button
    const continueGameBtn = DomService.getButton({
      text: 'Continue game',
      click: this.continueGame
    });
    continueGameBtn.disabled = savedGameExists;
    continueGameBtn.className = 'blocky';

    // assembly
    AppService.clear();
    const frg = new DocumentFragment();
    frg.appendChild(title);
    frg.appendChild(newGameBtn);
    frg.appendChild(continueGameBtn);
    document.getElementById('app').appendChild(frg);
  }
}
