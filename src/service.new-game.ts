import { GameDate, DateService } from "./service.date";
import { ExplorationView } from "./view.exploration";
import { StoreService } from "./service.store";
import { PlayerLocation } from "./service.location";

export class NewGameService {
  // TODO: get new game params from character creation
  static setNewGame(): void {
    // TODO: store character
    // TODO: generate random starting position
    ExplorationView.render();
    const gameDate: GameDate = DateService.randomDate();
    const gameDateToString: string = DateService.dateToString(gameDate);
    // TODO: get player location from random new world generation
    const currentPlayerLocation: PlayerLocation = {
      region: 'Bitter Coast',
      place: 'Seyda Neen',
      room: 'Census and Excise Office'
    };
    StoreService.saveDate(gameDate);
    StoreService.saveDateToString(gameDateToString);
    StoreService.savePlayerLocation(currentPlayerLocation);
  }
}
