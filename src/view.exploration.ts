import { DomService } from "./service.dom";
import { AppService } from "./service.app";
import { SwitchViewComponent } from "./component.switch-view";

export class ExplorationView {
  static render() {
    // time - day
    const dayP = DomService.getP('NoName character - Day 1 - noon');

    // assembly
    AppService.clear();
    const frg = new DocumentFragment();
    frg.appendChild(dayP);
    frg.appendChild(SwitchViewComponent.render());
    document.getElementById('app').appendChild(frg);
  }
}
