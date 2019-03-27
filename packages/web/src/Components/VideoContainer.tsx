import React, { useState, useEffect } from 'react';
import Axios, { AxiosResponse, AxiosError } from 'axios';
import { Video, VideoProps } from './videos/Video';
import { IVideoResponse } from '@backend/data/interfaces'
import { Button, Flex } from 'rebass';



export function VideoContainer() {
    const [videos, setVideos] = useState();
    const [video, setVideo] = useState();
    
    useEffect(() => {
        function setVid(vid) {
            const { title, originalPoster, score, video: { url } } = vid;
            const video: VideoProps = {
                title,
                author: originalPoster,
                upvotes: score,
                url,
            };
            setVideo(video);
        }

        function getVideos() {
            Axios
                .get('http://localhost:3000/v1/videos?subreddit=videos&count=3')
                .then((resp: AxiosResponse<{ videos: IVideoResponse[] }>) => {
                    const { videos } = resp.data;
                    setVideos(videos);
                    setVid(videos[0]);
                })
                .catch((err: AxiosError) => {
                    console.log(`Caught major error ${JSON.stringify(err, null, 2)}`);
                });
        }
        return getVideos();
    }, []);


    return (
        <Flex mx='auto'>
            <Video {...video} />
        </Flex>
    )
}