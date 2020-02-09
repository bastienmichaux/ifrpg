import { DomService } from "./service.dom";
import { AppService } from "./service.app";
import { ViewSwitchComponent } from "./component.view-switch";
import { StatusComponent } from "./component.status";

export class CharacterView {
  static render() {
    // assembly
    AppService.clear();
    const frg = new DocumentFragment();
    frg.appendChild(StatusComponent.getComponent());
    frg.appendChild(ViewSwitchComponent.getComponent());
    frg.appendChild(DomService.getH1('Your character'));
    document.getElementById('app').appendChild(frg);
  }
}
