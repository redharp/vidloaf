import { IRedditPost } from "../data/IRedditResponse";
import { IPostDetails } from "../services/RedditRestService";
import { decodeHTML5Strict }from 'entities';
import { YT_TYPE, TWITCH_TYPE } from '@backend/data/constants'
import { buildYtEmbed, buildTwitchEmbed } from "./encoding";

export function buildPostDetails(raw: IRedditPost): IPostDetails {
    let embedUrl: string;
    const { id, author, score, title, media, url } = raw.data;
    const details: IPostDetails = {};
    details.id = id;
    details.author = author;
    details.score = score;
    details.title = title;
    details.video = {
        type: media.type,
        embed: {
            html: decodeHTML5Strict(media.oembed.html),
            type: media.oembed.type,
            thumbnail: media.oembed.thumbnail_url
        }
    }
    if (details.video.type === YT_TYPE) embedUrl = buildYtEmbed(url)
    if (details.video.type === TWITCH_TYPE) embedUrl = buildTwitchEmbed(url);
    details.videoUrl = embedUrl;
    return details;
}
