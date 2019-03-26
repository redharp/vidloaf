import { HttpService } from './HttpService';
import { BASE_URL } from '@backend/data/constants';
import { IRedditResponse } from '@backend/data/IRedditResponse';
import { videoResponseBuilder } from '@backend/utils/responses';
import { IVideoResponse } from '@backend/data/interfaces';


// tslint:disable:no-console

export class RedditRestService {
    private _client: HttpService = new HttpService(BASE_URL);

    private prepUrl(url: string, limit: number): string {
         return url + `/.json?limit=${limit}`;
    }

    async getPosts(subreddit: string, limit = 10): Promise<IVideoResponse[]> {
        const url: string = this.prepUrl(subreddit, limit);
        console.log(`getPosts called with ${BASE_URL + url}`);
        const resp: IRedditResponse = await this._client.get<IRedditResponse>(url);
        const result: IVideoResponse[] = videoResponseBuilder(resp.data.children);
        return result;
    }

}
