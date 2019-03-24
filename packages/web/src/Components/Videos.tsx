import * as React from 'react';
import {IPostDetails} from '@backend/services/RedditRestService';
import { string } from 'prop-types';

const video = {
    src: '<iframe width="600" height="338" src="https://www.youtube.com/embed/ixk01QlUPqw?feature=oembed&enablejsapi=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'


}
export const Videos = (props: { value: string }) => (
    <iframe width='600' height='340' src={props.value} />
);
