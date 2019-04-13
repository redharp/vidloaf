import React from 'react';
import { Text, Box, Flex, Link, Card } from 'rebass';
import moment from 'moment'


export interface VideoProps {
    title?: string;
    author?: string;
    upvotes?: number;
    url?: string;
    submitted?: Date;
    comments?: string;
}

export function Video(props: VideoProps) {
    const momentTime: string = moment(new Date(props.submitted)).format('L');

    return (
        // <Flex>
            <Box>
                <Link p={5} style={{textDecoration: 'none'}} href={`https://reddit.com${props.comments}`}><Text fontFamily='helvetica' fontWeight='bolder' color='black'>{props.title}</Text></Link>
            <iframe
                    width='560'
                    height='315'
                    frameBorder='0'
                    allowFullScreen
                    src={props.url}
                />
                <Text fontSize='small'>⚡ { props.upvotes }</Text>
                <Text fontSize='small'>👨‍💻 { props.author }</Text>
                <Text fontSize='small'>🗓 { momentTime }</Text>
            </Box>
        // </Flex>

    );

}
