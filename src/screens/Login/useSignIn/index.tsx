import { yupResolver } from '@hookform/resolvers/yup';
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
import { LoginSchema } from '../schema';
import { LoginProps } from '../types';

type Props = 'height' | 'position' | 'padding' | undefined;

export const useLogin = () => {
  const { signIn } = useAuth();
  const [show, setShow] = useState(false);
  const { PressedKey: isKeyboardOpen } = useKeyboard();
  const { FontSize } = useFontSize();

  const toogleShow = () => {
    setShow(!show);
  };

  const platform: Props = Platform.OS === 'ios' ? 'padding' : 'height';

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

  return {
    control,
    errors,
    show,
    toogleShow,
    platform,
    marginTop,
    FontSize,
    handleSubmit,
    SubmitLogin,
    hp,
    wp,
  };
};
