import { GameDate } from "./service.date";
import { PlayerLocation } from "./service.location";

const enum StoreAlias {
  // SAVED_GAME_EXISTS = 'SAVED_GAME_EXISTS',
  DATE = 'DATE',
  DATE_TO_STRING = 'DATE_TO_STRING',
  PLAYER_LOCATION = 'PLAYER_LOCATION',
};

export class StoreService {
  private static save(dataAlias: StoreAlias, data: any): void {
    localStorage.setItem(dataAlias, JSON.stringify(data));
  }
  private static load(x: any): any {
    return JSON.parse(localStorage.getItem(x));
  }
  static saveDate(date: GameDate): void {
    StoreService.save(StoreAlias.DATE, date);
  }
  static loadDate(): GameDate {
    return StoreService.load(StoreAlias.DATE);
  }
  static saveDateToString(date: string): void {
    StoreService.save(StoreAlias.DATE_TO_STRING, date);
  }
  static loadDateToString(): string {
    return StoreService.load(StoreAlias.DATE_TO_STRING);
  }
  static savePlayerLocation(currentPlayerLocation: PlayerLocation): void {
    return StoreService.save(StoreAlias.PLAYER_LOCATION, currentPlayerLocation);
  }
  static loadPlayerLocation(): PlayerLocation {
    return StoreService.load(StoreAlias.PLAYER_LOCATION);
  }
}
