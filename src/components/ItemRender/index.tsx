import { CollapsedAnimation } from '@animations/Collapsed';
import { RotationAnimation } from '@animations/Rotation/Rotation';
import { Feather } from '@expo/vector-icons';
import { useFontSize } from '@theme/responsiveFontSize';
import { AnimatePresence } from 'moti';
import { Box, HStack, Text, VStack } from 'native-base';
import { useMemo, useState } from 'react';
import { LayoutChangeEvent, Pressable } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { Chip } from './Chip';
import { SubTitle, Title } from './TextSchedule';
import { format } from 'date-fns';
import { pt } from 'date-fns/locale';

type ItemType = {
  data: Date;
  status: string;
  entrada: string | null;
  intervalo: string | null;
  retorno: string | null;
  saida: string | null;
  evento?: string | null;
};

export const ItemRender = ({
  data,
  entrada,
  intervalo,
  retorno,
  saida,
  status,
  evento,
}: ItemType) => {
  const [isOpen, setIsOpen] = useState(false);
  const [layout, setLayout] = useState<number>(0);

  const { FontSize } = useFontSize();

  const isPeding = useMemo(() => status === 'pendente', [status]);
  const isPresent = useMemo(() => status === 'concluido', [status]);
  const isDayOff = useMemo(() => status === 'folga', [status]);
  const isHoliday = useMemo(() => status === 'feriado', [status]);

  const onLayout = useMemo(
    () => (e: LayoutChangeEvent) => {
      setLayout(e.nativeEvent.layout.height);
    },
    [],
  );
  const formatdate = (date: Date) => {
    return format(date, 'dd/MM/yyyy', { locale: pt });
  };
  const formatday = (date: Date) => {
    return format(date, 'cccc', { locale: pt });
  };
  const handleOpen = () => setIsOpen(!isOpen);

  return (
    <VStack
      bg="white"
      borderColor="gray.50"
      borderWidth={1}
      borderRadius={10}
      mx={wp(6.1)}
    >
      <HStack
        flex={1}
        alignItems="center"
        justifyContent="center"
        w="100%"
        h={hp(6.25)}
        px={wp(3.2)}
      >
        <VStack>
          <Text
            fontFamily="mono"
            fontWeight="400"
            color="#212429"
            bold
            fontSize={FontSize(14)}
          >
            {formatdate(data)}
          </Text>
          <Text
            color="#767A80"
            fontFamily="mono"
            fontWeight="300"
            fontSize={FontSize(10)}
            textTransform="capitalize"
          >
            {formatday(data)}
          </Text>
        </VStack>
        <Box flexGrow={1} />
        {isPeding ? (
          <Chip
            color="#D3951A"
            bg="#D3951A1A"
            borderColor="rgba(211, 149, 26, 0.15)"
            status="Pendente"
          />
        ) : null}
        {isPresent ? (
          <Chip
            color="#30663C"
            bg="#30663C1A"
            borderColor="rgba(48, 102, 60, 0.15)"
            status="Concluído"
          />
        ) : null}
        {isDayOff ? (
          <Chip
            color="#0369a1"
            bg="#bae6fd"
            borderColor="#0ea5e9"
            status="Folga"
          />
        ) : null}
        {isHoliday ? (
          <Chip
            color="#800222"
            bg="#d8abab"
            borderColor="#b67180"
            status="Feriado"
          />
        ) : null}
        <Box flexGrow={1} />
        <Pressable onPress={handleOpen}>
          <RotationAnimation deg="90deg" isOpen={isOpen}>
            <Box
              justifyContent="center"
              alignItems="center"
              w="32px"
              h="32px"
              bg={isOpen ? 'gray.50' : 'white'}
              borderRadius={5}
            >
              <Feather name="chevron-right" size={24} color="black" />
            </Box>
          </RotationAnimation>
        </Pressable>
      </HStack>
      <AnimatePresence>
        {isOpen ? (
          <CollapsedAnimation isOpen={isOpen} layout={layout}>
            <VStack
              onLayout={onLayout}
              h={hp(40)}
              mt="14px"
              space={hp(2)}
              px={wp(3.2)}
            >
              <VStack>
                <Title>Horário de entrada</Title>
                <SubTitle>{entrada === null ? '--' : entrada}</SubTitle>
              </VStack>
              <VStack>
                <Title>Horário de intervalo - IDA</Title>
                <SubTitle>{intervalo === null ? '--' : intervalo}</SubTitle>
              </VStack>
              <VStack>
                <Title>Horário de retorno - VOLTA</Title>
                <SubTitle>{retorno === null ? '--' : retorno}</SubTitle>
              </VStack>
              <VStack>
                <Title>Horário de saída</Title>
                <SubTitle>{saida === null ? '--' : saida}</SubTitle>
              </VStack>
              <VStack>
                <Title>Evento</Title>
                <SubTitle>{evento === null ? '--' : evento}</SubTitle>
              </VStack>
            </VStack>
          </CollapsedAnimation>
        ) : null}
      </AnimatePresence>
    </VStack>
  );
};
