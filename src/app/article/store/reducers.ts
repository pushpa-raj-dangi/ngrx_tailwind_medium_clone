import { createFeature, createReducer, on } from '@ngrx/store';
import { routerNavigationAction } from '@ngrx/router-store';
import { articleActions } from './actions';
import { ArticleState } from '../types/ArticleState';
const initialState: ArticleState = {
  isLoading: false,
  data: null,
  error: null,
};
const articleFeature = createFeature({
  name: 'article',
  reducer: createReducer(
    initialState,
    on(articleActions.getArticle, (state) => ({
      ...state,
      isLoading: true,
      validationErrors: null,
    })),
    on(articleActions.getArticleSuccess, (state, actions) => ({
      ...state,
      isLoading: false,
      data: actions.article,
    })),
    on(articleActions.getArticleFailure, (state) => ({
      ...state,
      isLoading: false,
    })),
    on(routerNavigationAction, () => initialState)
  ),
});

export const {
  name: articleFeatureKey,
  reducer: articleReducer,
  selectIsLoading,
  selectData: selectArticleData,
  selectError,
} = articleFeature;
