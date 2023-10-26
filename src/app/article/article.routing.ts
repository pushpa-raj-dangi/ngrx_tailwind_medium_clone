import { Routes } from '@angular/router';
import { ArticleComponent } from './article.component';
import { provideEffects } from '@ngrx/effects';
import * as articleEffects from 'src/app/article/store/effects';
import { provideState } from '@ngrx/store';
import { articleFeatureKey, articleReducer } from './store/reducers';

export const articleRouting: Routes = [
  {
    path: '',
    component: ArticleComponent,
    providers: [
      provideEffects(articleEffects),
      provideState(articleFeatureKey, articleReducer),
    ],
  },
];
