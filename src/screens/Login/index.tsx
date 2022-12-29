import Animated, {
  BounceInLeft,
  BounceInRight,
  ZoomInLeft,
} from 'react-native-reanimated';

import {
  Box,
  Icon,
  Image,
  KeyboardAvoidingView,
  Pressable,
  ScrollView,
  Text,
  VStack,
} from 'native-base';

import { MaterialIcons } from '@expo/vector-icons';

import logo from '@assets/images/pontoUplogo.png';

import { Controller } from 'react-hook-form';

import { Input } from '@components/Input';
import { Button } from '@components/Button';
import { Footer } from '@components/Footer';

import { useLogin } from './useSignIn';
import { useMotiScale } from '@hooks/useMotiScale';
import { MotiView } from 'moti';

export function LoginScreen() {
  const {
    FontSize,
    SubmitLogin,
    control,
    errors,
    handleSubmit,
    hp,
    marginTop,
    platform,
    toogleShow,
    show,
    wp,
  } = useLogin();

  const { handleToogle, toogleAnimation } = useMotiScale({ scale: 1.1 });

  return (
    <VStack flex={1} width="100%" px={wp(6.4)} mt={hp(4.2)} safeArea>
      <KeyboardAvoidingView
        key={2}
        keyboardVerticalOffset={20}
        contentContainerStyle={{ flex: 1 }}
        behavior={platform}
        flex={1}
      >
        <Animated.View entering={BounceInRight.duration(1000)}>
          <Image
            width={wp('40%')}
            height={hp('8%')}
            resizeMode="contain"
            source={logo}
            alt="PontoUp"
          />
        </Animated.View>
        <ScrollView flex={1} automaticallyAdjustKeyboardInsets>
          <VStack
            borderRadius={8}
            borderWidth="1"
            borderColor="gray.50"
            w={wp('88%')}
            mt={marginTop}
            px={wp(8.5)}
            py={hp(4.2)}
          >
            <Animated.Text entering={ZoomInLeft.duration(1100)}>
              <Text
                fontFamily="body"
                fontWeight="400"
                color="primary.100"
                lineHeight={hp(4.7)}
                fontSize={FontSize(24)}
                mb={2}
              >
                Fazer Login
              </Text>
            </Animated.Text>
            <Animated.Text entering={ZoomInLeft.duration(1200)}>
              <Text
                fontFamily="body"
                fontWeight="300"
                color="gray.300"
                lineHeight={hp(2.7)}
                fontSize={FontSize(14)}
              >
                Seja bem-vindo(a)! Insira sua matrícula para entrar na conta.
              </Text>
            </Animated.Text>

            <VStack mt={hp('7.29%')} space={3}>
              <Controller
                control={control}
                name="password"
                render={({ field: { onChange } }) => (
                  <Animated.View entering={BounceInLeft.duration(1200)}>
                    <Input
                      keyboardType="numeric"
                      type={show ? 'text' : 'password'}
                      placeholder="Matrícula"
                      errorMessage={errors.password?.message}
                      onChangeText={onChange}
                      InputRightElement={
                        <Pressable onPress={toogleShow}>
                          <Icon
                            as={
                              <MaterialIcons
                                name={show ? 'visibility' : 'visibility-off'}
                              />
                            }
                            size={6}
                            mr={3}
                          />
                        </Pressable>
                      }
                    />
                  </Animated.View>
                )}
              />
              <Animated.View entering={BounceInRight.duration(1200)}>
                <MotiView state={toogleAnimation}>
                  <Button
                    color="white"
                    bgPressed="green.900"
                    onPress={handleSubmit(SubmitLogin)}
                    mt={hp(4.2)}
                    onPressIn={handleToogle}
                    onPressOut={handleToogle}
                  >
                    Entrar na conta
                  </Button>
                </MotiView>
              </Animated.View>
            </VStack>
          </VStack>
          <Box flexGrow={1} />
        </ScrollView>
      </KeyboardAvoidingView>
      <Footer />
    </VStack>
  );
}
