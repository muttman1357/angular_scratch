import {Directive, HostBinding, HostListener, Input} from '@angular/core';
import {ShowOneContainerDirective} from './showOneContainer';

@Directive({
  selector: '[appShowOneTrigger]'
})
export class ShowOneTriggerDirective {
  @Input('appShowOneTrigger')
  id: string;

  @Input()
  active = false;

  constructor(private showOneContainer: ShowOneContainerDirective) {
    this.showOneContainer.add(this);
  }

  @HostListener('click')
  click() {
    this.showOneContainer.show(this.id);
  }

  @HostBinding('class.selected')
  get selected() {
    return this.active;
  }
}
