import {NgModule} from '@angular/core';
import {Route, RouterModule, Routes} from '@angular/router';
import {MainComponent} from './main/main.component';
import {ContentChildrenComponent} from './content-children/content-children.component';
import {NgContentComponent} from './ng-content/ng-content.component';
import {PipePracticeComponent} from './pipe-practice/pipe-practice.component';
import {CoursesRouterConfig} from './routes/coursesRouterConfig';
import {PlaylistComponent} from './playlist/playlist.component';
import {LegacyComponent} from './legacy.component';
import {FormsComponent} from './forms/forms.component';
import {DragndropComponent} from './dragndrop/dragndrop.component';

const indexRoute: Route = {
  path: '',
  component: MainComponent
};

const fallbackRoute: Route = {
  path: '**',
  component: MainComponent
};

const routes: Routes = [
  {path: 'main', component: MainComponent},
  {path: 'contentChildren', component: ContentChildrenComponent},
  {path: 'ngContent', component: NgContentComponent},
  ...CoursesRouterConfig,
  {path: 'pipes', component: PipePracticeComponent},
  {
    path: 'playlist',
    component: PlaylistComponent,
    outlet: 'playlist'
  },
  {
    path: 'legacy',
    component: LegacyComponent
  },
  {
    path: 'forms',
    component: FormsComponent
  },
  {
    path: 'drag',
    component: DragndropComponent
  },
  indexRoute,
  fallbackRoute
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
