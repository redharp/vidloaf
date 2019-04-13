import Axios, { AxiosResponse } from "axios";
import { IVideoResponse } from '@backend/data/interfaces';
import { VideoProps } from '../Components/videos/Video';



export async function getRedditVideos(subreddit?: string): Promise<IVideoResponse[]> {
    const sub: string = subreddit ? subreddit : 'videos';
    try {
         const resp: AxiosResponse<{videos: IVideoResponse[]}> =  await Axios.get(`http://localhost:8080/v1/clips/${sub}`);
         const { videos } = resp.data;
         return videos;
    } catch (err) {
        console.log(`got err :(
            ${err}`);
    }
}

export function getRedditVideo(video: IVideoResponse): VideoProps {
    const { title, originalPoster, score, video: { url }, comments, submitted } = video;

    return {
        title,
        author: originalPoster,
        upvotes: score,
        url,
        comments,
        submitted,
    };
}
