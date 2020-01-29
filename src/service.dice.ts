export class DiceService {
  // d(10) => random integer between 0 and 9 (both included)
  static d(max: number): number {
    return Math.floor(Math.random() * max);
  }
  static arrayD(arr: Array<any>): number {
    return DiceService.d(arr.length);
  }
}
