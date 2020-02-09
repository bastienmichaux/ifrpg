import { DomService } from "./service.dom";
import { StoreService } from "./service.store";

interface PlayerLocation {
  region: string;
  place: string;
  room: string;
}

export class StatusComponent {
  private static getLocationText() {
    // TODO: get from store
    const currentPlayerLocation: PlayerLocation = {
      region: 'Bitter Coast',
      place: 'Seyda Neen',
      room: 'Census and Excise Office'
    };
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
