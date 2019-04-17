import React from 'react';
import { Container, Rail, Segment, List, Header, Embed } from 'semantic-ui-react';
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
      <Container>

        <Header
          p={5}
          style={{ textDecoration: "none" }}
          href={`https://reddit.com${props.comments}`}
        >
          <Text fontFamily="helvetica" fontWeight="bolder" color="black">
            {props.title}
          </Text>
        </Header>
        <Embed active url={props.url} />
            <List>
              <List.Item fontSize="small">⚡ {props.upvotes}</List.Item>
              <List.Item fontSize="small">👨‍💻 {props.author}</List.Item>
              <List.Item fontSize="small">🗓 {momentTime}</List.Item>
            </List>

      </Container>
    );

}
