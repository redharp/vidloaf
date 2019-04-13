import * as React from 'react';
import {VideoContainer} from './VideoContainer';
import {Heading, Box, Button, Flex} from 'rebass';

class Vidloaf extends React.Component {

    render() {
        return (
            <Flex size={100} width={2 / 3} alignSelf='true' mx='auto'>
                <Box width={1 / 2}>
                    <Heading fontSize={[3, 4, 5]} fontWeight='bold' fontFamily='Helvetica'>
                        vidloaf for reddit
                    </Heading>
                    <VideoContainer />
                </Box>
            </Flex>
        );
    }
}

export default Vidloaf;
