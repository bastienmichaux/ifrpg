import { DiceService } from "./service.dice";

export class NewGameGenerator {
  static getDayTime(): number {
    return DiceService.d(24 * 60 * 60);
  }
}
