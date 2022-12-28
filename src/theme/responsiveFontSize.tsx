import { RFValue } from 'react-native-responsive-fontsize';

export const useFontSize = () => {
  const FontSize = (size: number) => {
    const standartHeight = 734;
    const fontSize = `${RFValue(size, standartHeight)}`;
    return fontSize;
  };

  return { FontSize };
};
