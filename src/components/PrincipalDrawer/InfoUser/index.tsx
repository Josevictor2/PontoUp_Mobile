import { HStack, VStack, Image, Text } from 'native-base';
import { memo } from 'react';

import perfil from '@assets/images/perfil.png';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { useFontSize } from '@theme/responsiveFontSize';

export const InfoUser = memo(() => {
  const { FontSize } = useFontSize();
  return (
    <VStack flex={1}>
      <HStack
        mx={wp(5.4)}
        mt={hp('4.7%')}
        px={wp(5.4)}
        py={hp(1.6)}
        space={wp(3.2)}
        alignItems="center"
        borderWidth={1}
        borderColor="gray.50"
      >
        <Image
          width={wp('21.333%')}
          height={hp('10.41%')}
          resizeMode="contain"
          source={perfil}
          alt="Perfil"
        />
        <VStack>
          <Text
            mb={hp(1.6)}
            fontFamily="body"
            fontSize={FontSize(14)}
            fontWeight="400"
            color="secondary.500"
          >
            Victor Gomes
          </Text>
          <Text
            color="gray.300"
            fontFamily="body"
            fontWeight="300"
            fontSize={FontSize(12)}
          >
            Matricula:{' '}
            <Text
              fontWeight="400"
              fontFamily="body"
              fontSize={FontSize(12)}
              color="secondary.500"
            >
              123456
            </Text>
          </Text>
        </VStack>
      </HStack>
    </VStack>
  );
});
