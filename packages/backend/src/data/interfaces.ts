export interface IVideoResponse {
    id?: string;
    videoSource?: 'youtube' | 'twitch' | 'streamable' | 'reddit'
    score?: number;
    title?: string;
    originalPoster?: string;
    video?: IVideo;
}

export interface IVideo {
    origin?: 'youtube' | 'twitch' | 'streamable' | 'reddit';
    url?: string;
    thumbnailUrl?: string;
}



