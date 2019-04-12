import { observable } from 'mobx';

export class VideoModel {
    readonly id: number;
    @observable title?: string;
    author?: string;
    upvotes?: number;
    url?: string;
}