import { IRedditPost, IMedia } from "../data/IRedditResponse";
import { YT_TYPE, TWITCH_TYPE, STREAMABLE_TYPE } from '@backend/data/constants'
import { buildYtEmbed, buildTwitchEmbed, buildStreamableEmbed } from "./encoding";
import { IVideo, IVideoResponse } from '../data/interfaces';



export function videoResponseBuilder(posts: IRedditPost[]): IVideoResponse[] { 
    // console.log(JSON.stringify(posts, null, 2))
    return posts
        .map((post: IRedditPost) => buildVideo(post))
        .filter((v: IVideoResponse) => v.video);
}

function buildVideo(post: IRedditPost): IVideoResponse {

    if (!post.data.id) return;
    const { id, author, score, title, media, url, permalink, created_utc } = post.data;
    const video: IVideo = media ? mediaHandler(media, url) : undefined;
    const submitted: Date = new Date(Number(`${created_utc}000`));
    return {
        id,
        title,
        originalPoster: author,
        score,
        video,
        comments: permalink,
        submitted,
    };
}
function mediaHandler(media: IMedia, url: string): IVideo {
    let video: IVideo = {};
    const { type, reddit_video } = media;
    if (type) {
        switch (type) {
            case YT_TYPE: {
                video.origin = 'youtube';
                video.url = buildYtEmbed(url);
                video.thumbnailUrl = media.oembed.thumbnail_url;
                break;
            }
            case TWITCH_TYPE: {
                video.origin = 'twitch';
                video.url = buildTwitchEmbed(url);
                video.thumbnailUrl = media.oembed.thumbnail_url;
                break;
            }
            case STREAMABLE_TYPE: {
                video.origin = 'streamable';
                video.url = buildStreamableEmbed(url);
                video.thumbnailUrl = media.oembed.thumbnail_url;
                break;
            }
            default:
                break;
        };
    } else if (reddit_video) {
        video.origin = 'reddit';
        video.url = media.reddit_video.fallback_url;
        video.thumbnailUrl = '';
    }
    return video;
}
