import { VStack, Text, Box } from 'native-base';

import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { Button } from '@components/Button';
import { useModal } from '@hooks/useModal';
import { currentDayIsWeekend } from '@utils/functions';

export const RegisterButtons = () => {
  const { setTitle, setShowModal, setModalStatus } = useModal();
  const isRegistered = true;
  return (
    <VStack mt="8px" p="20px" space="3" bg="white" borderRadius={8}>
      {!isRegistered ? (
        <Button
          h={hp(6.2)}
          bg="primary.600"
          color="primary.100"
          // disabled={currentDayIsWeekend()}
          onPress={() => {
            setTitle('Iniciar expediente');
            setShowModal(true);
            setModalStatus(0);
          }}
        >
          Iniciar expediente
        </Button>
      ) : (
        <Box
          flexDirection="row"
          alignItems="center"
          justifyItems="center"
          pb={hp(0.7)}
          borderBottomWidth={1}
          borderStyle="dashed"
          borderBottomColor="gray.200"
        >
          <Text
            fontFamily="body"
            fontWeight="300"
            fontSize="lg"
            lineHeight={hp(3.6)}
            color="secondary.400"
          >
            Entrada
          </Text>
          <Box flexGrow={1} />
          <Text
            fontFamily="body"
            fontWeight="bold"
            fontSize="lg"
            lineHeight={hp(3.6)}
            color="black"
          >
            22:58
          </Text>
        </Box>
      )}
      <Button
        h={hp(6.2)}
        bg="blue.50"
        bgPressed="info.500"
        color="blue.200"
        disabled={currentDayIsWeekend()}
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
        bg="yellow.50"
        bgPressed="yellow.600"
        color="yellow.200"
        disabled={currentDayIsWeekend()}
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
        bg="red.50"
        color="red.200"
        disabled={currentDayIsWeekend()}
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
