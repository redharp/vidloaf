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
        <Box
        width={1}
        mt={50}
        >
           <Text fontFamily='helvetica' fontWeight='bolder'>{props.title}</Text>
                <iframe
                    width='560'
                    height='315'
                    frameBorder='0'
                    allowFullScreen
                    src={props.url}
                />
            <Text> {props.upvotes} ⚡ posted by: {props.author}</Text>
            </Box>

    );

}
