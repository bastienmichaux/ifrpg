import { DomService } from "./service.dom";
import { TimeService } from "./service.time";
import { StoreService } from "./service.store";

export class StatusComponent {
  static getComponent(): DocumentFragment {
    // stored data
    // TODO: game start ? random gen : get it from storage
    const location = 'No location';
    const time = StoreService.loadDate();
    const timeStr = `Day 1 - ${TimeService.getTimeToString(time)}`;

    // TODO: breadcrumbs from store
    const travelCrumbs = DomService.getP(`Region > Settlement > Room`);

    // time - day
    // TODO: left align location, right align time
    const frg = new DocumentFragment();
    frg.appendChild(travelCrumbs);
    frg.appendChild(DomService.getP(`${location} - ${timeStr}`));
    return frg;
  }
}
