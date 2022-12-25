import Animated, { ZoomIn } from 'react-native-reanimated';
import { Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { DrawerActions } from '@react-navigation/native';

import {
  VStack,
  Text,
  HStack,
  Image,
  Icon,
  Box,
  ScrollView,
  useDisclose,
  StatusBar,
} from 'native-base';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import logo from '@assets/images/pontoUplogo.png';

import {
  MaterialIcons,
  Feather,
  MaterialCommunityIcons,
} from '@expo/vector-icons';
import { IconButton } from '@components/IconButton';
import { FormJustify } from '@components/ActionSheet';
import { ModalComponent } from '@components/Modal';
import { RegisterButtons } from '@components/RegisterPoints';
import { useAnimattion } from '@hooks/useAnimation';
import { useAnimattion as useButton } from '@hooks/useAnimation';

export const HomeScreen = () => {
  const { onOpen, isOpen, onClose } = useDisclose();
  const navigation = useNavigation();

  const { pressed, animatedStyle } = useAnimattion();
  const { pressed: pressedButton, animatedStyle: animatedStyleButton } =
    useButton({ valueScale: 1.1 });
  const { pressed: pressedButton2, animatedStyle: animatedStyleButton2 } =
    useButton({ valueScale: 1.1 });

  return (
    <ScrollView bg="gray.50" flex={1}>
      <StatusBar
        barStyle={'dark-content'}
        translucent
        backgroundColor="white"
      />
      <VStack width="100%" safeArea>
        <VStack bg="white">
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
                <Box
                  borderRadius={4}
                  borderWidth="1"
                  p="8px"
                  borderColor="gray.50"
                >
                  <Icon as={<MaterialIcons name="menu" />} size="24px" />
                </Box>
              </Animated.View>
            </Pressable>
          </HStack>
          <HStack
            mt={hp(3.6)}
            mb={hp(2.1)}
            px={wp('6.1%')}
            alignItems="center"
            justifyContent="space-between"
          >
            <VStack space={1}>
              <Text
                fontFamily="body"
                fontWeight="300"
                fontSize="md"
                color="secondary.500"
                lineHeight={hp(2.9)}
              >
                Olá,{' '}
                <Text fontWeight="400" bold>
                  Victor Gomes
                </Text>
              </Text>
              <Text
                fontFamily="body"
                fontWeight="300"
                color="gray.300"
                fontSize="xs"
                lineHeight={hp(2.2)}
              >
                Matrícula:{' '}
                <Text bold fontWeight="400" color="secondary.500">
                  123456
                </Text>
              </Text>
            </VStack>
            <VStack space={1}>
              <Text
                fontFamily="body"
                fontWeight="400"
                color="gray.300"
                fontSize="2xs"
                lineHeight={hp(1.8)}
              >
                Horas trabalhadas
              </Text>
              <Text
                fontFamily="body"
                fontWeight="400"
                fontSize="xs"
                color="secondary.400"
                lineHeight={hp(2.1)}
              >
                00:00
              </Text>
            </VStack>
          </HStack>
        </VStack>

        <VStack px={wp(6.4)}>
          <HStack
            alignItems="center"
            mt={hp(4.2)}
            width="100%"
            justifyContent="space-between"
          >
            <Text
              fontFamily="body"
              fontWeight="300"
              fontSize="xl"
              lineHeight={hp(3.6)}
              color="secondary.400"
            >
              Registrar Ponto
            </Text>
            <Text
              fontFamily="body"
              fontWeight="400"
              fontSize="xs"
              lineHeight={hp(2.2)}
              color="gray.400"
            >
              12/11/2022 às 21:07 min
            </Text>
          </HStack>

          <RegisterButtons />

          <VStack mt={hp(2.9)} space={hp(1.2)}>
            <Animated.View style={animatedStyleButton}>
              <IconButton
                onPressIn={() => (pressedButton.value = true)}
                onPressOut={() => (pressedButton.value = false)}
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
                  fontSize="md"
                >
                  Visualizar Frequência
                </Text>
                <Icon
                  as={Feather}
                  ml="auto"
                  name="chevron-right"
                  size="sm"
                  color="gray.100"
                />
              </IconButton>
            </Animated.View>
            <Animated.View style={animatedStyleButton2}>
              <IconButton
                onPressIn={() => (pressedButton2.value = true)}
                onPressOut={() => (pressedButton2.value = false)}
                height={hp(8.4)}
                onPress={onOpen}
                mb="10px"
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
                  fontSize="md"
                >
                  Justificar falta
                </Text>
                <Icon
                  as={Feather}
                  ml="auto"
                  name="chevron-right"
                  size="sm"
                  color="gray.100"
                />
              </IconButton>
            </Animated.View>
          </VStack>
          <FormJustify isOpen={isOpen} onClose={onClose} />
        </VStack>
      </VStack>
      <ModalComponent />
    </ScrollView>
  );
};
