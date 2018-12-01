import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'video-section',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
  public current: any;
  constructor() {}

  ngOnInit() {
  }

}
