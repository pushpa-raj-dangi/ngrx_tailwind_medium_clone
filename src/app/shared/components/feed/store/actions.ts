import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { GetFeedResponse } from '../interface/getFeedResponse.interface';

export const feedActions = createActionGroup({
  source: 'feed',
  events: {
    'Get Feed': props<{ url: string }>(),
    'Get Feed Success': props<{ feed: GetFeedResponse }>(),
    'Get Feed Failure': emptyProps(),
  },
});
