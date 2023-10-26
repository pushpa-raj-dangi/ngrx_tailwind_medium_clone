import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetFeedResponse } from '../interface/getFeedResponse.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FeedService {
  apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}

  getFeed(url: string): Observable<GetFeedResponse> {
    return this.http.get<GetFeedResponse>(this.apiUrl + url);
  }
}
