import Axios, { AxiosResponse } from "axios";
import { IVideoResponse } from '@backend/data/interfaces';


export async function getRedditVideos(subreddit?: string): Promise<IVideoResponse[]> {
    const sub: string = subreddit ? subreddit : 'videos';
    const params = { limit: 100 };
    const resp: AxiosResponse<{ videos: IVideoResponse[] }> = await Axios.get(`/v1/clips/${sub}`, { params });
    const { videos } = resp.data;
    return videos;
}
