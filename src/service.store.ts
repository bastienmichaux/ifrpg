const enum StoreAlias {
  SAVED_GAME_EXISTS = 'SAVED_GAME_EXISTS',
  DATE = 'DATE'
};

export class StoreService {
  private static save(dataAlias: string, data: any): void {
    localStorage.setItem(dataAlias, JSON.stringify(data));
  }
  private static load(x: any): any {
    return JSON.parse(localStorage.getItem(x));
  }
  static saveDate(date: number): void {
    StoreService.save(StoreAlias.DATE, date);
  }
  static loadDate(): number {
    return StoreService.load(StoreAlias.DATE);
  }
}
