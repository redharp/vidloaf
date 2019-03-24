import * as React from 'react';
import { Videos } from './Videos';

class Vidloaf extends React.Component {

    render() {
        // tslint:disable-next-line:no-console
        console.log('hi');
        return (
            <div>
                <header className="test">
                    <h1>Vidloaf for Reddit</h1>
                </header>
                <div>
                    <Videos value={'https://clips.twitch.tv/embed?clip=ElatedOnerousSkirretTakeNRG&autoplay=false'} />
                    <Videos value={'https://www.youtube.com/embed/51cYfCsyvuM?feature=oembed&enablejsapi=1'} />
                </div>
            </div>
        );
    }
}

export default Vidloaf;