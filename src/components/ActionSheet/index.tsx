import { Controller } from 'react-hook-form';

import { Platform } from 'react-native';

import { Feather, MaterialIcons } from '@expo/vector-icons';

import DateTimePicker from '@react-native-community/datetimepicker';

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

import { IconButton } from '../IconButton';
import { MotiView } from 'moti';
import { useKeyboard } from '@hooks/useKeyboard';
import { useFontSize } from '@theme/responsiveFontSize';
import { useMotiScale } from '@hooks/useMotiScale';
import { format } from 'date-fns';
import { useJustify } from './useJustify';
import React from 'react';

export const FormJustify = ({
  onClose,
  isOpen,
  ...props
}: IActionsheetProps) => {
  const platform = Platform.OS === 'ios' ? 'padding' : 'height';

  const { handleToogle, toogleAnimation } = useMotiScale({ scale: 1.3 });
  const { PressedKey } = useKeyboard();
  const { FontSize } = useFontSize();

  const {
    show,
    handledShow,
    SubmitForm,
    control,
    date,
    errors,
    handleSubmit,
    onDateSelect,
    dateEnd,
    handledShowEnd,
    onDateSelectEnd,
    showEnd,
    pickDocument,
  } = useJustify();

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
              fontSize={FontSize(16)}
              fontFamily="body"
              fontWeight="400"
            >
              Justificativa para ocorrência
            </Text>
            <Box flex={1} />
            <Pressable
              onPressIn={handleToogle}
              onPressOut={handleToogle}
              onPress={onClose}
            >
              <MotiView state={toogleAnimation}>
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
              </MotiView>
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
                      fontSize={FontSize(16)}
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
              <HStack justifyContent="center" alignItems="center">
                <VStack>
                  <FormControl isInvalid={!!errors.startDate}>
                    <IconButton
                      height={hp(6.2)}
                      w={wp(43)}
                      onPress={handledShow}
                    >
                      <Text
                        color="gray.300"
                        h={6}
                        mb={1}
                        fontFamily="body"
                        fontWeight="400"
                        fontSize={FontSize(16)}
                      >
                        {date !== undefined
                          ? format(date, 'dd/MM/yyyy')
                          : 'Data Inicial'}
                      </Text>
                      <Icon
                        as={Feather}
                        ml="auto"
                        name="calendar"
                        size="md"
                        color="text.300"
                      />
                    </IconButton>
                    <FormControl.ErrorMessage>
                      {errors.startDate?.message}
                    </FormControl.ErrorMessage>
                  </FormControl>
                </VStack>

                <Box flexGrow={1} />

                <VStack>
                  <FormControl isInvalid={!!errors.endDate}>
                    <IconButton
                      height={hp(6.2)}
                      w={wp(43)}
                      onPress={handledShowEnd}
                    >
                      <Text
                        color="gray.300"
                        h={6}
                        mb={1}
                        fontFamily="body"
                        fontWeight="400"
                        fontSize={FontSize(16)}
                      >
                        {dateEnd !== undefined
                          ? format(dateEnd, 'dd/MM/yyyy')
                          : 'Data Final'}
                      </Text>
                      <Icon
                        as={Feather}
                        ml="auto"
                        name="calendar"
                        size="md"
                        color="text.300"
                      />
                    </IconButton>
                    <FormControl.ErrorMessage>
                      {errors.endDate?.message}
                    </FormControl.ErrorMessage>
                  </FormControl>
                </VStack>
              </HStack>
              {show && (
                <DateTimePicker
                  value={date || new Date()}
                  minimumDate={new Date(2021)}
                  maximumDate={dateEnd}
                  mode="date"
                  display="default"
                  is24Hour={true}
                  onChange={onDateSelect}
                />
              )}
              {showEnd && (
                <DateTimePicker
                  value={dateEnd || new Date()}
                  minimumDate={date}
                  mode="date"
                  display="default"
                  is24Hour={true}
                  onChange={onDateSelectEnd}
                />
              )}
              <Controller
                control={control}
                name="description"
                defaultValue=""
                render={({ field: { onChange, value } }) => (
                  <TextArea
                    mt="2"
                    borderColor="gray.50"
                    autoCompleteType="off"
                    isInvalid={Boolean(errors.description)}
                    _invalid={{ borderColor: 'red.800' }}
                    onChangeText={onChange}
                    value={value}
                    placeholder="Digite uma descrição..."
                  />
                )}
              />
              {errors.description && (
                <Text color="red.500" fontSize="xs">
                  {errors.description.message}
                </Text>
              )}

              <Button
                mt="2"
                _text={{ color: 'green.800' }}
                _pressed={{ color: 'white', bg: 'gray.600' }}
                bg="white"
                borderWidth={1}
                borderStyle="dashed"
                borderColor="green.800"
                onPress={pickDocument}
              >
                Selecione um arquivo
              </Button>

              <Button
                _text={{ color: 'white' }}
                bg="green.700"
                onPress={handleSubmit(SubmitForm)}
                mt={hp(4.2)}
                disabled={date === undefined}
              >
                Enviar ocorrência
              </Button>
            </VStack>
          </ScrollView>
        </Actionsheet.Content>
      </Actionsheet>
    </KeyboardAvoidingView>
  );
};
