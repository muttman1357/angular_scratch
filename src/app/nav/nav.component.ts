import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {Router} from '@angular/router';
import {NavService} from './services/nav.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  private sub: Subscription;
  isClosed = false;
  expandMenu = false;
  courses = [];
  nav = {
    rbOpen: false,
    diOpen: false,
    cpOpen: false
  };

  constructor(private router: Router, private navService: NavService) {}


  ngOnInit() {
    this.courses = this.navService.courses;
  }

  openCourse(course, e) {
    this.router.navigate(['nav', course.id], {
      queryParams: {
        description: course.description
      }
    });
  }

  showCoursePlaylist(course) {
    this.router.navigateByUrl(`/nav(playlist:playlist;description=${course.description})`);
  }

  /**
   * Toggles the nav menu open and closed
   */
  toggleNav() {
    this.isClosed = !this.isClosed;
  }

  /**
   * Toggles li elems open in the nav menu
   * @param navItem
   */
  toggleNavItems(navItem) {
    this.nav[navItem] = !this.nav[navItem];
  }

  /**
   * Closes all nav items in the menu
   */
  closeNavItems() {
    // this.rulesBuilderService.setAllNavItemsFalse();
    this.setMenuItemsFalse(this.nav);
  }

  /**
   * Sets all navItems in the nav to false
   * @param nav
   */
  setMenuItemsFalse(nav) {
    for(const i of Object.keys(nav)) {
      nav[i] = false;
    }
  }

  // ngOnDestroy() {
  //   this.sub.unsubscribe();
  // }

}
