import React from 'react';
import { Container, Label, Header, Embed } from 'semantic-ui-react';
import moment from 'moment'


export interface VideoProps {
    origin?: string
    title?: string;
    author?: string;
    upvotes?: number;
    url?: string;
    submitted?: Date;
    comments?: string;
}

export function Video(props: VideoProps) {
  const momentTime: string = moment(new Date(props.submitted)).fromNow();

    return (
        <Container>
            <Header
                size='small'
                p={5}
                style={{ textDecoration: "none" }}
                href={`https://reddit.com${props.comments}`}
            >
                    {props.title}
            </Header>
            <Embed active url={props.url} />
            <div style={{ padding: "5px" }}>
                <Label>
                    ⚡ upvotes <Label.Detail>{props.upvotes}</Label.Detail>
                </Label>
                <Label>
                    👨‍💻 original poster
                    <Label.Detail>{props.author}</Label.Detail>
                </Label>
                <Label>
                    🗓 submitted
                    <Label.Detail>{momentTime}</Label.Detail>
                </Label>
            </div>
        </Container>
    );

}
