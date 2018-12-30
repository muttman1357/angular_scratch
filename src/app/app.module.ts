import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CollapseOnClickDirective } from './directives/collapse-on-click.directive';
import {FormsModule} from '@angular/forms';
import {ShowOneTriggerDirective} from './directives/show-one-trigger';
import {ShowOneDirective} from './directives/showOne';
import {ShowOneContainerDirective} from './directives/showOneContainer';
import { MainComponent } from './main/main.component';
import { ContentChildrenComponent } from './content-children/content-children.component';
import { NgContentComponent } from './ng-content/ng-content.component';
import { NavComponent } from './nav/nav.component';
import { NavLvlOneDirective } from './nav/directives/nav-lvl-one.directive';
import { NavLvlTwoDirective } from './nav/directives/nav-lvl-two.directive';
import { NavLvlThreeDirective } from './nav/directives/nav-lvl-three.directive';
import { PipePracticeComponent } from './pipe-practice/pipe-practice.component';
import {SortPipe} from './pipe-practice/sort/sort.pipe';
import { ChildRouteComponent } from './child-route/child-route.component';
import {CanCourseDetailDeactivate} from './child-route/canCourseDetailDeactivate';
import {CourseDetailActivateGuard} from './child-route/courseDetailActivate.guard';
import {NavService} from './nav/services/nav.service';
import { PlaylistComponent } from './playlist/playlist.component';
import { LegacyComponent } from './legacy.component';
import { FormsComponent } from './forms/forms.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DragndropComponent } from './dragndrop/dragndrop.component';
import {Route, RouterModule, Routes} from '@angular/router';
import {CoursesRouterConfig} from './routes/coursesRouterConfig';
import { RatingInputComponent } from './rating-input/rating-input.component';

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
  {
    path: 'rating',
    component: RatingInputComponent
  },
  indexRoute,
  fallbackRoute
];

@NgModule({
  declarations: [
    AppComponent,
    CollapseOnClickDirective,
    ShowOneTriggerDirective,
    ShowOneDirective,
    ShowOneContainerDirective,
    MainComponent,
    ContentChildrenComponent,
    NgContentComponent,
    NavComponent,
    NavLvlOneDirective,
    NavLvlTwoDirective,
    NavLvlThreeDirective,
    PipePracticeComponent,
    SortPipe,
    ChildRouteComponent,
    PlaylistComponent,
    LegacyComponent,
    FormsComponent,
    DragndropComponent,
    RatingInputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes, {useHash: true})
  ],
  exports: [RouterModule],
  providers: [CanCourseDetailDeactivate, CourseDetailActivateGuard, NavService],
  bootstrap: [AppComponent]
})
export class AppModule { }
