import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ArticleResponse } from 'src/app/shared/types/article-response';
import { Article } from 'src/app/shared/types/article.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}

  getArticle(slug: string): Observable<Article> {
    return this.http
      .get<ArticleResponse>(`${this.apiUrl}articles/${slug}`)
      .pipe(map((response) => response.article));
  }
}
