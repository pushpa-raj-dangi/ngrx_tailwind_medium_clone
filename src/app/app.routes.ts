import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: 'register',
    loadChildren: () =>
      import('src/app/auth/auth.routes').then((m) => m.registerRoute),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('src/app/auth/auth.routes').then((m) => m.loginRoute),
  },
  {
    path: '',
    loadChildren: () =>
      import('src/app/global-feed/global-feed.routing').then(
        (m) => m.globalFeedRouting
      ),
  },
  {
    path: 'feed',
    loadChildren: () =>
      import('src/app/your-feed/your-feed.routing').then(
        (m) => m.yourFeedRouting
      ),
  },
  {
    path: 'tags/:slug',
    loadChildren: () =>
      import('src/app/tag-feed/tag-feed.routing').then((m) => m.tagFeedRouting),
  },
  {
    path: 'articles/:slug',
    loadChildren: () =>
      import('src/app/article/article.routing').then((m) => m.articleRouting),
  },
];
