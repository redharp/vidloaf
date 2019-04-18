import React from 'react';
import { Button } from 'semantic-ui-react';

export const VideoNavButtons = ({ prevVideo, nextVideo }: { prevVideo: () => void, nextVideo: () => void }) => (
    <div>
        <Button onClick={prevVideo} content='Prev' icon='left arrow' labelPosition='left' />
        <Button onClick={nextVideo} content='Next' icon='right arrow' labelPosition='right' />
    </div>
);
