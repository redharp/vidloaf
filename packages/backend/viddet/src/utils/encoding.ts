import * as SimpleBase from 'simple-base';
import { RedditTypes } from '../data/constants';

export interface IRedditType {
  type: RedditTypes;
  value: string;
}
export function getReddit36(value: string): IRedditType {
  const [type, encoded] = value.split('_');
  return {
    type: RedditTypes[type],
    value: SimpleBase.decode(encoded, 36),
  };
}
