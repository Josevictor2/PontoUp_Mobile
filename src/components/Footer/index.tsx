import { VStack, Text } from 'native-base';
import Animated, { ZoomIn } from 'react-native-reanimated';

import packageJson from '../../../package.json';

export const Footer = () => {
  return (
    <Animated.View entering={ZoomIn.duration(1000)}>
      <VStack w="100%" mb={4}>
        <Text
          fontFamily="body"
          fontSize="xs"
        >{`Ponto Up | Todos os direitos reservados. Versão: ${packageJson.version} `}</Text>
      </VStack>
    </Animated.View>
  );
};
