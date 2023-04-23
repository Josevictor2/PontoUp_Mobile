import { CollapsedAnimation } from '@animations/Collapsed';
import { RotationAnimation } from '@animations/Rotation/Rotation';
import { SubTitle, Title } from '@components/ItemRender/TextSchedule';
import { Feather } from '@expo/vector-icons';
import { useFontSize } from '@theme/responsiveFontSize';
import { AnimatePresence } from 'moti';
import { VStack, HStack, Text, Box, View } from 'native-base';
import { FC, useMemo, useState } from 'react';
import { LayoutChangeEvent, Pressable } from 'react-native';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const ItemSeparator = () => (
  <View
    w="100%"
    borderColor="gray.50"
    borderWidth={0.9}
    h="0"
    borderStyle="dashed"
  />
);

type ItemType = Partial<
  Record<'day' | 'entrada' | 'intervalo' | 'retorno' | 'saida', string | null>
>;

export const ListSchedule: FC<ItemType> = ({
  day,
  entrada,
  intervalo,
  retorno,
  saida,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [layout, setLayout] = useState<number>(0);

  const { FontSize } = useFontSize();

  const onLayout = useMemo(
    () => (e: LayoutChangeEvent) => {
      setLayout(e.nativeEvent.layout.height);
    },
    [],
  );

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <VStack bg="white" borderColor="gray.50" borderWidth={1} borderRadius={10}>
      <HStack
        flex={1}
        alignItems="center"
        justifyContent="center"
        w="100%"
        h={hp(6.25)}
        px={wp(3.2)}
      >
        <Text
          color="#767A80"
          fontFamily="mono"
          fontWeight="300"
          fontSize={FontSize(10)}
          textTransform="capitalize"
        >
          {day}
        </Text>

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
              h={hp(34)}
              mt="14px"
              space={hp(1.3)}
              px={wp(3.2)}
            >
              <VStack>
                <Title>Horário de entrada</Title>
                <SubTitle>{entrada === null ? '--' : entrada}</SubTitle>
              </VStack>
              <ItemSeparator />
              <VStack>
                <Title>Horário de intervalo</Title>
                <SubTitle>{intervalo === null ? '--' : intervalo}</SubTitle>
              </VStack>
              <ItemSeparator />
              <VStack>
                <Title>Horário de retorno</Title>
                <SubTitle>{retorno === null ? '--' : retorno}</SubTitle>
              </VStack>
              <ItemSeparator />
              <VStack>
                <Title>Horário de saída</Title>
                <SubTitle>{saida === null ? '--' : saida}</SubTitle>
              </VStack>
            </VStack>
          </CollapsedAnimation>
        ) : null}
      </AnimatePresence>
    </VStack>
  );
};
