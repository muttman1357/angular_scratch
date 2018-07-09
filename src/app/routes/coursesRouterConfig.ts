import {NavComponent} from '../nav/nav.component';
import {ChildRouteComponent} from '../child-route/child-route.component';
import {CanCourseDetailDeactivate} from '../child-route/canCourseDetailDeactivate';
import {CourseDetailActivateGuard} from '../child-route/courseDetailActivate.guard';
import {PlaylistComponent} from '../playlist/playlist.component';
import {MainComponent} from '../main/main.component';

export const CoursesRouterConfig = [
  {
    path: 'nav',
    children: [
      {
        path: '',
        component: NavComponent,
      },
      {
        path: 'legacy-list',
        redirectTo: '/legacy',
        pathMatch: 'full'
      },
      {
        path:':id',
        component: ChildRouteComponent,
        canActivate: [CourseDetailActivateGuard],
        canDeactivate: [CanCourseDetailDeactivate]
      }
    ]
  }
];
