import {ContentChildren, Directive, QueryList} from '@angular/core';
import {ShowOneTriggerDirective} from './show-one-trigger';
import {ShowOneDirective} from './showOne';

@Directive({
  selector: '[appShowOneContainer]'
})
export class ShowOneContainerDirective {
  triggers: ShowOneTriggerDirective[] = [];

  @ContentChildren(ShowOneDirective)
  items: QueryList<ShowOneDirective>;

  add(trigger: ShowOneTriggerDirective) {
    this.triggers.push(trigger);
  }

  show(id: string) {
    this.items.forEach(item => {
      debugger;
      item.active = item.id === id;
    });
    this.triggers.forEach(
      (trigger: ShowOneTriggerDirective) => {
        debugger;
        trigger.active = trigger.id === id;
      }
    );
  }
}
