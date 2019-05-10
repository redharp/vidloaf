import * as logger from 'koa-logger';
import * as Koa from 'koa';
import * as errors from 'koa-json-error';
import * as KoaHelmet from 'koa-helmet';
import http from 'http';
import https from 'https';

import serve from 'koa-static';
import videoRoutes from './routes/videos';

const port: number = Number(process.env.PORT) || 80;
const app: Koa = new Koa();

app.use(serve('dist'))
app.use(KoaHelmet());
app.use(videoRoutes.routes());

app.use(logger());
app.use(errors());

http.createServer(app.callback()).listen(port, () => `Listening for HTTP requests...`);
https.createServer({}, app.callback()).listen(443, () => console.log(`Listening for HTTPS requests...`));
