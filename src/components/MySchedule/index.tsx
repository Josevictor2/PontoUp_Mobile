import { Slider } from '@animations/Slider';
import { HeaderDrawer } from '@components/HeaderDrawer';
import { dataTemporarily } from '@components/helpers/dataTemporario';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import { VStack, Text } from 'native-base';
import { ListSchedule } from './RenderList';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { useFontSize } from '@theme/responsiveFontSize';
export const MySchedule = (props: DrawerContentComponentProps) => {
  const { FontSize } = useFontSize();
  return (
    <VStack flex={1}>
      <DrawerContentScrollView {...props}>
        <Slider opacity={1} tranlateX={300}>
          <HeaderDrawer />
          <VStack mt={hp(3.8)} px={wp('6.1%')}>
            <Text
              fontFamily="body"
              mb={hp(2.8)}
              fontWeight="400"
              fontSize={FontSize(20)}
            >
              Meus Horários
            </Text>
            <VStack space={2} bg="white" w="100%">
              {dataTemporarily.length > 0 ? (
                dataTemporarily.map((item, index) => (
                  <ListSchedule
                    key={index}
                    day={item.day}
                    entrada={item.entrada}
                    intervalo={item.intervalo}
                    retorno={item.retorno}
                    saida={item.saida}
                  />
                ))
              ) : (
                <VStack mt={hp(3.8)}>
                  <Text
                    fontFamily="body"
                    fontWeight="400"
                    textAlign="center"
                    fontSize={FontSize(20)}
                  >
                    Nenhuma horário registrado no momento!
                  </Text>
                </VStack>
              )}
            </VStack>
          </VStack>
        </Slider>
      </DrawerContentScrollView>
    </VStack>
  );
};
