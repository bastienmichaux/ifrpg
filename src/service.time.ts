export class TimeService {
  static getTimeToString(daytime: number): string {
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
}
