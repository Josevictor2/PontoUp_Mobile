import { FC } from 'react';
import { Box, Text } from 'native-base';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { useFontSize } from '@theme/responsiveFontSize';

type ChipProps = {
  status: string;
  color: string;
  bg: string;
  borderColor: string;
};

export const Chip: FC<ChipProps> = ({ status, color, bg, borderColor }) => {
  const { FontSize } = useFontSize();
  return (
    <Box
      bg={bg}
      h={hp(3.5)}
      w={wp(21)}
      borderColor={borderColor}
      borderWidth={1}
      borderRadius={25}
      justifyContent="center"
      alignItems="center"
    >
      <Text
        color={color}
        fontFamily="body"
        fontWeight="400"
        fontSize={FontSize(10)}
      >
        {status}
      </Text>
    </Box>
  );
};
