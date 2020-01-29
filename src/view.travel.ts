import { DomService } from "./service.dom";
import { AppService } from "./service.app";
import { ViewSwitchComponent } from "./component.view-switch";
import { StatusComponent } from "./component.status";

export class TravelView {
  static render() {
    // assembly
    AppService.clear();
    const frg = new DocumentFragment();
    frg.appendChild(StatusComponent.getComponent());
    frg.appendChild(ViewSwitchComponent.getComponent());
    frg.appendChild(DomService.getP('Travel view'));
    document.getElementById('app').appendChild(frg);
  }
}
