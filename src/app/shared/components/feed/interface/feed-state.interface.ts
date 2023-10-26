import { GetFeedResponse } from './getFeedResponse.interface';

export interface FeedState {
  isLoading: boolean;
  error: string | null;
  data: GetFeedResponse | null;
}
