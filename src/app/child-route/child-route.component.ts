import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-child-route',
  templateUrl: './child-route.component.html',
  styleUrls: ['./child-route.component.scss']
})
export class ChildRouteComponent implements OnInit, OnDestroy {
  dirty = false;
  courseId: number;
  courseDesc: string;
  sub1: Subscription;
  sub2: Subscription;

  constructor(private router: Router, private route: ActivatedRoute ) {
    console.log('Construct new view');
    this.sub1 = route.params.subscribe(
      data => {
        this.courseId = parseInt(data['id'], 10);
        this.courseDesc = data.description;
      }
    );
    this.sub2 = route.queryParams.subscribe(
      params => this.courseDesc = params.description
    );
  }

  ngOnInit() {
  }

  previous() { return this.courseId - 1; }
  next() { return this.courseId + 1; }

  ngOnDestroy() {
    this.sub1.unsubscribe();
    this.sub2.unsubscribe();
  }

}
