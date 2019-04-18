
export enum RedditTypes {
  t1 = "Comment",
  t2 = "Account",
  t3 = "Link",
  t4 = "Message",
  t5 = "Subreddit",
  t6 = "Award"
}

export const BASE_URL: string = `https://reddit.com/r/`;

// youtube
export const YT_APPEND: string = `?feature=oembed&enablejsapi=1`;
export const YT_WATCH: string = 'watch?v=';
export const YT_EMBED: string = 'embed/';
export const YT_TYPE: string = 'youtube.com';

// twitch
export const TWITCH_TYPE: string = 'clips.twitch.tv';
export const TWITCH_EMBED: string = '/embed?clip=';
export const TWITCH_APPEND: string = '&autoplay=false';

// reddit


// streamable
export const STREAMABLE_TYPE: string = 'streamable.com';
export const STREAMABLE_EMBED: string = '/o/'

export const GFYCAT_TYPE: string = 'gfycat.com'
