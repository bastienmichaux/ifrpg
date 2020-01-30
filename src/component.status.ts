import { DomService } from "./service.dom";
import { NewGameGenerator } from "./generator.new-game";
import { TimeService } from "./service.time";

export class StatusComponent {
  static getComponent(): HTMLElement {
    // stored data
    // TODO: game start ? random gen : get it from storage
    const location = 'No location';
    const time = NewGameGenerator.getDayTime();
    const timeStr = `Day 1 - ${TimeService.getTimeToString(time)}`;

    // time - day
    // TODO: left align location, right align time
    return DomService.getP(`${location} - ${timeStr}`);
  }
}
