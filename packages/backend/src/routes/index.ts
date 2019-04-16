
import * as Router from 'koa-router';
import * as compose from 'koa-compose';
import videos from './videos';
const router: Router = new Router({ prefix: '/v1' });

export default compose([
    router.routes(),
    router.allowedMethods(),
    videos.routes(),
    videos.allowedMethods(),
]);
