import { zodResolver } from '@hookform/resolvers/zod';
import { useAuth } from '@hooks/useAuth';
import { useKeyboard } from '@hooks/useKeyboard';
import { useFontSize } from '@theme/responsiveFontSize';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { PlatformType, LoginType, Schema } from './schema';
import { api } from '@services/axios';
import { useMutation } from 'react-query';
import axios from 'axios';

type userType = Record<'id' | 'name' | 'idDepartment', string>;

export const useLogin = () => {
  const { setAuth } = useAuth();
  const [show, setShow] = useState(false);
  const [textError, setTextError] = useState('');

  const { PressedKey: isKeyboardOpen } = useKeyboard();
  const { FontSize } = useFontSize();

  const platform: PlatformType = Platform.OS === 'ios' ? 'padding' : 'height';

  const marginTop = isKeyboardOpen ? hp(5) : hp(13);

  const PostAuth = async (data: LoginType) => {
    const response = await api.post(
      '/auth/login/',
      {
        username: data.password,
        password: data.password,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    return response.data;
  };

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginType>({
    resolver: zodResolver(Schema),
  });

  const { mutate, isLoading, isError } = useMutation(PostAuth, {
    onSuccess: (data: userType) => {
      setAuth({
        id: data.id,
        name: data.name,
        idDepartment: data.idDepartment,
      });
      AsyncStorage.setItem('@auth', JSON.stringify(data));
    },
    onError: (error) => {
      if (axios.isAxiosError(error)) {
        switch (error.response?.status) {
          case 400:
            setTextError('Matrícula Inválida');
            break;
          case 401:
            setTextError('Acesso não permitido');
            break;
          default:
            setTextError('Falha ao tentar autenticar.');
            break;
        }
      } else {
        setTextError('Sem resposta do servidor');
      }
      reset();
    },
  });

  const SubmitLogin = async (data: LoginType) => {
    mutate(data);
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
    isError,
    hp,
    wp,
    textError,
  };
};
