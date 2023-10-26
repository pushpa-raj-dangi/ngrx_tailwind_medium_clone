import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { BannerComponent } from '../shared/components/banner/banner.component';
import { FeedComponent } from '../shared/components/feed/feed.component';
import { FeedTogglerComponent } from '../shared/components/feed-toggler/feed-toggler.component';
import { PopularTagsComponent } from '../shared/components/popular-tags/popular-tags.component';

@Component({
  selector: 'mc-global-feed',
  templateUrl: './global-feed.component.html',
  standalone: true,
  imports: [
    CommonModule,
    FeedComponent,
    BannerComponent,
    PopularTagsComponent,
    FeedTogglerComponent,
  ],
})
export class GlobalFeedComponent implements OnInit {
  apiUrl = '/articles';
  constructor() {}

  ngOnInit() {}
}
