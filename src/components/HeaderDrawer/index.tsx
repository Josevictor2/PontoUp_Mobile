import { Box, HStack, Icon, Image, Pressable } from 'native-base';
import { memo } from 'react';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import logo from '@assets/images/pontoUplogo.png';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { useMotiScale } from '@hooks/useMotiScale';
import { AnimatePresence, MotiView } from 'moti';
import { MaterialIcons } from '@expo/vector-icons';
import { useModal } from '@hooks/useModal';
import { ArrowLeft } from '@assets/Svg/arrowLeft';

export const HeaderDrawer = memo(() => {
  const navigation = useNavigation();
  const { handleToogle, toogleAnimation } = useMotiScale({ scale: 1.3 });
  const { openSchedule, openMyData, setOpenSchedule, setOpenMyData } =
    useModal();
  const isTrue = openSchedule || openMyData;
  return (
    <HStack
      mt={hp('2.6%')}
      px={wp('5.4%')}
      alignItems="center"
      justifyContent="space-between"
    >
      <AnimatePresence>
        {isTrue ? (
          <Pressable
            onPress={() => {
              setOpenSchedule(false);
              setOpenMyData(false);
            }}
            _pressed={{
              opacity: 0.5,
              backgroundColor: 'gray.50',
              borderRadius: 4,
              p: '8px',
            }}
          >
            <MotiView
              from={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ type: 'timing', duration: 1000 }}
              exit={{ opacity: 0 }}
            >
              <ArrowLeft />
            </MotiView>
          </Pressable>
        ) : (
          <Image
            width={wp('22.4%')}
            height={hp('4.2%')}
            resizeMode="contain"
            source={logo}
            alt="PontoUp"
          />
        )}
      </AnimatePresence>
      <Pressable
        onPressIn={handleToogle}
        onPressOut={handleToogle}
        onPress={() => navigation.dispatch(DrawerActions.closeDrawer())}
      >
        <MotiView state={toogleAnimation}>
          <Box borderRadius={4} borderWidth="1" p="8px" borderColor="gray.50">
            <Icon
              as={<MaterialIcons name="close" />}
              color="secondary.100"
              size="24px"
            />
          </Box>
        </MotiView>
      </Pressable>
    </HStack>
  );
});
