import { DomService } from "./service.dom";
import { AppService } from "./service.app";
import { ViewSwitchComponent } from "./component.view-switch";
import { StatusComponent } from "./component.status";

export class ExplorationView {
  static render() {
    // TODO: list of visible interactibles
    const interactibles = DomService.getP('Interactible elements');

    const list = DomService.ArrayToUl([
      { text: `Red Fang Inn` },
      { text: `Farmer's house` },
    ]);

    // TODO: description based on visible interactibles
    const desc = DomService.getP('Current place description');

    // assembly
    AppService.clear();
    const frg = new DocumentFragment();
    frg.appendChild(StatusComponent.getComponent());
    frg.appendChild(ViewSwitchComponent.getComponent());
    frg.appendChild(interactibles);
    frg.appendChild(list);
    frg.appendChild(desc);
    document.getElementById('app').appendChild(frg);
  }
}
