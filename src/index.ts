import { CharacterCreationView } from './view.character-creation';
import { StartView } from './view.start';
import { ExplorationView } from './view.exploration';
import { NewGameService } from './service.new-game';

localStorage.clear();

NewGameService.setNewGame();

// StartView.render();
// CharacterCreationView.render();
ExplorationView.render();
