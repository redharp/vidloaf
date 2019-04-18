import { IRedditPost, IMedia } from "../data/IRedditResponse";
import { YT_TYPE, TWITCH_TYPE, STREAMABLE_TYPE, GFYCAT_TYPE } from '@backend/data/constants'
import { buildYtEmbed, buildTwitchEmbed, buildStreamableEmbed } from "./encoding";
import { IVideo, IVideoResponse, VideoSource } from '../data/interfaces';



export function videoResponseBuilder(posts: IRedditPost[]): IVideoResponse[] {
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
    const { type, reddit_video, oembed: { thumbnail_url } } = media;
    if (type) {
        switch (type) {
            case YT_TYPE: {
                video.origin = VideoSource.YOUTUBE;
                video.url = buildYtEmbed(url);
                video.thumbnailUrl = media.oembed.thumbnail_url;
                break;
            }
            case TWITCH_TYPE: {
                video.origin = VideoSource.TWITCH;
                video.url = buildTwitchEmbed(url);
                video.thumbnailUrl = media.oembed.thumbnail_url;
                break;
            }
            case STREAMABLE_TYPE: {
                video.origin = VideoSource.STREAMABLE;
                video.url = buildStreamableEmbed(url);
                video.thumbnailUrl = media.oembed.thumbnail_url;
                break;
            }
            case GFYCAT_TYPE: {
                //https://gfycat.com/celebratedpositivecomet",
                const parsedUrl = () => {
                    let slugs: string[] = thumbnail_url.split('-');
                    return slugs[0].replace('thumbs', 'giant') + '.mp4';
                }
                video.origin = VideoSource.GFYCAT;
                video.url = parsedUrl();
                break;
            }
            default:
                break;
        };
    } else if (reddit_video) {
        video.origin = VideoSource.REDDIT;
        video.url = media.reddit_video.fallback_url;
        video.thumbnailUrl = '';
    }
    return video;
}
