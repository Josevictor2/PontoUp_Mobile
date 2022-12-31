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
import {
  HStack,
  Pressable,
  VStack,
  Image,
  Icon,
  Box,
  Text,
  useDisclose,
} from 'native-base';

import {
  MaterialIcons,
  Feather,
  MaterialCommunityIcons,
  SimpleLineIcons,
} from '@expo/vector-icons';

import logo from '@assets/images/pontoUplogo.png';
import perfil from '@assets/images/perfil.png';

import { FormJustify } from '@components/ActionSheet';
import { IconButton } from '@components/IconButton';
import { useFontSize } from '@theme/responsiveFontSize';
import { MotiView } from 'moti';
import { useMotiScale } from '@hooks/useMotiScale';
import { useAuth } from '@hooks/useAuth';

export const CustomDrawer = memo((props: DrawerContentComponentProps) => {
  const navigation = useNavigation();
  const { FontSize } = useFontSize();
  const { signOut } = useAuth();

  const { handleToogle, toogleAnimation } = useMotiScale({ scale: 1.3 });

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
        <HStack
          mt={hp('2.6%')}
          px={wp('5.4%')}
          alignItems="center"
          justifyContent="space-between"
        >
          <Image
            width={wp('22.4%')}
            height={hp('4.2%')}
            resizeMode="contain"
            source={logo}
            alt="PontoUp"
          />

          <Pressable
            onPressIn={handleToogle}
            onPressOut={handleToogle}
            onPress={() => navigation.dispatch(DrawerActions.closeDrawer())}
          >
            <MotiView state={toogleAnimation}>
              <Box
                borderRadius={4}
                borderWidth="1"
                p="8px"
                borderColor="gray.50"
              >
                <Icon
                  as={<MaterialIcons name="close" />}
                  color="secondary.100"
                  size="24px"
                />
              </Box>
            </MotiView>
          </Pressable>
        </HStack>

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

        <VStack mx={wp(5.4)} mt={hp('1.6%')}>
          <IconButton height={hp(8.4)}>
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
          <IconButton height={hp(8.4)}>
            <Icon as={<Feather name="file-text" />} size={6} color="gray.400" />
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
