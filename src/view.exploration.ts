import { DomService } from "./service.dom";
import { AppService } from "./service.app";

export class ExplorationView {
  static render() {
    // assembly
    AppService.clear();
    const frg = new DocumentFragment();
    frg.appendChild(DomService.getP('Exploration view'));
    document.getElementById('app').appendChild(frg);
  }
}
