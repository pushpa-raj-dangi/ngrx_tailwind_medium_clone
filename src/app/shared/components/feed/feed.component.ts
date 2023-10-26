import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ActivatedRoute, Params, Router, RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { combineLatest } from 'rxjs';
import { feedActions } from './store/actions';
import { selectError, selectFeedData, selectIsLoading } from './store/reducers';
import { ErrorMessageComponent } from '../errors/error-message.component';
import { LoadingComponent } from '../loading/loading.component';
import { environment } from 'src/environments/environment';
import { PaginationComponent } from '../pagination/pagination.component';
import queryString from 'query-string';
import { TagsComponent } from '../tags/tags.component';

@Component({
  selector: 'mc-feed',
  templateUrl: './feed.component.html',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    ErrorMessageComponent,
    LoadingComponent,
    PaginationComponent,
    TagsComponent,
  ],
})
export class FeedComponent implements OnInit, OnChanges {
  @Input() apiUrl: string = '';

  data$ = combineLatest({
    isLoading: this.store.select(selectIsLoading),
    feed: this.store.select(selectFeedData),
    error: this.store.select(selectError),
  });

  limit = environment.limit;
  baseUrl = this.router.url.split('?')[0];
  currentPage = 0;

  constructor(
    private store: Store,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnChanges(changes: SimpleChanges): void {
    const isApiUrl =
      !changes['apiUrl'].firstChange &&
      changes['apiUrl'].currentValue !== changes['apiUrl'].previousValue;
    if (isApiUrl) {
      this.fetchFeed();
    }
  }

  ngOnInit() {
    this.route.queryParams.subscribe((params: Params) => {
      this.currentPage = +params['page'] || 1;
      this.fetchFeed();
    });
  }

  private fetchFeed() {
    const offset = this.currentPage * this.limit - this.limit;
    const parasedUrl = queryString.parseUrl(this.apiUrl);
    const strignfy = queryString.stringify({
      limit: this.limit,
      offset,
      ...parasedUrl.query,
    });
    const apiUrlWithParams = `${parasedUrl.url}?${strignfy}`;
    this.store.dispatch(feedActions.getFeed({ url: apiUrlWithParams }));
  }
}
