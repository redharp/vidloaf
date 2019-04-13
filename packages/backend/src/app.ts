import path from 'path';
import * as logger from 'koa-logger';
import * as Koa from 'koa';
import * as errors from 'koa-json-error';
import videoRoutes from './routes/videos';
import serve from 'koa-static';

const staticPath: string = path.resolve('../', 'dist/web/.');
console.log(staticPath);

const port: Number = Number(process.env.PORT) || 5000;
const app: Koa = new Koa();
app.use(serve(staticPath));
// app.use(KoaHelmet());
app.use(videoRoutes.routes());



app.use(logger());
app.use(errors());

app.listen(port, () => {
    console.log(`Listening on ${port}`)
});