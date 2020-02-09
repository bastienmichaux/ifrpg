import { AppService } from './service.app';
import { DomService } from './service.dom';
import { CharacterCreationView } from './view.character-creation';

export class StartView {
  static newGame(): void {
    CharacterCreationView.render();
  }

  static continueGame(): void {
    // TODO: load saved game, last saved view
    console.warn('niy');
  }

  static render(): void {
    // TODO: get it from storage
    const savedGameExists = false;

    // start screen title
    const title = DomService.getH1('IFRPG');

    // new game button
    const newGameBtn = DomService.getBlockyButton({
      text: 'New game',
      click: StartView.newGame
    });

    // continue game button
    // if no saved game, just display "no saved game"
    const continueGameElement = !savedGameExists
      ? DomService.getP('No saved game')
      : DomService.getBlockyButton({
        text: 'Continue game',
        click: StartView.continueGame
      });

    // assembly
    AppService.clear();
    const frg = new DocumentFragment();
    frg.appendChild(title);
    frg.appendChild(newGameBtn);
    frg.appendChild(continueGameElement);
    document.getElementById('app').appendChild(frg);
  }
}
