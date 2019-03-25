import { RedditRestService } from '@backend/services/RedditRestService';
// tslint:disable:no-console
import { APIGatewayProxyHandler, APIGatewayProxyEvent, Context } from 'aws-lambda';
import 'source-map-support/register';


async function getVideos(subreddit?: string, count = 10) {
  subreddit = subreddit || 'videos';
    const reddit: RedditRestService = new RedditRestService();
    const posts = await reddit.getPosts(subreddit, count);
    return posts;
}

export const videos: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent, _context: Context) => {
  const { subreddit, count} = event.queryStringParameters;
  const videos = await getVideos(subreddit, Number(count));
  return {
    statusCode: 200,
    body: JSON.stringify({
      videos,
    }),
  };
};
