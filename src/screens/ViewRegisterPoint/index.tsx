import { HStack, VStack, Text, Box, Pressable } from 'native-base';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import { Header } from '@components/Header';
import { useFontSize } from '@theme/responsiveFontSize';
import { ArrowLeft } from '@assets/Svg/arrowLeft';
import { useNavigation } from '@react-navigation/native';
//import { RenderItem } from '@components/RenderItem';

export const ViewRegisterScreen = () => {
  const navigation = useNavigation();
  const { FontSize } = useFontSize();
  return (
    <VStack h="100%" flex={1} safeArea>
      <VStack bg="white" flex={1}>
        <Header />
        <HStack
          px={wp('6.1%')}
          flex={1}
          alignItems="center"
          justifyContent="center"
        >
          <Pressable onPress={() => navigation.goBack()}>
            <ArrowLeft />
          </Pressable>
          <Box flexGrow={1} />
          <Text fontFamily="body" fontWeight="400" fontSize={FontSize(16)}>
            Visualizar frequência
          </Text>
          <Box flexGrow={1} />
        </HStack>
      </VStack>
      <VStack
        alignItems="center"
        justifyContent="center"
        bg="gray.300"
        flex={5}
      />
    </VStack>
  );
};
