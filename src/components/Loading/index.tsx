import React from 'react';
import { Box, Spinner } from 'native-base';

export const LoadingFonts = () => {
  return (
    <Box
      flex={1}
      justifyContent="center"
      alignItems="center"
      bg="#EBEEF2"
      w="100%"
      h="100%"
    >
      <Spinner size="lg" color="#30663C" />
    </Box>
  );
};
