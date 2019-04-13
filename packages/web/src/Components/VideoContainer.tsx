import React, { useState, useEffect } from 'react';
import Axios, { AxiosResponse, AxiosError } from 'axios';
import { Video, VideoProps } from './videos/Video';
import { getRedditVideo, getRedditVideos } from '../lib/videos';
import { Button, Box, Text, Flex } from 'rebass';
import { IVideoResponse } from '@backend/data/interfaces';
import { SubredditList } from './SubredditList';


class VideosState {
    readonly count: number = 1;
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
    performVideoLookup(subreddit?: string): void {
        getRedditVideos(subreddit || 'videos').then((videos: IVideoResponse[]) => {
            this.setState({
                videos,
                video: getRedditVideo(videos[this.state.count]),
            });
        });
    }
    async componentDidMount() {
        await this.performVideoLookup();
    }

    handleSubredditChange = async (name: string) => {
        await this.performVideoLookup(name);
    }



    render() {
        return (
            <Box>
                <Flex>
                    <Box width={5 / 8} />
                    <Text width={3 / 8}>{this.state.count + 1} / {this.state.videos.length}</Text>
                </Flex>
                <SubredditList  {...{
                    subs: [
                        { name: 'videos' },
                        { name: 'livestreamfail' },
                        { name: 'destiny' },
                    ],
                    clicker: this.handleSubredditChange
                }} />
                <Video {...this.state.video} />
                <Button fontSize={24} bg='white' color='black' style={{ cursor: 'pointer' }} onClick={(e) => {
                    e.preventDefault();
                    const count = this.state.count > 0 ? this.state.count - 1 : 0;
                    console.log(`count ${this.state.count} clicked`)
                    this.setState({
                        video: getRedditVideo(this.state.videos[count]),
                        count,
                    })
                }}>Prev</Button>
                <Button fontSize={24} bg='white' color='black' style={{ cursor: 'pointer' }} onClick={(e) => {
                    e.preventDefault();
                    console.log(`count ${this.state.count} clicked`)
                    const count = this.state.count + 1;
                    this.setState({
                        video: getRedditVideo(this.state.videos[count]),
                        count,
                    })
                }}>Next</Button>
            </Box>
        )
    }
}