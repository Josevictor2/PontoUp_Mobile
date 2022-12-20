import { VStack, Text } from "native-base"
import { Button } from "../../components/Button"
import { useAuth } from "../../hooks/useAuth";

export const JustificationScreen = () => {
    const { signOut } = useAuth();
    return (
        <VStack flex={1} justifyContent="center" alignItems="center" safeArea>
            <Text>Justification</Text>
            <Button children="sair" onPress={signOut} />
        </VStack>
    )
}