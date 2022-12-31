import { Feather } from '@expo/vector-icons';
import { AnimatePresence, MotiView } from 'moti';
import { Box, HStack, Text, VStack } from 'native-base';
import { useMemo, useState } from 'react';
import { LayoutChangeEvent, Pressable } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

type ItemProps = {
  title: string;
  name: string;
  date: string;
};

export const ItemRender = ({ name, title }: ItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [bodySectionHeight, setBodySectionHeight] = useState<number>(0);

  const onLayout = useMemo(
    () => (e: LayoutChangeEvent) => {
      setBodySectionHeight(e.nativeEvent.layout.height);
    },
    [],
  );

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

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
        <Text>{title}</Text>
        <Box flexGrow={1} />
        <Text>{name}</Text>
        <Box flexGrow={1} />
        <Pressable onPress={handleOpen}>
          <MotiView
            from={{
              rotate: '0deg',
            }}
            animate={{
              rotate: isOpen ? '90deg' : '0deg',
            }}
            transition={{
              type: 'timing',
              duration: 300,
            }}
          >
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
          </MotiView>
        </Pressable>
      </HStack>
      <AnimatePresence>
        {isOpen ? (
          <MotiView
            from={{
              height: 0,
            }}
            animate={{
              height: isOpen ? bodySectionHeight : 0,
            }}
            transition={{
              type: 'timing',
              duration: 400,
            }}
            exit={{
              height: 0,
            }}
          >
            <VStack onLayout={onLayout} h={hp(41.8)} mt="14px" px={wp(3.2)}>
              <Text>Teste</Text>
              <Text>Teste</Text>
            </VStack>
          </MotiView>
        ) : null}
      </AnimatePresence>
    </VStack>
  );
};
