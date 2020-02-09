import { DiceService } from "./service.dice";

export interface GameDate {
  year: number;
  month: number;
  day: number;
  time: number;
};

// handle dates etc
export class DateService {
  static dateToString(gameDate: GameDate): string {
    const year = gameDate.year;
    const month = DateService.monthToString(gameDate.month);
    const day = DateService.dayToString(gameDate.day);
    const time = DateService.timeToString(gameDate.time);
    return `${day} of ${month} ${year} - ${time}`;
  }

  private static dayToString(day: number): string {
    if (day === 1 || day === 21) {
      return `${day}st`;
    } else if (day === 2 || day === 22) {
      return `${day}nd`;
    } else if (day === 3 || day === 23) {
      return `${day}rd`;
    } else {
      return `${day}th`;
    }
  }

  private static monthToString(month: number): string {
    switch (month) {
      case 1: return 'January';
      case 2: return 'February';
      case 3: return 'March';
      case 4: return 'April';
      case 5: return 'May';
      case 6: return 'June';
      case 7: return 'July';
      case 8: return 'August';
      case 9: return 'September';
      case 10: return 'October';
      case 11: return 'November';
      case 12: return 'December';
    }
  }

  static timeToString(daytime: number): string {
    // TODO: check daytime < 24*60*60
    // TODO: move day time period nouns to constants
    // TODO: realistic daytime
    // TODO: daytime f day of the year
    // TODO: unknown/assumed daytime if inside since > (n hours inside + (avg(intelligence+perception)/2) - 20)
    if (daytime >= 0 && daytime < 4 * 60 * 60) return 'late night';
    if (daytime >= 4 * 60 * 60 && daytime < 6 * 60 * 60) return 'early morning';
    if (daytime >= 6 * 60 * 60 && daytime < 7 * 60 * 60) return 'dawn';
    if (daytime >= 7 * 60 * 60 && daytime < 11 * 60 * 60) return 'morning';
    if (daytime >= 11 * 60 * 60 && daytime < 13 * 60 * 60) return 'noon';
    if (daytime >= 13 * 60 * 60 && daytime < 14 * 60 * 60) return 'early afternoon';
    if (daytime >= 14 * 60 * 60 && daytime < 15 * 60 * 60) return 'afternoon';
    if (daytime >= 15 * 60 * 60 && daytime < 18 * 60 * 60) return 'twilight';
    if (daytime >= 18 * 60 * 60 && daytime < 20 * 60 * 60) return 'evening';
    if (daytime >= 20 * 60 * 60 && daytime <= 24 * 60 * 60) return 'night';
    else throw new Error(`unknown daytime ${daytime}`)
  }

  static randomDate(): GameDate {
    return {
      year: 1236 + DiceService.d(224),
      month: DiceService.d(12),
      day: DiceService.d(30),
      time: DiceService.d(24 * 60 * 60)
    }
  }
}
