import { HStack, Pressable, Image, Box, Icon } from 'native-base';
import Animated, { ZoomIn } from 'react-native-reanimated';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import logo from '@assets/images/pontoUplogo.png';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { MotiView } from 'moti';
import { useMotiScale } from '@hooks/useMotiScale';

export const Header = () => {
  const { handleToogle, toogleAnimation } = useMotiScale({ scale: 1.3 });
  const navigation = useNavigation();

  return (
    <HStack
      mt={hp('2.6%')}
      px={wp('6.1%')}
      alignItems="center"
      justifyContent="space-between"
    >
      <Animated.View entering={ZoomIn.duration(1500)}>
        <Image
          width={wp('22.4%')}
          height={hp('4.2%')}
          resizeMode="contain"
          source={logo}
          alt="PontoUp"
        />
      </Animated.View>
      <Pressable
        onPressIn={handleToogle}
        onPressOut={handleToogle}
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
      >
        <MotiView state={toogleAnimation}>
          <Box borderRadius={4} borderWidth="1" p="8px" borderColor="gray.50">
            <Icon as={<MaterialIcons name="menu" />} size="24px" />
          </Box>
        </MotiView>
      </Pressable>
    </HStack>
  );
};
