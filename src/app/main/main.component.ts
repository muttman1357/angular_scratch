import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const obj = {
      log: ['a', 'b', 'c'],
      get latest() {
        return this.log[this.log.length - 1];
      }
    };

    console.log(obj.latest);
  }

}
