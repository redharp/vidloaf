import * as logger from 'koa-logger';
import * as Koa from 'koa';
import * as errors from 'koa-json-error';
import * as KoaHelmet from 'koa-helmet';
import path from 'path';
import serve from 'koa-static';
import videoRoutes from './routes/videos';

const port: number = Number(process.env.PORT) || 5000;
const staticPath: string = path.resolve('../', 'dist/web/.');

const app: Koa = new Koa();

app.use(serve(staticPath));
app.use(KoaHelmet());
app.use(videoRoutes.routes());

app.use(logger());
app.use(errors());

app.listen(port, '0.0.0.0', 0,  () => {
    console.log(`Listening on ${port}`)
});
