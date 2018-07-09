import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-practice',
  templateUrl: './pipe-practice.component.html',
  styleUrls: ['./pipe-practice.component.scss']
})
export class PipePracticeComponent implements OnInit {
  message = 'Hello World!';
  date = new Date();
  pi = Math.PI;
  percentage = 0.0234;
  amount = 12.1234;
  data = ['A', 'B', 'H', 'C'];

  ngOnInit() {

  }




}
