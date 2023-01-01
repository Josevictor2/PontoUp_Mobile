import { useFontSize } from '@theme/responsiveFontSize';
import { Text } from 'native-base';
import React, { FC } from 'react';

type TitleProps = {
  children: React.ReactNode;
};

export const Title: FC<TitleProps> = ({ children }) => {
  const { FontSize } = useFontSize();
  return (
    <Text
      color="#767A80"
      fontFamily="body"
      fontWeight="300"
      fontSize={FontSize(12)}
    >
      {children}
    </Text>
  );
};

export const SubTitle: FC<TitleProps> = ({ children }) => {
  const { FontSize } = useFontSize();
  return (
    <Text
      color="#44484D"
      bold
      fontFamily="body"
      fontWeight="400"
      fontSize={FontSize(14)}
    >
      {children}
    </Text>
  );
};
