import { DomService } from "./service.dom";

export class StatusComponent {
  static getComponent(): HTMLElement {
    // stored data
    // TODO: game start ? random gen : get it from storage
    const location = 'No location';
    const time = 'Day 1 - noon';

    // time - day
    // TODO: left align location, right align time
    return DomService.getP(`${location} - ${time}`);
  }
}
