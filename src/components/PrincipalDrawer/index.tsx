import { memo } from 'react';
import { useNavigation, DrawerActions } from '@react-navigation/native';

import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { VStack, Icon, Text, useDisclose } from 'native-base';

import {
  Feather,
  MaterialCommunityIcons,
  SimpleLineIcons,
} from '@expo/vector-icons';

import { FormJustify } from '@components/ActionSheet';
import { IconButton } from '@components/IconButton';
import { useFontSize } from '@theme/responsiveFontSize';
import { MotiView } from 'moti';
import { useMotiScale } from '@hooks/useMotiScale';
import { useAuth } from '@hooks/useAuth';
import { useModal } from '@hooks/useModal';
import { HeaderDrawer } from '@components/HeaderDrawer';
import { InfoUser } from '@components/PrincipalDrawer/InfoUser';

export const PrincipalDrawer = memo((props: DrawerContentComponentProps) => {
  const navigation = useNavigation();
  const { FontSize } = useFontSize();
  const { signOut } = useAuth();
  const { setOpenSchedule, setOpenMyData } = useModal();

  const { handleToogle: handleMySchedule, toogleAnimation: toogleMySchedule } =
    useMotiScale({ scale: 1.1 });

  const { handleToogle: handleMyData, toogleAnimation: toogleMyData } =
    useMotiScale({ scale: 1.1 });

  const { handleToogle: handleToogle2, toogleAnimation: toogleAnimation2 } =
    useMotiScale({ scale: 1.1 });

  const { handleToogle: handleToogle3, toogleAnimation: toogleAnimation3 } =
    useMotiScale({ scale: 1.1 });

  const { handleToogle: handleToogleLogout, toogleAnimation: toogleLogout } =
    useMotiScale({ scale: 1.1 });
  const { isOpen, onClose, onOpen } = useDisclose();

  return (
    <VStack flex={1}>
      <DrawerContentScrollView {...props}>
        <HeaderDrawer />
        <InfoUser />
        <VStack mx={wp(5.4)} mt={hp('1.6%')}>
          <MotiView state={toogleMySchedule}>
            <IconButton
              onPressIn={handleMySchedule}
              onPressOut={handleMySchedule}
              onPress={() => setOpenSchedule(true)}
              height={hp(8.4)}
            >
              <Icon as={<Feather name="clock" />} size={6} color="gray.400" />
              <VStack>
                <Text
                  ml={3.5}
                  color="secondary.100"
                  h={6}
                  fontFamily="body"
                  fontWeight="400"
                  fontSize={FontSize(14)}
                >
                  Meus horários
                </Text>
                <Text ml={3.5} color="gray.400" fontSize={FontSize(12)}>
                  Meus horários de entrada
                </Text>
              </VStack>
              <Icon
                as={Feather}
                ml="auto"
                name="chevron-right"
                size={4}
                color="gray.200"
              />
            </IconButton>
          </MotiView>
          <MotiView state={toogleMyData}>
            <IconButton
              onPressIn={handleMyData}
              onPressOut={handleMyData}
              onPress={() => setOpenMyData(true)}
              height={hp(8.4)}
            >
              <Icon
                as={<Feather name="file-text" />}
                size={6}
                color="gray.400"
              />
              <VStack>
                <Text
                  ml={3.5}
                  color="secondary.100"
                  h={6}
                  fontFamily="body"
                  fontWeight="400"
                  fontSize={FontSize(14)}
                >
                  Meus dados
                </Text>
                <Text ml={3.5} color="gray.400" fontSize={FontSize(12)}>
                  Minhas informações da conta
                </Text>
              </VStack>
              <Icon
                as={Feather}
                ml="auto"
                name="chevron-right"
                size={4}
                color="gray.200"
              />
            </IconButton>
          </MotiView>
        </VStack>
        <VStack mx={wp(5.4)} mt={hp('1.6%')}>
          <MotiView state={toogleAnimation2}>
            <IconButton
              onPressIn={handleToogle2}
              onPressOut={handleToogle2}
              height={hp(8.4)}
              onPress={() => {
                onOpen();
                navigation.dispatch(DrawerActions.closeDrawer());
              }}
            >
              <Icon
                as={<MaterialCommunityIcons name="calendar-clock-outline" />}
                size={6}
                color="gray.400"
              />
              <Text
                ml={3.5}
                color="secondary.100"
                h={6}
                mb={1}
                fontFamily="body"
                fontWeight="400"
                fontSize={FontSize(16)}
              >
                Justificar falta
              </Text>
              <Icon
                as={Feather}
                ml="auto"
                name="chevron-right"
                size={4}
                color="gray.200"
              />
            </IconButton>
          </MotiView>

          <MotiView state={toogleAnimation3}>
            <IconButton
              onPressIn={handleToogle3}
              onPressOut={handleToogle3}
              height={hp(8.4)}
              onPress={() => {
                navigation.navigate('View');
                navigation.dispatch(DrawerActions.closeDrawer());
              }}
            >
              <Icon as={<Feather name="eye" />} size={6} color="gray.400" />
              <Text
                ml={3.5}
                color="secondary.100"
                h={6}
                mb={1}
                fontFamily="body"
                fontWeight="400"
                fontSize={FontSize(16)}
              >
                Visualizar Frequência
              </Text>
              <Icon
                as={Feather}
                ml="auto"
                name="chevron-right"
                size={4}
                color="gray.200"
              />
            </IconButton>
          </MotiView>

          <MotiView state={toogleLogout}>
            <IconButton
              onPress={signOut}
              onPressIn={handleToogleLogout}
              onPressOut={handleToogleLogout}
              height={hp(8.4)}
              mb={hp(0.4)}
            >
              <Icon
                as={<SimpleLineIcons name="logout" />}
                size={6}
                color="red.300"
              />
              <Text
                ml={3.5}
                color="red.300"
                h={6}
                mb={1}
                fontFamily="body"
                fontWeight="400"
                fontSize={FontSize(16)}
              >
                Sair do sistema
              </Text>
              <Icon
                as={Feather}
                ml="auto"
                name="chevron-right"
                size={4}
                color="white"
              />
            </IconButton>
          </MotiView>
        </VStack>
        <FormJustify isOpen={isOpen} onClose={onClose} />
      </DrawerContentScrollView>
    </VStack>
  );
});
