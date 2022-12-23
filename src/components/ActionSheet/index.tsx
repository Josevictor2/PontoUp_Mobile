import { Feather, MaterialIcons } from "@expo/vector-icons";
import { yupResolver } from "@hookform/resolvers/yup";
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
    VStack 
} from "native-base";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';

import { ActionSchema } from "./shema";
import { ActionProps } from "./types";
import { IconButton } from "../IconButton";
import { Platform } from "react-native";
import Animated from "react-native-reanimated";
import { useKeyboard } from "../../hooks/useKeyboard";
import { useAnimattion } from "../../hooks/useAnimation";

export const FormJustify = ({onClose, isOpen ,...props}: IActionsheetProps) => {

    const [show, setShow] = useState(false);
    const [date, setDate] = useState(new Date());
    const [showEnd, setShowEnd] = useState(false);
    const [dateEnd, setDateEnd] = useState(new Date());

    const [textAreaValue, setTextAreaValue] = useState("");
    
    const platform = Platform.OS === "ios" ? "padding" : "height";
    
    const {animatedStyle, pressed} = useAnimattion();
    const { PressedKey } = useKeyboard();

    const onDateSelect = (event: DateTimePickerEvent, date?: Date ) =>{
        setShow(false);
        setDate(date!);
    }

    const onDateSelectEnd = (event: DateTimePickerEvent, date?: Date ) =>{
        setShowEnd(false);
        setDateEnd(date!);
    }

    const { control, handleSubmit, formState: { errors } } = useForm<ActionProps>({
        resolver: yupResolver(ActionSchema),
        defaultValues: {
            initData: new Date(),
        }
    });

    const SubmitForm = (data: ActionProps) => {
        console.log(data.select, data.initData);
    };

    return (
        <KeyboardAvoidingView
        behavior={platform}
        flex={1}
        >
        <Actionsheet flex={1} {...props} isOpen={isOpen} onClose={onClose} hideDragIndicator>
            <Actionsheet.Content px={wp(5.3)} pt={hp(5)} alignItems="stretch" justifyItems="stretch" h={PressedKey ? hp(92) : hp(76)} bg="secondary.50">
                <HStack alignItems="center">
                        <Text fontSize="md" fontFamily="body" fontWeight="400">Justificativa para ocorrência</Text>
                        <Box flex={1} />
                        <Pressable
                        onPressIn={() => pressed.value =true}
                        onPressOut={() => pressed.value =false} 
                        onPress={onClose}>
                            <Animated.View style={animatedStyle}>
                                <Box borderRadius={4} borderWidth="1" p="8px" borderColor="text.100">
                                    <Icon as={<MaterialIcons name="close" />} size="24px" />                            
                                </Box>
                            </Animated.View>
                        </Pressable>
                    </HStack>
                <ScrollView flex={1}>
                <VStack mt={hp("3.8%")} space={2}>
                    <Controller
                    control={control}
                    name="select"
                    render={({ field: { onChange, onBlur, value } }) => (
                        <FormControl isInvalid={!!errors.select}>
                            <Select
                            borderColor="text.100"
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
                                bg: "secondary.50",
                            }}
                            _selectedItem={{
                                bg: "primary.900",
                                _text: {
                                    color: "text.100",
                                },
                            }}
                            _actionSheetContent={{
                                bg: "secondary.50",
                            }}
                            _actionSheetBody={{
                                bg: "secondary.50",
                            }}
                            >
                                <Select.Item _text={{
                                    color: "text.50",
                                }} 
                                label="Web Development" value="0" />
                                <Select.Item _text={{
                                    color: "text.50"
                                }} 
                                label="Cross Platform Development" value="1" />
                            </Select>
                            <FormControl.ErrorMessage>
                                {errors.select?.message}
                            </FormControl.ErrorMessage>
                        </FormControl>
                    )}
                    />

                    <IconButton height={hp(6.2)} onPress={() => setShow(true)}>
                        <Text ml={3.5} color="#44484D" h={6} mb={1} fontFamily="body" fontWeight="400" fontSize="md">Data Inicial</Text>
                        <Icon as={Feather} ml="auto" name="calendar" size="md" color="text.300" />
                    </IconButton>
                    {show && (
                        <DateTimePicker
                        value={date}
                        maximumDate={dateEnd}
                        mode="date"
                        display="default"
                        is24Hour={true}
                        onChange={onDateSelect}
                        />
                    )}

                    <IconButton height={hp(6.2)} onPress={() => setShowEnd(true)}>
                        <Text ml={3.5} color="#44484D" h={6} mb={1} fontFamily="body" fontWeight="400" fontSize="md">Data Final</Text>
                        <Icon as={Feather} ml="auto" name="calendar" size="md" color="text.300" />
                    </IconButton>
                    {showEnd && (
                        <DateTimePicker
                        minimumDate={date}
                        value={dateEnd}
                        mode="date"
                        display="default"
                        is24Hour={true}
                        onChange={onDateSelectEnd}
                        />
                    )}

                    <TextArea
                    autoCompleteType={"off"} 
                    value={textAreaValue}
                    onChangeText={text => setTextAreaValue(text)}  
                    />

                    <Text>{date.toDateString()}</Text>
                    <Button color="white" onPress={handleSubmit(SubmitForm)} children="Entrar na conta" mt={hp(4.2)} />
                </VStack>
                </ScrollView>
            </Actionsheet.Content>
        </Actionsheet>
    </KeyboardAvoidingView>
    )
}