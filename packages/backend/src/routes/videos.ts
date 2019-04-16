import * as Router from 'koa-router';
import { RedditRestService } from '../services/RedditRestService';
import { Context } from 'koa';


const router: Router = new Router({ prefix: '/v1'});
let redditService: RedditRestService;

router.get('/clips', async (ctx: Context) => {
    if (!redditService) redditService = new RedditRestService();
    const videos = await redditService.getPosts('videos', 50);
    ctx.body = { videos };
    ctx.status = 200;
});

router.get('/clips/:subreddit', async(ctx : Context) => {
    if (!redditService) redditService = new RedditRestService();
    let subreddit : string = ctx.params.subreddit;
    const videos = await redditService.getPosts(subreddit || 'videos', 50);
    ctx.body = { videos };
});

export default router;
