import { DomService } from "./service.dom";
import { AppService } from "./service.app";
import { ViewSwitchComponent } from "./component.view-switch";

export class ExplorationView {
  static render() {
    // stored data
    // TODO: game start ? random gen : get it from storage
    const location = 'No location';
    const time = 'Day 1 - noon';

    // time - day
    // TODO: left align location, right align time
    const statusP = DomService.getP(`${location} - ${time}`);

    // assembly
    AppService.clear();
    const frg = new DocumentFragment();
    frg.appendChild(statusP);
    frg.appendChild(ViewSwitchComponent.render());
    document.getElementById('app').appendChild(frg);
  }
}
