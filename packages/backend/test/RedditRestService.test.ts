import { expect } from 'chai';
import { HttpService } from '../src/services/HttpService';
import { IRedditResponse, IRedditPost } from '../src/data/IRedditResponse';
import { RedditRestService } from '../src/services/RedditRestService';
import { createSandbox, SinonStub, SinonSandbox } from 'sinon';
import { IPostDetails } from '@backend/services/RedditRestService';

describe(`RedditRestService`, () => {
    let subReddit = 'fakesub';
    let sandbox: SinonSandbox;
    let redditService: RedditRestService;
    const expectedFields: string[] = ['id', 'author', 'score', 'title', 'video', 'videoUrl'];

    beforeEach(() => {
        sandbox = createSandbox();
    });

    afterEach(() => {
        sandbox.restore();
    });

    it(`maps raw response`, async () => {
        redditService = new RedditRestService();

        const httpService: HttpService = new HttpService('test');
        const httpStub = sandbox.stub(httpService);
        httpStub.get.resolves(rawResponse);
        (redditService['_client'] as any) = httpStub;
        // (redditService['prepUrl'] as any) = prepUrlStub;

        const result: IPostDetails[] = await redditService.getPosts(subReddit);
        for (const post of result) {
            Object.keys(post).forEach((key: string) => expect(expectedFields.includes(key)).to.be.true);
        }
        expect(httpStub.get.getCall(0).args[0]).to.equal('fakesub/.json?limit=10');
    });

});


const rawRedditPosts: IRedditPost[] = [
    {
        data: {
            id: '1',
            subreddit: 'fakesub',
            author: 'test',
            score: 10,
            title: 'fake title',
            media: {
                type: 'youtube',
                oembed: {
                    html: '<test>',
                    type: '',
                    thumbnail_url: 'thumbnailURl'
                }
            }

        }
    },
    {
        data: {
            id: '2',
            subreddit: 'fakesub',
            author: 'test',
            score: 10,
            title: 'fake title',
            media: {
                type: 'youtube',
                oembed: {
                    html: '<test>',
                    type: '',
                    thumbnail_url: 'thumbnailURl'
                }
            }

        }
    },
    {
        data: {
            id: '3',
            subreddit: 'fakesub',
            author: 'test',
            score: 10,
            title: 'fake title',
            media: {
                type: 'youtube',
                oembed: {
                    html: '<test>',
                    type: '',
                    thumbnail_url: 'thumbnailURl'
                }
            }

        }
    }
];

const rawResponse: IRedditResponse = {
    kind: 'test',
    data: {
        modhash: '',
        dist: 3,
        children: rawRedditPosts,
    }
};
