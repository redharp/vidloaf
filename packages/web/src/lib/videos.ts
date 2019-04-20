import Axios, { AxiosResponse } from "axios";
import { IVideoResponse } from '@backend/data/interfaces';


export async function getRedditVideos(subreddit?: string): Promise<IVideoResponse[]> {
    const sub: string = subreddit ? subreddit : 'videos';
         const resp: AxiosResponse<{videos: IVideoResponse[]}> =  await Axios.get(`/v1/clips/${sub}`, {
             params: {
                 limit: 100
             }
         });
         const { videos } = resp.data;
         return videos;
}
