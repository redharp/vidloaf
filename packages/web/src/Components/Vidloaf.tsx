import * as React from 'react';
import { VideoContainer } from './VideoContainer';
import { Heading, Box, Button, Flex } from 'rebass';

class Vidloaf extends React.Component {

    render() {
        return (
            <Box>
                <Heading
                    fontSize={[3, 4, 5]}
                    fontWeight='bold'
                    fontFamily='Helvetica'>
                    vidloaf
                    for reddit
                        </Heading>
                <VideoContainer />
            </Box>
        );
    }
}

export default Vidloaf;