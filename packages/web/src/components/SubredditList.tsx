import React from 'react';
import { Link, Box, Flex, Text } from 'rebass'

interface Sub {
    name?: string;
}
interface Subs {
    subs: Sub[];
    clicker?: any;
}

export const SubredditList = (subreddits: Subs) => {
    const clicker = (e: Event) => {
        e.preventDefault();
        console.log(e.target);
        return e;
    }
    return (
        <Flex>
            <Box width={5 / 8} mx='auto' />
            <Box width={3 / 8}>
                {
                    subreddits.subs.map((s) => (
                        <Link
                            onClick={ () =>   subreddits.clicker(s.name)}
                            key={s.name + ' key'}
                            style={{ textDecoration: 'none', cursor: 'pointer' }}
                            value={s.name}
                        >
                            <Text>{s.name}</Text>
                        </Link>
                    ))
                }
            </Box>
        </Flex>
    )
}
