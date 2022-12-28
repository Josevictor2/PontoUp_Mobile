import { HStack, VStack, Text, Box } from 'native-base';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import { Header } from '@components/Header';
import { useFontSize } from '@theme/responsiveFontSize';
import { ArrowLeft } from '@assets/Svg/arrowLeft';
//import { RenderItem } from '@components/RenderItem';

const data = [
  {
    id: '1',
    title:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget aliquam ultricies, nunc nisl aliquam nunc, eget aliquam nunc nisl eget nunc.',
  },
  {
    id: '2',
    title: 'Justification 2',
  },
  {
    id: '3',
    title: 'Justification 3',
  },
  {
    id: '4',
    title: 'Justification 4',
  },
];

export const ViewRegisterScreen = () => {
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
          <ArrowLeft />
          <Box flexGrow={1} />
          <Text fontFamily="body" fontWeight="400" fontSize={FontSize(16)}>
            Visualizar frequência
          </Text>
          <Box flexGrow={1} />
        </HStack>
      </VStack>
      <VStack bg="blue.300" flex={5} />
    </VStack>
  );
};
