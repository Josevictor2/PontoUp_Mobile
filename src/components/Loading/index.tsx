import { memo } from 'react';
import { Image, Stack } from 'native-base';
import { MotiView } from 'moti';
import logo from '@assets/images/Logo.png';

type sizeType = Record<'size', number>;

const LoadingAnimated = memo(({ size }: sizeType) => {
  return (
    <MotiView
      from={{
        width: size,
        height: size,
        borderRadius: size / 2,
        borderWidth: 0,
        shadowOpacity: 0.5,
      }}
      animate={{
        width: size + 20,
        height: size + 20,
        borderRadius: (size + 20) / 2,
        borderWidth: size / 10,
        shadowOpacity: 1,
      }}
      transition={{
        type: 'timing',
        duration: 1000,
        loop: true,
      }}
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        borderWidth: size / 10,
        borderColor: '#30663C',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1,
        shadowRadius: 10,
      }}
    />
  );
});

export const LoadingFonts = memo(() => {
  return (
    <Stack
      flex={1}
      justifyContent="center"
      alignItems="center"
      bg="#EBEEF2"
      w="100%"
      h="100%"
    >
      <LoadingAnimated size={150} />
      <Image
        position="absolute"
        zIndex={1}
        width="120px"
        height="60px"
        resizeMode="contain"
        source={logo}
        alt="PontoUp"
      />
    </Stack>
  );
});
