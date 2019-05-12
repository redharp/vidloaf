
export enum RedditTypes {
  t1 = "Comment",
  t2 = "Account",
  t3 = "Link",
  t4 = "Message",
  t5 = "Subreddit",
  t6 = "Award"
}

export const BASE_URL         = `https://reddit.com/r/`;
// youtube
export const YT_APPEND        = `?feature=oembed&enablejsapi=1`;
export const YT_WATCH         = 'watch?v=';
export const YT_EMBED         = 'embed/';
export const YT_TYPE          = 'youtube.com';
// twitch
export const TWITCH_TYPE      = 'clips.twitch.tv';
export const TWITCH_EMBED     = '/embed?clip=';
export const TWITCH_APPEND    = '&autoplay=false';
// streamable
export const STREAMABLE_TYPE  = 'streamable.com';
export const STREAMABLE_EMBED = '/o/'
export const GFYCAT_TYPE      = 'gfycat.com'

export const SUBREDDITS: string[] = [
    'gadgets',
    'sports',
    'gaming',
    'pics',
    'worldnews',
    'videos',
    'AskReddit',
    'aww',
    'Music',
    'funny',
    'news',
    'movies',
    'blog',
    'books',
    'history',
    'food',
    'philosophy',
    'Jokes',
    'Art',
    'DIY',
    'space',
    'Documentaries',
    'askscience',
    'nottheonion',
    'todayilearned',
    'gifs',
    'listentothis',
    'IAmA',
    'announcements',
    'TwoXChromosomes',
    'creepy',
    'nosleep',
    'GetMotivated',
    'WritingPrompts',
    'LifeProTips',
    'EarthPorn',
    'explainlikeimfive',
    'Showerthoughts',
    'Futurology',
    'photoshopbattles',
    'mildlyinteresting',
    'tifu',
    'OldSchoolCool',
    'UpliftingNews',
    'InternetIsBeautiful',
    'science',
];
