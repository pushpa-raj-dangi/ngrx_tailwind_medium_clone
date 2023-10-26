import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { BannerComponent } from '../shared/components/banner/banner.component';
import { FeedComponent } from '../shared/components/feed/feed.component';
import { FeedTogglerComponent } from '../shared/components/feed-toggler/feed-toggler.component';
import { PopularTagsComponent } from '../shared/components/popular-tags/popular-tags.component';

@Component({
  selector: 'mc-your-feed',
  templateUrl: './your-feed.component.html',
  standalone: true,
  imports: [
    CommonModule,
    FeedComponent,
    BannerComponent,
    PopularTagsComponent,
    FeedTogglerComponent,
  ],
})
export class YourFeedComponent implements OnInit {
  apiUrl = '/articles/feed';
  constructor() {}

  ngOnInit() {}
}
