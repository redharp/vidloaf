// import { getReddit36, IRedditType } from '../src/utils/encoding';
import { HttpService } from '../src/services/HttpService';
import { IRedditResponse, IRedditPost } from '../src/data/IRedditResponse';
import { RedditRestService } from '../src/services/RedditRestService';
// tslint:disable:no-console

async function getVideos() {
    const reddit: RedditRestService = new RedditRestService();
    const posts = await reddit.getPosts('livestreamfail', 10);
    return posts;
}

getVideos().then().catch(err => `Caught error ${err}`);