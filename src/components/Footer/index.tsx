import { VStack, Text } from "native-base";
import packageJson from "../../../package.json";

export const Footer = () => {

    return(
        <VStack w="100%" mb={4}>
            <Text fontFamily="body" fontSize="xs">{`Ponto Up | Todos os direitos reservados. Versão: ${packageJson.version} `}</Text>
        </VStack>
    )
}