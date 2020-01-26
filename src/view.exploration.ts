import { DomService } from "./service.dom";
import { AppService } from "./service.app";
import { SwitchViewComponent } from "./component.switch-view";

export class ExplorationView {
  static render() {
    // stored data
    const location = 'No location'; // #%
    const time = 'Day 1 - noon'; // #%

    // time - day
    // TODO: left align location, right align time
    const statusP = DomService.getP(`${location} - ${time}`);

    // assembly
    AppService.clear();
    const frg = new DocumentFragment();
    frg.appendChild(statusP);
    frg.appendChild(SwitchViewComponent.render());
    document.getElementById('app').appendChild(frg);
  }
}
