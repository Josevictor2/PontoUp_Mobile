import { useState } from 'react';

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

import { Platform } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import { MaterialIcons } from '@expo/vector-icons';

import logo from '@assets/images/pontoUplogo.png';

import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Input } from '@components/Input';
import { Button } from '@components/Button';
import { Footer } from '@components/Footer';

import { useAuth } from '@hooks/useAuth';
import { useKeyboard } from '@hooks/useKeyboard';

import { LoginProps } from './types';
import { LoginSchema } from './schema';

export function LoginScreen() {
  const { signIn } = useAuth();
  const [show, setShow] = useState(false);
  const { PressedKey: isKeyboardOpen } = useKeyboard();

  const platform = Platform.OS === 'ios' ? 'padding' : 'height';

  const marginTop = isKeyboardOpen ? hp(5) : hp(13);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginProps>({
    resolver: yupResolver(LoginSchema),
  });

  const SubmitLogin = (data: LoginProps) => {
    signIn(data.password);
  };

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
                fontSize="2xl"
                mb={2}
              >
                Fazer Login
              </Text>
            </Animated.Text>
            <Animated.Text entering={ZoomInLeft.duration(1200)}>
              <Text
                w={wp('75%')}
                fontFamily="body"
                fontWeight="300"
                color="gray.300"
                lineHeight={hp(2.7)}
                fontSize="sm"
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
                        <Pressable onPress={() => setShow(!show)}>
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
                <Button
                  color="white"
                  onPress={handleSubmit(SubmitLogin)}
                  mt={hp(4.2)}
                >
                  Entrar na conta
                </Button>
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
