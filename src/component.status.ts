import { DomService } from "./service.dom";
import { StoreService } from "./service.store";

export class StatusComponent {
  static getComponent(): DocumentFragment {
    // stored data
    const location = 'No location';
    const timeStr = StoreService.loadDateToString();

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
