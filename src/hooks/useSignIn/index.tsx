import { zodResolver } from '@hookform/resolvers/zod';
import { useAuth } from '@hooks/useAuth';
import { useKeyboard } from '@hooks/useKeyboard';
import { useFontSize } from '@theme/responsiveFontSize';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Platform } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { PlatformType, LoginType, Schema } from './schema';

export const useLogin = () => {
  const { signIn } = useAuth();
  const [show, setShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { PressedKey: isKeyboardOpen } = useKeyboard();
  const { FontSize } = useFontSize();

  const platform: PlatformType = Platform.OS === 'ios' ? 'padding' : 'height';

  const marginTop = isKeyboardOpen ? hp(5) : hp(13);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginType>({
    resolver: zodResolver(Schema),
  });

  const SubmitLogin = (data: LoginType) => {
    setIsLoading(true);
    signIn(data.password);
  };

  return {
    control,
    errors,
    show,
    setShow,
    platform,
    marginTop,
    FontSize,
    handleSubmit,
    SubmitLogin,
    isLoading,
    hp,
    wp,
  };
};
