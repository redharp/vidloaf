import * as SimpleBase from 'simple-base';
import { RedditTypes, TWITCH_TYPE, TWITCH_EMBED, TWITCH_APPEND, YT_APPEND, YT_WATCH, YT_EMBED } from '../data/constants';

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

export function buildTwitchEmbed(url: string): string {
  const slug: string[] = url.split('/');
  return `${TWITCH_TYPE}${TWITCH_EMBED}${slug[slug.length -1]}${TWITCH_APPEND}`
}

export function buildYtEmbed(url: string): string {
  return (url.split('&amp')[0] + YT_APPEND).replace(YT_WATCH, YT_EMBED);
}