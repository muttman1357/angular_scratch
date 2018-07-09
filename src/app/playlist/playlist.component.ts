import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent implements OnInit {
  description: string;

  constructor(route: ActivatedRoute) {
    route.params.subscribe(
      params => this.description = params['description']
    );
  }

  ngOnInit() {
  }



}
