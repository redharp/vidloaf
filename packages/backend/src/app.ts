import * as logger from 'koa-logger';
import * as Koa from 'koa';
import * as errors from 'koa-json-error';
import * as KoaHelmet from 'koa-helmet';
import path from 'path';
import serve from 'koa-static';
import videoRoutes from './routes/videos';

const port: number = Number(process.env.PORT) || 5000;
const app: Koa = new Koa();

app.use(serve('web'))
app.use(KoaHelmet());
app.use(videoRoutes.routes());

app.use(logger());
app.use(errors());

app.listen(port, () => {
    console.log(`Listening on ${port}`)
});
