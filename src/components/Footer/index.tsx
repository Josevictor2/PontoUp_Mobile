import { VStack, Text } from "native-base";
import packageJson from "../../../package.json";
import Animated, { ZoomIn } from "react-native-reanimated";

export const Footer = () => {

    return(
        <Animated.View entering={ZoomIn.duration(1000)}>
            <VStack w="100%" mb={4}>
                <Text fontFamily="body" fontSize="xs">{`Ponto Up | Todos os direitos reservados. Versão: ${packageJson.version} `}</Text>
            </VStack>
        </Animated.View>
    )
}