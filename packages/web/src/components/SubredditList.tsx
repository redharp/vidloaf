import React from 'react';
import {Link, Box, Flex, Text} from 'rebass'

interface Sub {
    name?: string;
}
interface Subs {
    subs : Sub[];
    clicker?: any;
}

export const SubredditList = (subreddits : Subs) => {
    const clicker = (e : Event) => {
        e.preventDefault();
        console.log(e.target);
        return e;
    }
    return (
        <Flex>
                {subreddits
                    .subs
                    .map((s) => (
                        <Link
                            onClick={() => subreddits.clicker(s.name)}
                            key={s.name + ' key'}
                            style={{
                            textDecoration: 'none',
                                cursor: 'pointer',
                            color: 'black'
                        }}
                            value={s.name}>
                            <Text>{s.name}</Text>
                        </Link>
                    ))
}
        </Flex>
    )
}
