import { HStack, Pressable, Image, Box, Icon } from 'native-base';
import Animated, { ZoomIn } from 'react-native-reanimated';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import logo from '@assets/images/pontoUplogo.png';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { useAnimattion } from '@hooks/useAnimation';

export const Header = () => {
  const { pressed, animatedStyle } = useAnimattion();
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
        onPressIn={() => (pressed.value = true)}
        onPressOut={() => (pressed.value = false)}
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
      >
        <Animated.View style={animatedStyle}>
          <Box borderRadius={4} borderWidth="1" p="8px" borderColor="gray.50">
            <Icon as={<MaterialIcons name="menu" />} size="24px" />
          </Box>
        </Animated.View>
      </Pressable>
    </HStack>
  );
};
