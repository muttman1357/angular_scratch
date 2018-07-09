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
import {AppRoutingModule} from './app.routing.module';
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
    DragndropComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [CanCourseDetailDeactivate, CourseDetailActivateGuard, NavService],
  bootstrap: [AppComponent]
})
export class AppModule { }
