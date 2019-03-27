import * as React from 'react';
import { VideoContainer } from './VideoContainer';
import { Heading, Flex, Button } from 'rebass';

class Vidloaf extends React.Component {

    render() {
        return (
                <Flex mx='auto'>
                    <Heading
                        fontSize={[3, 4, 5]}
                        fontWeight='bold'
                        fontFamily='Helvetica'
                        width='15'
                        mx='auto'
                        mt={2}>
                        vidloaf
                        for reddit
                    </Heading>
                    <VideoContainer />
                    <Button>Prev</Button>
            <Button>Next</Button>
                </Flex>
        );
    }
}

export default Vidloaf;