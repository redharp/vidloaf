import React from 'react';
import { Link, Box, Flex, Text } from 'rebass'

interface Sub {
    name?: string;
}
interface Subs {
    subs: Sub[]
}

export const SubredditList = (subreddits: Subs ) => (
    <Flex>
        <Box width={5/8} mx='auto' />
        <Box width={3/8}>
        {
            subreddits.subs.map((s) => (
                <Link
                    key={s.name + ' key'}
                    style={{ textDecoration: 'none' }}
                    value={s.name}
                >
                    <Text>
                    {s.name}

                    </Text>
                </Link>
            ))
            }
            </Box>
    </Flex>
);
