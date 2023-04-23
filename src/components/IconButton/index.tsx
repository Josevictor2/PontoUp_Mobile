import { ReactNode } from 'react';

import { HStack, Pressable, IPressableProps } from 'native-base';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

type PressableType = IPressableProps & {
  children: ReactNode;
};

export const IconButton = ({ children, height, ...props }: PressableType) => {
  return (
    <Pressable {...props}>
      <HStack
        h={height}
        bg="white"
        borderWidth={1}
        borderColor="gray.50"
        alignItems="center"
        justifyContent="center"
        mt={hp(1.2)}
        px={wp(3.8)}
        borderRadius={8}
      >
        {children}
      </HStack>
    </Pressable>
  );
};
