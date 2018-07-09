import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appCollapseOnClick]',
  exportAs: 'collapsible'
})
export class CollapseOnClickDirective {
  isCollapsed = false;

  @HostBinding('class.collapsed')
  get collapsed() {
    return this.isCollapsed;
  }

  @HostListener('click')
  toggle() {
    this.isCollapsed = !this.isCollapsed;
  }
}
