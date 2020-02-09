import { DomService } from "./service.dom";
import { StoreService } from "./service.store";
import { PlayerLocation } from "./service.location";

export class StatusComponent {
  private static getLocationText() {
    const currentPlayerLocation: PlayerLocation = StoreService.loadPlayerLocation();
    return DomService.getP(`${currentPlayerLocation.region} > ${currentPlayerLocation.place} > ${currentPlayerLocation.room}`);
  }

  // TODO: left align location, right align time
  static getComponent(): DocumentFragment {
    const timeStr = StoreService.loadDateToString();
    const timeP = DomService.getP(`${timeStr}`);
    const travelCrumbs = StatusComponent.getLocationText();

    // assembly
    const frg = new DocumentFragment();
    const div = document.createElement('div');
    div.appendChild(travelCrumbs);
    div.appendChild(timeP);
    frg.appendChild(div);
    return frg;
  }
}
