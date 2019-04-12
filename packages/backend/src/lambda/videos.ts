import { RedditRestService } from '@backend/services/RedditRestService';
// tslint:disable:no-console
import { APIGatewayProxyHandler, APIGatewayProxyEvent, Context } from 'aws-lambda';
import 'source-map-support/register';
import { IVideoResponse } from '@backend/data/interfaces';



let cache: { videos: IVideoResponse[], time?: Date } = { videos: [] };

async function getVideos(subreddit?: string, count = 10) {
  subreddit = subreddit || 'videos';
    const reddit: RedditRestService = new RedditRestService();
    const posts = await reddit.getPosts(subreddit, count);
    return posts;
}

export const videos: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent, _context: Context) => {
  const { subreddit, count} = event.queryStringParameters;
  if (cache.videos.length) {
    const timeCached: number = cache.time.getSeconds();
    if (timeCached >= 120) cache.videos = await getVideos(subreddit, Number(count));
    else console.log(`Have cached videos`);
  } else {
    console.log(`in else cache time: ${cache.time} ${cache.videos.length}`);
    cache.videos = await getVideos(subreddit, Number(count));
    cache.time = new Date();
    console.log(`in else cache time: ${cache.time}`);
  }
  return {
    statusCode: 200,
    body: JSON.stringify({
      videos: cache.videos,
    }),
  };
};
