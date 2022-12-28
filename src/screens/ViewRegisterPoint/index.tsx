import { Button, VStack } from 'native-base';

import { Header } from '@components/Header';
import { useAuth } from '@hooks/useAuth';
//import { RenderItem } from '@components/RenderItem';

const data = [
  {
    id: '1',
    title:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget aliquam ultricies, nunc nisl aliquam nunc, eget aliquam nunc nisl eget nunc.',
  },
  {
    id: '2',
    title: 'Justification 2',
  },
  {
    id: '3',
    title: 'Justification 3',
  },
  {
    id: '4',
    title: 'Justification 4',
  },
];

export const ViewRegisterScreen = () => {
  const { signOut } = useAuth();
  return (
    <VStack h="100%" flex={1} safeArea>
      <VStack bg="white" flex={1}>
        <Header />
        <Button onPress={() => signOut()}>sair</Button>
      </VStack>
      <VStack bg="blue.300" flex={5} />
    </VStack>
  );
};
