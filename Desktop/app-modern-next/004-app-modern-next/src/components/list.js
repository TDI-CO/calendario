import React from 'react';
import { Flex, Box } from 'theme-ui';

export default function List({ items = [], parentStyle, childStyle }) {
  return (
    <Box
      as="ul"
      sx={{
        listStyleType: 'none',
        margin: 0,
        padding: 0,
        ...parentStyle,
      }}
    >
      {items.map(({ text, isAvailable }, i) => (
        <Flex
          className={isAvailable ? 'open' : 'closed'}
          as="li"
          sx={{ ...childStyle }}
          key={i}
        >
          {text}
        </Flex>
      ))}
    </Box>
  );
}
