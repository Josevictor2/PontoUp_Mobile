import { Slider } from '@animations/Slider';
import { HeaderDrawer } from '@components/HeaderDrawer';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import { useFontSize } from '@theme/responsiveFontSize';
import { VStack, Text, View } from 'native-base';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const ListData: string[] = ['Nome', 'Matrícula', 'Setor', 'Cargo'];

type UserData = {
  [key: string]: string;
  nome: string;
  matrícula: string;
  setor: string;
  cargo: string;
};

const TempResponse: UserData = {
  nome: 'Victor Gomes',
  matrícula: '123456',
  setor: 'TI',
  cargo: 'Desenvolvedor',
};

export const MyData = (props: DrawerContentComponentProps) => {
  const { FontSize } = useFontSize();
  return (
    <VStack flex={1}>
      <DrawerContentScrollView {...props}>
        <Slider opacity={1} tranlateX={300}>
          <VStack flex={1}>
            <HeaderDrawer />
          </VStack>
          <VStack flex={1} px={wp('6.1%')} mt={hp(3.8)}>
            <View>
              <Text
                fontFamily="body"
                mb={hp(2.8)}
                fontWeight="400"
                fontSize={FontSize(20)}
              >
                Meus dados
              </Text>
            </View>
            {ListData.map((item) => {
              const value = TempResponse[item.toLowerCase()];
              return (
                <VStack key={item} mb={hp(2)}>
                  <Text
                    fontFamily="body"
                    fontWeight="300"
                    fontSize={FontSize(12)}
                    color="gray.400"
                    lineHeight={FontSize(18)}
                  >
                    {item}
                  </Text>
                  <Text
                    fontFamily="body"
                    fontWeight="400"
                    fontSize={FontSize(14)}
                    lineHeight={FontSize(20)}
                    color="secondary.100"
                  >
                    {value}
                  </Text>
                </VStack>
              );
            })}
          </VStack>
        </Slider>
      </DrawerContentScrollView>
    </VStack>
  );
};
