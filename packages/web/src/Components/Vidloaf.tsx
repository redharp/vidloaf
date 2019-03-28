import * as React from 'react';
import { VideoContainer } from './VideoContainer';
import { Heading, Box, Button, Flex } from 'rebass';

class Vidloaf extends React.Component {

    render() {
        return (
            <div style={{ marginLeft: 'auto', marginRight: 'auto'}} >
                <Box>

                        <Heading
                        mx={500}
                            fontSize={[3, 4, 5]}
                            fontWeight='bold'
                            fontFamily='Helvetica'
                            width='15'
                            mt={2}>
                            vidloaf
                            for reddit
                        </Heading>
                            <VideoContainer />
                </Box>
            </div>
        );
    }
}

export default Vidloaf;