import { observable, action, computed, flow, runInAction, reaction } from 'mobx';
import { IVideoResponse } from '@backend/data/interfaces';
import { getRedditVideos } from '../lib/videos'
import { VideoProps } from 'Components/videos/Video';

function processVideo(video: IVideoResponse): VideoProps {
    const { title, originalPoster, score, video: { url, origin }, comments, submitted } = video;

    return {
        title,
        origin,
        author: originalPoster,
        upvotes: score,
        url,
        comments,
        submitted,
    };
}

export interface ISubredditVideosStore {
    state: string;
    subredditVideos: VideoProps[];
    video: VideoProps;
    subreddit: string
    fetchVideos: () => Promise<void>;
    prevVideo: () => void;
    nextVideo: () => void;
    setSubreddit: (subreddit: string) => any;
}

export class SubredditVideosStore implements ISubredditVideosStore {
    @observable
    state: string = 'pending';

    @observable
    subreddit = 'videos';

    @observable
    subredditVideos: VideoProps[] = [];

    @observable
    index = 0;

    @observable
    video: VideoProps;

    @observable
    setSubreddit(subreddit: string) {
        reaction(
            () => this.subreddit,
            async (subreddit, reaction) => {
                console.log(subreddit);
                this.subreddit = subreddit;
                await this.fetchVideos()
                reaction.dispose();
            }
        )
        this.subreddit = subreddit;
    }
    @observable
    getSubreddit(subreddit: string) {
        return this.subreddit = subreddit;
    }

    @action
    async fetchVideos() {
        this.state = 'pending';
        try {
            const videos = await getRedditVideos(this.subreddit);
            const processedVideos: VideoProps[] = videos.map((v: IVideoResponse) => processVideo(v));
            runInAction(() => {
                this.index = 0;
                this.state = 'done';
                this.subredditVideos = processedVideos;
                this.video = processedVideos[this.index];
            });
        } catch (err) {
            console.log('err', err)
            runInAction(() => {
                this.state = `Error => ${err.message}`;
            })
        }
    }

    @action
    prevVideo() {
        if (this.index > 0) {
            this.index -= 1;
        }
        this.video = this.subredditVideos[this.index];
    }

    @action
    nextVideo() {
        if (this.index < this.subredditVideos.length) {
            this.index += 1;
        }
        this.video = this.subredditVideos[this.index];
    }
}
