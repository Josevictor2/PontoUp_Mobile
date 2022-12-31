import { FormJustify } from '@components/ActionSheet';
import { Header } from '@components/Header';
import { IconButton } from '@components/IconButton';
import { ModalComponent } from '@components/Modal';
import { RegisterButtons } from '@components/RegisterPoints';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { useMotiScale } from '@hooks/useMotiScale';
import { useNavigation } from '@react-navigation/native';
import { useFontSize } from '@theme/responsiveFontSize';
import { MotiView } from 'moti';
import { HStack, VStack, Text, Box, Icon, useDisclose } from 'native-base';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const HomeScreen = () => {
  const { onOpen, isOpen, onClose } = useDisclose();
  const navigation = useNavigation();
  const { FontSize } = useFontSize();

  const { handleToogle, toogleAnimation } = useMotiScale({ scale: 1.1 });
  const { handleToogle: handleToogle2, toogleAnimation: toogleAnimation2 } =
    useMotiScale({ scale: 1.1 });
  return (
    <VStack flex={1} safeArea>
      <VStack bg="white" flex={1}>
        <Header />
        <HStack
          px={wp('6.1%')}
          flex={1}
          alignItems="center"
          justifyContent="center"
        >
          <VStack space={1}>
            <Text
              fontFamily="body"
              fontWeight="300"
              fontSize={FontSize(14)}
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
          <Box flexGrow={1} />
          <VStack space={1}>
            <Text
              fontFamily="body"
              fontWeight="400"
              color="gray.300"
              fontSize={FontSize(10)}
              lineHeight={hp(1.8)}
            >
              Horas trabalhadas
            </Text>
            <Text
              fontFamily="body"
              fontWeight="400"
              fontSize={FontSize(12)}
              color="secondary.400"
              lineHeight={hp(2.1)}
            >
              00:00
            </Text>
          </VStack>
        </HStack>
      </VStack>
      <VStack px={wp(6.4)} bg="gray.50" w="100%" flex={5}>
        <HStack mt={hp(4.2)} justifyItems="center" alignItems="center">
          <Text
            fontFamily="body"
            fontWeight="300"
            fontSize="xl"
            lineHeight={hp(3.6)}
            color="secondary.400"
          >
            Registrar Ponto
          </Text>
          <Box flexGrow={1} />
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
        <VStack mt={hp(1.9)}>
          <MotiView state={toogleAnimation}>
            <IconButton
              onPressIn={handleToogle}
              onPressOut={handleToogle}
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
                fontSize={FontSize(14)}
              >
                Visualizar Frequência
              </Text>
              <Box flexGrow={1} />
              <Icon
                as={Feather}
                name="chevron-right"
                size="sm"
                color="gray.100"
              />
            </IconButton>
          </MotiView>
          <MotiView state={toogleAnimation2}>
            <IconButton
              onPressIn={handleToogle2}
              onPressOut={handleToogle2}
              height={hp(8.4)}
              onPress={onOpen}
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
                fontSize={FontSize(14)}
              >
                Justificar falta
              </Text>
              <Box flexGrow={1} />
              <Icon
                as={Feather}
                ml="auto"
                name="chevron-right"
                size="sm"
                color="gray.100"
              />
            </IconButton>
          </MotiView>
        </VStack>
        <FormJustify isOpen={isOpen} onClose={onClose} />
      </VStack>
      <ModalComponent />
    </VStack>
  );
};
