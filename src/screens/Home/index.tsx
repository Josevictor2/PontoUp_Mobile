import { VStack, Text, HStack, Image, Icon, Box, ScrollView, useDisclose } from "native-base"
import { Button } from "../../components/Button";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import logo from "../../assets/images/pontoUplogo.png";

import { MaterialIcons, Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { DrawerActions } from '@react-navigation/native';
import { IconButton } from "../../components/IconButton";
import { FormJustify } from "../../components/ActionSheet";

export const HomeScreen = () => {

    const {onOpen, isOpen, onClose} = useDisclose();
    const navigation = useNavigation();
    
    return (    
        <ScrollView bg="#EBEEF2" flex={1}>
            <VStack width="100%" safeArea>
                <VStack bg="#ffffff" >
                    <HStack mt={hp("2.6%")} px={wp("6.1%")} alignItems="center" justifyContent="space-between">
                        <Image width={wp("22.4%")} height={hp("4.2%")} resizeMode="contain" source={logo} alt="PontoUp" />
                        <Pressable onPress={()=> navigation.dispatch(DrawerActions.openDrawer())}>
                            <Box borderRadius={4} borderWidth="1" p="8px" borderColor="text.100">
                                <Icon as={<MaterialIcons name="menu" />} size="24px" />
                            </Box>
                        </Pressable>
                    </HStack>
                    <HStack mt={hp(3.6)} mb={hp(2.1)} px={wp("6.1%")} alignItems="center" justifyContent="space-between">
                        <VStack space={1}>
                            <Text fontFamily="body" fontWeight="300" fontSize="md" color="text.200" lineHeight={hp(2.9)}>
                                Olá, <Text fontWeight="400" bold>Victor Gomes</Text>
                            </Text> 
                            <Text fontFamily="body" fontWeight="300" fontSize="xs" lineHeight={hp(2.2)}>
                                Matrícula: <Text bold fontWeight="400" color="text.200">123456</Text>
                            </Text>
                        </VStack>
                        <VStack space={1}>
                            <Text fontFamily="body" fontWeight="400" fontSize="2xs" lineHeight={hp(1.8)}>Horas trabalhadas</Text>
                            <Text fontFamily="body" fontWeight="400" fontSize="xs" bold lineHeight={hp(2.1)}>00:00</Text>
                        </VStack>
                    </HStack>
                </VStack>

                <VStack px={wp(6.4)}>
                <HStack alignItems="center" mt={hp(4.2)} width="100%" justifyContent="space-between">
                        <Text fontFamily="body" fontWeight="300" fontSize="xl" lineHeight={hp(3.6)} bold>
                            Registrar Ponto
                        </Text>
                        <Text fontFamily="body" fontWeight="400" fontSize="xs" lineHeight={hp(2.2)}>
                            12/11/2022 às 21:07 min
                        </Text>
                    </HStack>
                    <VStack mt="8px" p="20px" space={hp(1.2)} bg="secondary.50" borderRadius={8}>
                        <Button children="Iniciar expediente" h={hp(6.2)} bg="#30663C26" color="text.300"/>
                        <Button children="Pausa" h={hp(6.2)} bg="#3FA4EE26" bgPressed="info.500" color="#2D9DEF"/>
                        <Button children="Retorno" h={hp(6.2)} bg="#DF992F26" bgPressed="yellow.600" color="#DF992F"/>
                        <Button children="Finalizar expediente" h={hp(6.2)} bgPressed="red.500" bg="#D95D4226" color="#D95D42"/>
                    </VStack>
                    <VStack mt={hp(2.9)} space={hp(1.2)}>
                        <IconButton height={hp(8.4)} onPress={() => {navigation.navigate("Justification")}}>
                            <Icon as={<Feather name="eye" />} size={6} color="text.300" />
                            <Text ml={3.5} color="#44484D" h={6} mb={1} fontFamily="body" fontWeight="400" fontSize="md">Visualizar Frequência</Text>
                            <Icon as={Feather} ml="auto" name="chevron-right" size="sm" color="text.300" />
                        </IconButton>
                        <IconButton height={hp(8.4)} onPress={onOpen}>
                            <Icon as={<MaterialCommunityIcons name="calendar-clock-outline" />} size={6} color="text.300" />
                            <Text ml={3.5} color="#44484D" h={6} mb={1} fontFamily="body" fontWeight="400" fontSize="md">Justificar falta</Text>
                            <Icon as={Feather} ml="auto" name="chevron-right" size="sm" color="text.300" />
                        </IconButton>
                    </VStack>
                </VStack>
            </VStack>
            <FormJustify isOpen={isOpen} onClose={onClose} />
        </ScrollView>
    )
}