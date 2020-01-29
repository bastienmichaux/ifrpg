import { DomService } from "./service.dom";
import { AppService } from "./service.app";
import { ViewSwitchComponent } from "./component.view-switch";

export class DiaryView {
  static render() {
    // assembly
    AppService.clear();
    const frg = new DocumentFragment();
    frg.appendChild(DomService.getP('Diary view'));
    frg.appendChild(ViewSwitchComponent.render());
    document.getElementById('app').appendChild(frg);
  }
}
