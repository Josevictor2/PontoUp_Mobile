import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

import { Platform } from 'react-native';
import Animated from 'react-native-reanimated';

import { Feather, MaterialIcons } from '@expo/vector-icons';
import { yupResolver } from '@hookform/resolvers/yup';

import {
  Actionsheet,
  Box,
  Button,
  FormControl,
  HStack,
  IActionsheetProps,
  Icon,
  KeyboardAvoidingView,
  Pressable,
  ScrollView,
  Select,
  Text,
  TextArea,
  VStack,
} from 'native-base';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import DateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';

import { ActionSchema } from './shema';
import { ActionProps } from './types';
import { IconButton } from '../IconButton';
import { useAnimattion } from '@hooks/useAnimation';
import { useKeyboard } from '@hooks/useKeyboard';

export const FormJustify = ({
  onClose,
  isOpen,
  ...props
}: IActionsheetProps) => {
  const [show, setShow] = useState(false);
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [textAreaValue, setTextAreaValue] = useState('');

  const platform = Platform.OS === 'ios' ? 'padding' : 'height';

  const { animatedStyle, pressed } = useAnimattion();
  const { PressedKey } = useKeyboard();

  const onDateSelect = (
    event: DateTimePickerEvent,
    dateInicio?: Date | undefined,
  ) => {
    setShow(false);
    setDate(dateInicio);
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ActionProps>({
    resolver: yupResolver(ActionSchema),
    defaultValues: {
      initData: new Date(),
    },
  });

  const SubmitForm = (data: ActionProps) => {
    console.log(data.select, data.initData);
  };

  return (
    <KeyboardAvoidingView behavior={platform} flex={1}>
      <Actionsheet
        flex={1}
        {...props}
        isOpen={isOpen}
        onClose={onClose}
        hideDragIndicator
      >
        <Actionsheet.Content
          px={wp(5.3)}
          pt={hp(5)}
          alignItems="stretch"
          justifyItems="stretch"
          h={PressedKey ? hp(92) : hp(76)}
          bg="white"
        >
          <HStack alignItems="center">
            <Text
              color="secondary.50"
              fontSize="md"
              fontFamily="body"
              fontWeight="400"
            >
              Justificativa para ocorrência
            </Text>
            <Box flex={1} />
            <Pressable
              onPressIn={() => (pressed.value = true)}
              onPressOut={() => (pressed.value = false)}
              onPress={onClose}
            >
              <Animated.View style={animatedStyle}>
                <Box
                  borderRadius={4}
                  borderWidth="1"
                  p="8px"
                  borderColor="gray.50"
                >
                  <Icon
                    as={<MaterialIcons name="close" />}
                    color="gray.400"
                    size="24px"
                  />
                </Box>
              </Animated.View>
            </Pressable>
          </HStack>
          <ScrollView flex={1}>
            <VStack mt={hp('3.8%')} space={2}>
              <Controller
                control={control}
                name="select"
                render={({ field: { onChange, value } }) => (
                  <FormControl isInvalid={!!errors.select}>
                    <Select
                      borderColor="gray.50"
                      borderRadius={8}
                      height={hp(6.2)}
                      fontFamily="body"
                      fontWeight="300"
                      fontSize="md"
                      onValueChange={onChange}
                      placeholder="Selecione uma opção"
                      selectedValue={value}
                      accessibilityLabel="seletor de ocorrências"
                      _item={{
                        bg: 'white',
                      }}
                      _selectedItem={{
                        bg: 'primary.100',
                        _text: {
                          color: 'gray.50',
                        },
                      }}
                      _actionSheetContent={{
                        bg: 'white',
                      }}
                      _actionSheetBody={{
                        bg: 'white',
                      }}
                    >
                      <Select.Item
                        _text={{
                          color: 'gray.300',
                        }}
                        label="Web Development"
                        value="0"
                      />
                      <Select.Item
                        _text={{
                          color: 'gray.300',
                        }}
                        label="Cross Platform Development"
                        value="1"
                      />
                    </Select>
                    <FormControl.ErrorMessage>
                      {errors.select?.message}
                    </FormControl.ErrorMessage>
                  </FormControl>
                )}
              />

              <IconButton height={hp(6.2)} onPress={() => setShow(true)}>
                <Text
                  ml={3.5}
                  color="gray.300"
                  h={6}
                  mb={1}
                  fontFamily="body"
                  fontWeight="400"
                  fontSize="md"
                >
                  {' '}
                  Data Inicial
                </Text>
                <Icon
                  as={Feather}
                  ml="auto"
                  name="calendar"
                  size="md"
                  color="text.300"
                />
              </IconButton>
              {show && (
                <DateTimePicker
                  value={date || new Date()}
                  //maximumDate={dateEnd}
                  mode="date"
                  display="default"
                  is24Hour={true}
                  onChange={onDateSelect}
                />
              )}
              <TextArea
                autoCompleteType={'off'}
                value={textAreaValue}
                onChangeText={(text) => setTextAreaValue(text)}
              />

              <Text>{date?.toDateString()}</Text>
              <Button
                color="white"
                onPress={handleSubmit(SubmitForm)}
                mt={hp(4.2)}
              >
                Entrar na conta
              </Button>
            </VStack>
          </ScrollView>
        </Actionsheet.Content>
      </Actionsheet>
    </KeyboardAvoidingView>
  );
};
