import {Directive, Input} from '@angular/core';

@Directive({
  selector: '[appNavLvlOne]'
})
export class NavLvlOneDirective {
  @Input('appNavLvlOne')
  name: string;

  constructor() { }

}
