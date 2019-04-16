import { RedditTypes, TWITCH_TYPE, TWITCH_EMBED, TWITCH_APPEND, YT_APPEND, YT_WATCH, YT_EMBED, STREAMABLE_TYPE, STREAMABLE_EMBED, YT_TYPE } from '../data/constants';

export interface IRedditType {
  type: RedditTypes;
  value: string;
}

export function buildTwitchEmbed(url: string): string {
  const slug: string[] = url.split('/');
  return `https://${TWITCH_TYPE}${TWITCH_EMBED}${slug[slug.length -1]}${TWITCH_APPEND}`
}

export function buildYtEmbed(url: string): string {
  let embedUrl: string;
  if (url.includes('youtu.be')) {
    const parts: string[] = url.split('/');
    const id: string = parts[parts.length - 1];
    embedUrl =`https://${YT_TYPE}/${YT_EMBED}${id}${YT_APPEND}`;
  } else {
    embedUrl = (url.split('&amp')[0] + YT_APPEND).replace(YT_WATCH, YT_EMBED);
  }
  return embedUrl;
}

export function buildStreamableEmbed(url: string): string {
  const slug: string[] = url.split('/');
  return `https://${STREAMABLE_TYPE}${STREAMABLE_EMBED}${slug[slug.length - 1]}?autoplay=false&loop=false`
}
