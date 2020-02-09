import { DomService } from "./service.dom";
import { StoreService } from "./service.store";
import { LocationService } from "./service.location";

export class StatusComponent {
  private static getLocationText() {
    const currentPlayerLocation = LocationService.getPlayerLocation();
    return DomService.getP(`${currentPlayerLocation.region} > ${currentPlayerLocation.place} > ${currentPlayerLocation.room}`);
  }

  // TODO: left align location, right align time
  static getComponent(): DocumentFragment {
    const timeStr = StoreService.loadDateToString();
    const timeP = DomService.getP(`${timeStr}`);
    // TODO: breadcrumbs from store
    const travelCrumbs = StatusComponent.getLocationText();

    const frg = new DocumentFragment();
    const div = document.createElement('div');
    div.appendChild(travelCrumbs);
    div.appendChild(timeP);
    frg.appendChild(div);
    return frg;
  }
}
