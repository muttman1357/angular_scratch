import {ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot} from '@angular/router';
import {ChildRouteComponent} from './child-route.component';
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';

@Injectable()
export class CanCourseDetailDeactivate implements CanDeactivate<ChildRouteComponent> {

  canDeactivate(component: ChildRouteComponent,
                currentRoute: ActivatedRouteSnapshot,
                currentState: RouterStateSnapshot,
                nextState: RouterStateSnapshot
  ): Observable<boolean>|Promise<boolean>|boolean {

    if(!component.dirty) {
      return true;
    }
    return confirm("Unsaved changes exist, do you want to exit?");
  }
}
