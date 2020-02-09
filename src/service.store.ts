import { GameDate } from "./service.date";

const enum StoreAlias {
  // SAVED_GAME_EXISTS = 'SAVED_GAME_EXISTS',
  DATE = 'DATE',
  DATE_TO_STRING = 'DATE_TO_STRING',
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
}
