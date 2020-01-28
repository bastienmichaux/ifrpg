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
    const newGameBtn = DomService.getBlockyButton({
      text: 'New game',
      click: this.newGame
    });

    // continue game button
    const continueGameBtn = DomService.getBlockyButton({
      text: 'Continue game',
      click: this.continueGame
    });

    // assembly
    AppService.clear();
    const frg = new DocumentFragment();
    frg.appendChild(title);
    frg.appendChild(newGameBtn);
    savedGameExists
      ? frg.appendChild(DomService.getP('No saved game'))
      : frg.appendChild(continueGameBtn);
    document.getElementById('app').appendChild(frg);
  }
}
