import { HttpService } from './HttpService';
import { BASE_URL, RedditTypes } from '../data/constants';
import { IRedditResponse, IRedditPost } from '../data/IRedditResponse';
import { extractPostDetails } from '../utils/responses';

// tslint:disable:no-console

export class RedditRestService {
    private _client: HttpService = new HttpService(BASE_URL);

    private prepUrl(url: string): string {
         return url + `/.json?limit=10`;
    }

    async getPosts(subreddit: string): Promise<IPostDetails[]> {
        const url = this.prepUrl(subreddit);
        console.log(`url to getPosts ${BASE_URL + url}`);
        const resp: IRedditResponse = await this._client.get<IRedditResponse>(url);
        const result: IPostDetails[] = resp.data.children.map((post: IRedditPost) =>  extractPostDetails(post));
        return result;
    }

}

export interface IOembed {
    type?: string;
    html?: string;
    thumbnail?: string;
}
export interface IVideoDetails {
    type?: string;
    embed?: IOembed;

}
export interface IPostDetails {
    id?: string;
    score?: number;
    video?: IVideoDetails;
    title?: string;
    author?: string;
    thumbnail?: string;
}
