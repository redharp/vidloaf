import { expect } from 'chai';
import { HttpService } from '../src/services/HttpService';
import { IRedditResponse, IRedditPost } from '../src/data/IRedditResponse';
import { RedditRestService } from '../src/services/RedditRestService';
import { createSandbox, SinonStub, SinonSandbox } from 'sinon';
import { IPostDetails } from '@backend/services/RedditRestService';

describe(`RedditRestService`, () => {
    let subReddit = 'fakesub';
    let httpService: HttpService;
    let sandbox: SinonSandbox;
    let redditService: RedditRestService;
    const expectedFields: string[] = [ 'id', 'author', 'score', 'title', 'video', 'videoUrl' ];

    beforeEach(() => {
        createSandbox()
    });

    afterEach(() => {
        sandbox.restore();
    });

    it(`builds full url`, async () => {
        redditService = new RedditRestService();
        const prepUrlStub: SinonStub = sandbox.stub(redditService as any , 'prepUrl');
        sandbox.stub(redditService['_client'], 'get').resolves(fakeResponse);
        const result: IPostDetails[] = await redditService.getPosts(subReddit);
        console.log(`Got Result: ${JSON.stringify(result, null, 2)}`);
        for (const post of result) {
            Object.keys(post).forEach((key: string) => expectedFields.includes(key));
        }
        expect(prepUrlStub.getCall(0).returned).to.equal(subReddit + `/.json?limit=10`);
    });


});

const fakePostDetails : IPostDetails = {
    id: 'b4kz4f',
    author: 'Cxmy',
    score: 1619,
    title: 'Greek finally gets in game',
    video: {
        type: 'clips.twitch.tv',
        embed: {
            html: '<iframe class="embedly-embed" src="https://cdn.embedly.com/widgets/media.html?sr' +
                    'c=https%3A%2F%2Fclips.twitch.tv%2Fembed%3Fclip%3DTolerantBitterPotatoAsianGlow%2' +
                    '6autoplay%3Dfalse&url=https%3A%2F%2Fclips.twitch.tv%2FTolerantBitterPotatoAsianG' +
                    'low&image=https%3A%2F%2Fclips-media-assets2.twitch.tv%2F33335163120-offset-27372' +
                    '-preview.jpg&key=ed8fa8699ce04833838e66ce79ba05f1&type=text%2Fhtml&schema=twitch' +
                    '" width="600" height="340" scrolling="no" frameborder="0" allow="autoplay; fulls' +
                    'creen" allowfullscreen="true"></iframe>',
            type: 'video',
            thumbnail: 'https://clips-media-assets2.twitch.tv/33335163120-offset-27372-preview.jpg'
        }
    },

    videoUrl: 'https://clips.twitch.tv/TolerantBitterPotatoAsianGlow?feature=oembed&enablejsapi' +
            '=1'
}

const embed = {
    embed: {
        html: '&lt;iframe width="600" height="338" src="https://www.youtube.com/embed/WRve0s4iW' +
                'zI?feature=oembed&amp;enablejsapi=1" frameborder="0" allow="accelerometer; autop' +
                'lay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen&gt;&lt;/ifr' +
                'ame&gt;',
        type: 'youtube.com',
        thumbnail: 'https://i.ytimg.com/vi/WRve0s4iWzI/hqdefault.jpg'
    }
}
const fakeResponse: IRedditResponse = [
    {
        id: 'b4jubo',
        author: 'Mini_trickster',
        score: 16457,
        title: 'John Cho and Karl Urban learn about Five Guys',
        video: {
            embed: {
                html: 'fake html',
                type: 'youtube.com',
                thumbnail: 'https://i.ytimg.com/vi/WRve0s4iWzI/hqdefault.jpg'
            }
        }
    }, {
        id: 'b4kxsg',
        author: 'MmmDarkMeat',
        score: 1694,
        title: 'Never touch Jimmy Fallon’s hand.',
        video: {
            embed: {
                html: 'fake html',
                type: 'youtube.com',
                thumbnail: 'https://i.ytimg.com/vi/WRve0s4iWzI/hqdefault.jpg'
            }
        }
    }, {
        id: 'b4i7fz',
        author: '10100011a10100011a',
        score: 3414,
        title: 'Spinning Lego Propellers',
        video: {
            embed: {
                html: 'fake html',
                type: 'youtube.com',
                thumbnail: 'https://i.ytimg.com/vi/WRve0s4iWzI/hqdefault.jpg'
            }
        }
    }, {
        id: 'b4ilzk',
        author: 'TBtheG',
        score: 2025,
        title: 'Guy finds a Michael Jordan rookie card.',
        video: {
            embed: {
                html: 'fake html',
                type: 'youtube.com',
                thumbnail: 'https://i.ytimg.com/vi/WRve0s4iWzI/hqdefault.jpg'
            }
        }
    }, {
        id: 'b4is4r',
        author: 'UdanChhoo',
        score: 1768,
        title: 'A mini-doc on an Indian family terrorized by their pet rooster. Meet Tungrus and' +
                ' His Pet Chicken From Hell',
        video: {
            embed: {
                html: 'fake html',
                type: 'youtube.com',
                thumbnail: 'https://i.ytimg.com/vi/WRve0s4iWzI/hqdefault.jpg'
            }
        }
    }, {
        id: 'b4n6uq',
        author: 'slasher99',
        score: 449,
        title: 'Dunkey: Sekiro',
        video: {
            embed: {
                html: 'fake html',
                type: 'youtube.com',
                thumbnail: 'https://i.ytimg.com/vi/WRve0s4iWzI/hqdefault.jpg'
            }
        }
    }, {
        id: 'b4d1dc',
        author: 'dr_funkenberry',
        score: 40348,
        title: 'Lemmy gives advice to a black kid who is being picked on for liking metal',
        video: {
            embed: {
                html: 'fake html',
                type: 'youtube.com',
                thumbnail: 'https://i.ytimg.com/vi/WRve0s4iWzI/hqdefault.jpg'
            }
        }
    }, {
        id: 'b4o0x9',
        author: 'iBlueSweatshirt',
        score: 166,
        title: 'A cruise ship off the coast of Norway has lost power, leaving 1300 passengers st' +
                'randed as it\'s battered by dangerous waves',
        video: {
            embed: {
                html: 'fake html',
                type: 'youtube.com',
                thumbnail: 'https://i.ytimg.com/vi/WRve0s4iWzI/hqdefault.jpg'
            }
        }
    }, {
        id: 'b4kdqi',
        author: 'SktDTwo--',
        score: 387,
        title: 'Lock Picking Lawyer picks gun lock in 8 seconds',
        video: {
            embed: {
                html: 'fake html',
                type: 'youtube.com',
                thumbnail: 'https://i.ytimg.com/vi/WRve0s4iWzI/hqdefault.jpg'
            }
        }
    }, {
        id: 'b4k5s7',
        author: 'cwifff',
        score: 275,
        title: 'CVS to begin selling CBD',
        video: {
            embed: {
                html: 'fake html',
                type: 'youtube.com',
                thumbnail: 'https://i.ytimg.com/vi/WRve0s4iWzI/hqdefault.jpg'
            }
        }
    }
]
