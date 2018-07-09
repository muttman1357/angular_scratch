import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {NavService} from '../nav/services/nav.service';
import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class CourseDetailActivateGuard implements CanActivate {

  constructor(private navService: NavService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {

    const courseData = this.navService.courses;
    const index = route.params['id'] - 1;
    const course = courseData[index];

    const subject = new Subject<boolean>();

    setTimeout(() => {
      subject.next(!course.pro);
      subject.complete();
    }, 3000);

    return subject;
  }
}
