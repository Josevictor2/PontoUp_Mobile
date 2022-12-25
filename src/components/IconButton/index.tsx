import { ReactNode } from 'react';

import { HStack, Pressable, IPressableProps } from 'native-base';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

type Props = IPressableProps & {
  children: ReactNode;
};

export const IconButton = ({ children, height, ...props }: Props) => {
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
        width="100%"
        px={wp(3.8)}
        py={hp(2.8)}
        borderRadius={8}
      >
        {children}
      </HStack>
    </Pressable>
  );
};
