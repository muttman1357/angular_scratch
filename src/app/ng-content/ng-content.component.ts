import {AfterContentInit, AfterViewInit, Component, ContentChild, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-ng-content',
  templateUrl: './ng-content.component.html',
  styleUrls: ['./ng-content.component.scss']
})
export class NgContentComponent implements AfterContentInit, AfterViewInit {
  type = 'Click Me'
  @ViewChild('h1') h1;
  @ContentChild('insideNgContent') insideNgContent;

  ngAfterViewInit() {
    console.log(this.insideNgContent);
  }

  ngAfterContentInit() {
    console.log(this.insideNgContent);
  }

  alert() {
    console.log(this.insideNgContent);
  }

}
