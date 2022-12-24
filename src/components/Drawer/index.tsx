import React from "react";

import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from "@react-navigation/drawer";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import {
  HStack,
  Pressable,
  VStack,
  Image,
  Icon,
  Box,
  Text,
  useDisclose,
} from "native-base";
import {
  MaterialIcons,
  Feather,
  MaterialCommunityIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";

import logo from "../../assets/images/pontoUplogo.png";
import perfil from "../../assets/images/perfil.png";
import { useNavigation, DrawerActions } from "@react-navigation/native";
import { IconButton } from "../IconButton";
import { useAnimattion } from "../../hooks/useAnimation";
import Animated from "react-native-reanimated";
import { useAnimattion as useButton } from "../../hooks/useAnimation";
import { FormJustify } from "../ActionSheet";

export const CustomDrawer = (props: DrawerContentComponentProps) => {
  const navigation = useNavigation();
  const { animatedStyle, pressed } = useAnimattion();
  const { pressed: pressedButton, animatedStyle: animatedStyleButton } =
    useButton({ valueScale: 1.1 });
  const { pressed: pressedButton2, animatedStyle: animatedStyleButton2 } =
    useButton({ valueScale: 1.1 });
  const { isOpen, onClose, onOpen } = useDisclose();

  return (
    <VStack flex={1}>
      <DrawerContentScrollView {...props}>
        <HStack
          mt={hp("2.6%")}
          px={wp("5.4%")}
          alignItems="center"
          justifyContent="space-between"
        >
          <Image
            width={wp("22.4%")}
            height={hp("4.2%")}
            resizeMode="contain"
            source={logo}
            alt="PontoUp"
          />

          <Pressable
            onPressIn={() => (pressed.value = true)}
            onPressOut={() => (pressed.value = false)}
            onPress={() => navigation.dispatch(DrawerActions.closeDrawer())}
          >
            <Animated.View style={animatedStyle}>
              <Box
                borderRadius={4}
                borderWidth="1"
                p="8px"
                borderColor="text.100"
              >
                <Icon as={<MaterialIcons name="close" />} size="24px" />
              </Box>
            </Animated.View>
          </Pressable>
        </HStack>

        <HStack
          mx={wp(5.4)}
          mt={hp("4.7%")}
          px={wp(5.4)}
          py={hp(1.6)}
          space={wp(3.2)}
          alignItems="center"
          borderWidth={1}
          borderColor="#EBEEF2"
        >
          <Image
            width={wp("21.333%")}
            height={hp("10.41%")}
            resizeMode="contain"
            source={perfil}
            alt="Perfil"
          />
          <VStack>
            <Text
              mb={hp(1.6)}
              fontFamily="body"
              fontSize="sm"
              fontWeight="400"
              bold
            >
              Victor Gomes
            </Text>
            <Text color="text.50" fontWeight="300" fontSize="xs">
              Matricula: <Text bold>123456</Text>
            </Text>
          </VStack>
        </HStack>

        <VStack mx={wp(5.4)} mt={hp("1.6%")}>
          <IconButton height={hp(8.4)}>
            <Icon as={<Feather name="clock" />} size={6} color="text.300" />
            <VStack>
              <Text
                ml={3.5}
                color="#44484D"
                h={6}
                fontFamily="body"
                fontWeight="400"
                fontSize="sm"
              >
                Meus horários
              </Text>
              <Text ml={3.5} color="#767A80" fontSize="xs">
                Meus horários de entrada
              </Text>
            </VStack>
            <Icon
              as={Feather}
              ml="auto"
              name="chevron-right"
              size="sm"
              color="text.300"
            />
          </IconButton>
          <IconButton height={hp(8.4)}>
            <Icon as={<Feather name="file-text" />} size={6} color="text.300" />
            <VStack>
              <Text
                ml={3.5}
                color="#44484D"
                h={6}
                fontFamily="body"
                fontWeight="400"
                fontSize="sm"
              >
                Meus dados
              </Text>
              <Text ml={3.5} color="#767A80" fontSize="xs">
                Minhas informações da conta
              </Text>
            </VStack>
            <Icon
              as={Feather}
              ml="auto"
              name="chevron-right"
              size="sm"
              color="text.300"
            />
          </IconButton>
        </VStack>

        <VStack mx={wp(5.4)} mt={hp("1.6%")}>
          <Animated.View style={animatedStyleButton2}>
            <IconButton
              onPressIn={() => (pressedButton2.value = true)}
              onPressOut={() => (pressedButton2.value = false)}
              height={hp(8.4)}
              onPress={() => {
                onOpen();
                navigation.dispatch(DrawerActions.closeDrawer());
              }}
            >
              <Icon
                as={<MaterialCommunityIcons name="calendar-clock-outline" />}
                size={6}
                color="text.300"
              />
              <Text
                ml={3.5}
                color="#44484D"
                h={6}
                mb={1}
                fontFamily="body"
                fontWeight="400"
                fontSize="md"
              >
                Justificar falta
              </Text>
              <Icon
                as={Feather}
                ml="auto"
                name="chevron-right"
                size="sm"
                color="text.300"
              />
            </IconButton>
          </Animated.View>

          <Animated.View style={animatedStyleButton}>
            <IconButton
              onPressIn={() => (pressedButton.value = true)}
              onPressOut={() => (pressedButton.value = false)}
              height={hp(8.4)}
              onPress={() => {
                navigation.navigate("View");
              }}
            >
              <Icon as={<Feather name="eye" />} size={6} color="text.300" />
              <Text
                ml={3.5}
                color="#44484D"
                h={6}
                mb={1}
                fontFamily="body"
                fontWeight="400"
                fontSize="md"
              >
                Visualizar Frequência
              </Text>
              <Icon
                as={Feather}
                ml="auto"
                name="chevron-right"
                size="sm"
                color="text.300"
              />
            </IconButton>
          </Animated.View>

          <IconButton height={hp(8.4)}>
            <Icon
              as={<SimpleLineIcons name="logout" />}
              size={6}
              color="#EC3539"
            />
            <Text
              ml={3.5}
              color="#EC3539"
              h={6}
              mb={1}
              fontFamily="body"
              fontWeight="400"
              fontSize="md"
            >
              Sair do sistema
            </Text>
            <Icon
              as={Feather}
              ml="auto"
              name="chevron-right"
              size="sm"
              color="white"
            />
          </IconButton>
        </VStack>
        <FormJustify isOpen={isOpen} onClose={onClose} />
      </DrawerContentScrollView>
    </VStack>
  );
};
