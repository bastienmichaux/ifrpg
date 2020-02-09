import { GameDate, DateService } from "./service.date";
import { ExplorationView } from "./view.exploration";
import { StoreService } from "./service.store";

export class NewGameService {
  // TODO: get new game params from character creation
  static setNewGame(): void {
    // TODO: store character
    // TODO: generate random starting position
    ExplorationView.render();
    const gameDate: GameDate = DateService.randomDate();
    console.log(gameDate);
    const gameDateToString: string = DateService.dateToString(gameDate);
    console.log(gameDate);
    StoreService.saveDate(gameDate);
    StoreService.saveDateToString(gameDateToString);
    console.log(StoreService.loadDate());
    console.log(StoreService.loadDateToString());
  }
}
