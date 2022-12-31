import { HStack, VStack, Text, Box, Pressable, FlatList } from 'native-base';
import { format } from 'date-fns';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import { Header } from '@components/Header';
import { useFontSize } from '@theme/responsiveFontSize';
import { ArrowLeft } from '@assets/Svg/arrowLeft';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { useSelectDate } from '@components/helpers/useSelectDate';
import { pt } from 'date-fns/locale';
import { ItemRender } from '@components/ItemRender';

const data = [
  {
    id: '1',
    title: 'First Item',
    name: 'João',
    date: '2021-07-01',
  },
  {
    id: '2',
    title: 'Second Item',
    name: 'João',
    date: '2021-07-02',
  },
  {
    id: '3',
    title: 'Third Item',
    name: 'João',
    date: '2021-07-03',
  },
];

const ItemSeparator = () => <Box w="100%" h={2} />;

export const ViewRegisterScreen = () => {
  const navigation = useNavigation();
  const { FontSize } = useFontSize();
  const { firstDayCurrentMonth, nextMonth, previusMonth } = useSelectDate();
  return (
    <VStack h="100%" flex={1} safeArea>
      <VStack bg="white" flex={1}>
        <Header />
        <HStack
          px={wp('6.1%')}
          flex={1}
          alignItems="center"
          justifyContent="center"
        >
          <Pressable
            _pressed={{
              opacity: 0.5,
              bg: 'gray.300',
              borderRadius: 20,
            }}
            onPress={() => navigation.goBack()}
          >
            <Box
              justifyContent="center"
              alignItems="center"
              width={25}
              height={25}
            >
              <ArrowLeft />
            </Box>
          </Pressable>
          <Box flexGrow={1} />
          <Text fontFamily="body" fontWeight="400" fontSize={FontSize(14)}>
            Visualizar frequência
          </Text>
          <Box flexGrow={1} />
        </HStack>
      </VStack>
      <VStack alignItems="center" justifyContent="center" bg="gray.50" flex={5}>
        <HStack
          flex={1}
          justifyContent="center"
          alignItems="center"
          w="100%"
          px={wp('6.1%')}
        >
          <Pressable
            _pressed={{
              opacity: 0.5,
              bg: 'gray.300',
              borderRadius: 15,
            }}
            onPress={previusMonth}
          >
            <Feather name="chevron-left" size={24} />
          </Pressable>
          <Box flexGrow={1} />
          <Text>
            {format(firstDayCurrentMonth, 'MMM, yyyy', { locale: pt })}
          </Text>
          <Box flexGrow={1} />
          <Pressable
            _pressed={{
              opacity: 0.5,
              bg: 'gray.300',
              borderRadius: 15,
            }}
            onPress={nextMonth}
          >
            <Feather name="chevron-right" size={24} />
          </Pressable>
        </HStack>
        <VStack flex={9} bg="white" w="100%">
          <FlatList
            mt={hp('1.6%')}
            ItemSeparatorComponent={ItemSeparator}
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <ItemRender
                date={item.date}
                name={item.name}
                title={item.title}
              />
            )}
          />
        </VStack>
      </VStack>
    </VStack>
  );
};
