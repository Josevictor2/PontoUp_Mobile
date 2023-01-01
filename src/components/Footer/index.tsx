import { Zoom } from '@animations/ZoomIn';
import { useFontSize } from '@theme/responsiveFontSize';
import { VStack, Text } from 'native-base';

import packageJson from '../../../package.json';

export const Footer = () => {
  const { FontSize } = useFontSize();
  return (
    <Zoom duration={1500}>
      <VStack w="100%" mb={4}>
        <Text
          fontFamily="body"
          fontSize={FontSize(12)}
        >{`Ponto Up | Todos os direitos reservados. Versão: ${packageJson.version} `}</Text>
      </VStack>
    </Zoom>
  );
};
