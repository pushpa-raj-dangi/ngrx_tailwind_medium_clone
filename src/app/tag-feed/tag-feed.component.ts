import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { BannerComponent } from '../shared/components/banner/banner.component';
import { FeedComponent } from '../shared/components/feed/feed.component';
import { FeedTogglerComponent } from '../shared/components/feed-toggler/feed-toggler.component';
import { ActivatedRoute, Params } from '@angular/router';
import { PopularTagsComponent } from '../shared/components/popular-tags/popular-tags.component';

@Component({
  selector: 'mc-tag-feed',
  templateUrl: './tag-feed.component.html',
  standalone: true,
  imports: [
    CommonModule,
    FeedComponent,
    BannerComponent,
    PopularTagsComponent,
    FeedTogglerComponent,
  ],
})
export class TagFeedComponent implements OnInit {
  apiUrl: string = '';
  tagName: string = '';
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.tagName = params['slug'];
      this.apiUrl = `/articles?tag=${this.tagName}`;
    });
  }
}
