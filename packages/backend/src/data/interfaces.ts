export enum VideoSource {
    YOUTUBE = 'youtube',
    TWITCH = 'twitch',
    STREAMABLE = 'streamable',
    REDDIT = 'reddit',
    GFYCAT = 'gfycat',
}

export interface IVideoResponse {
    id?: string;
    videoSource?: VideoSource
    score?: number;
    title?: string;
    originalPoster?: string;
    video?: IVideo;
    submitted?: Date;
    comments?: string;
}

export interface IVideo {
    // origin?: 'youtube' | 'twitch' | 'streamable' | 'reddit' | 'gfycat';
    origin?: VideoSource;
    url?: string;
    thumbnailUrl?: string;
}
