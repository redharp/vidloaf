import React from 'react';
import { Button } from 'semantic-ui-react';

export const VideoNavButtons = ({ prevVideo, nextVideo }: { prevVideo: () => void, nextVideo: () => void }) => (
    <div>
        <Button onClick={prevVideo}>Prev</Button>
        <Button onClick={nextVideo}>Next</Button>
    </div>
);
