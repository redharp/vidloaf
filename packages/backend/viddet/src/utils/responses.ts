import { IRedditPost } from "../data/IRedditResponse";
import { IPostDetails } from "../services/RedditRestService";

export function extractPostDetails(raw: IRedditPost): IPostDetails {

    const { id, author, score, title, media } = raw.data;
    const details: IPostDetails = {};
    details.id = id;
    details.author = author;
    details.score = score;
    details.title = title;
    details.video = {
        type: media.type,
        embed: {
            html: media.oembed.html,
            type: media.oembed.type,
            thumbnail: media.oembed.thumbnail_url
        }
    };
    return details;
}
