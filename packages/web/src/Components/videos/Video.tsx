import React, { useState, useEffect } from 'react';
import { Text, Box, Flex, Button } from 'rebass';

export interface VideoProps {
    title?: string;
    author?: string;
    upvotes?: number;
    url?: string;
}

export function Video(props: VideoProps) {

    return (
        <>
        <Flex mx='auto'>
            <Text textAlign='left'>{props.title}</Text>
            <Box mx='auto'
                css={{
                    '& > iframe': {
                        width: '100%',
                        height: '100%',
                        top: 0,
                        bottom: 0,
                        left: 0,
                        border: 0
                    }
                }}>
                <iframe
                    width='560'
                    height='315'
                    frameBorder='0'
                    allowFullScreen
                    src={props.url}
                />
            </Box>
            <Text> {props.upvotes} ⚡ posted by: {props.author}</Text>
        </Flex>
        </>
    );

}

{/* <Box
  width={1}
  css={{
    height: 0,
    paddingBottom: (900 / 16) + '%',
    position: 'relative',
    overflow: 'hidden',
    '& > iframe': {
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: 0,
      bottom: 0,
      left: 0,
      border: 0
    }
  }}>
  <iframe
    width='560'
    height='315'
    src='https://www.youtube.com/embed/GNCd_ERZvZM'
    frameBorder='0'
    allowFullScreen
  />
</Box> */}