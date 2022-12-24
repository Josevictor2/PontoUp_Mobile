import { VStack } from 'native-base';

import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { Button } from '@components/Button';
import { useModal } from '@hooks/useModal';

export const RegisterButtons = () => {
  const { setTitle, setShowModal, setModalStatus } = useModal();

  return (
    <VStack
      mt="8px"
      p="20px"
      space={hp(1.2)}
      bg="secondary.50"
      borderRadius={8}
    >
      <Button
        h={hp(6.2)}
        bg="#30663C26"
        color="text.300"
        onPress={() => {
          setTitle('Iniciar expediente');
          setShowModal(true);
          setModalStatus(0);
        }}
      >
        Iniciar expediente
      </Button>
      <Button
        h={hp(6.2)}
        bg="#3FA4EE26"
        bgPressed="info.500"
        color="#2D9DEF"
        onPress={() => {
          setTitle('Registrar intervalo');
          setShowModal(true);
          setModalStatus(1);
        }}
      >
        Pausa
      </Button>

      <Button
        h={hp(6.2)}
        bg="#DF992F26"
        bgPressed="yellow.600"
        color="#DF992F"
        onPress={() => {
          setTitle('Registrar intervalo');
          setShowModal(true);
          setModalStatus(2);
        }}
      >
        Retorno
      </Button>

      <Button
        h={hp(6.2)}
        bgPressed="red.500"
        bg="#D95D4226"
        color="#D95D42"
        onPress={() => {
          setTitle('Finalizar expediente');
          setShowModal(true);
          setModalStatus(3);
        }}
      >
        Finalizar expediente
      </Button>
    </VStack>
  );
};
