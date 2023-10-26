import { PopularTagType } from './popular-tag.type';
import { Profile } from './profile.interface';

export interface Article {
  body: string;
  createdAt: string;
  description: string;
  favorited: boolean;
  favoritesCount: number;
  slug: string;
  tagList: PopularTagType[];
  title: string;
  updatedAt: string;
  author: Profile;
}
