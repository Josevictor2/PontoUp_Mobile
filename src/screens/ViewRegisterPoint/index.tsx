import { VStack, Text } from "native-base";
import { Button } from "../../components/Button";
import { useAuth } from "../../hooks/useAuth";

export const ViewRegisterScreen = () => {
  const { signOut } = useAuth();
  return (
    <VStack flex={1} justifyContent="center" alignItems="center" safeArea>
      <Text>Justification</Text>
      <Button onPress={signOut}>Sair</Button>
    </VStack>
  );
};
