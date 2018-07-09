import {Directive, Input} from '@angular/core';

@Directive({
  selector: '[appNavLvlTwo]'
})
export class NavLvlTwoDirective {
  @Input('appNavLvlTwo')
  name: string;

  @Input()
  active = false;

  constructor() { }

}
