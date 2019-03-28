import React, { useState, useEffect } from 'react';
import Axios, { AxiosResponse, AxiosError } from 'axios';
import { Video, VideoProps } from './videos/Video';
import { getRedditVideo, getRedditVideos } from '../lib/videos';
import { Button, Box } from 'rebass';
import { IVideoResponse } from '@backend/data/interfaces';

class VideosState {
    readonly count: number = 0;
    readonly video: VideoProps = {};
    readonly videos: IVideoResponse[] = [];
}

export class VideoContainer extends React.Component<VideoProps, VideosState> {


    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            video: {},
            count: 0
        }
    }

    componentDidMount() {
        getRedditVideos().then((videos: IVideoResponse[]) => {
            this.setState({
                videos,
                video: getRedditVideo(videos[this.state.count])
            });
        });
    }
    


    render() {
        return (
            <Box mx={500} p={1}>
                <Video {...this.state.video} />
                <Button onClick={() => this.setState({
                    count: (this.state.count + 1),
                    video: getRedditVideo(this.state.videos[this.state.count])
                })}>Next</Button>
            </Box>
        )
    }
}