import * as React from 'react';
import { string } from 'prop-types';

const video = {
    src: '<iframe width="600" height="338" src="https://streamable.com/emckh?feature=oembed&enablejsapi=1&autoplay=false" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'


}
export const Videos = (props: { value: string }) => (
    <iframe width='600' height='340' src={props.value} />
);
