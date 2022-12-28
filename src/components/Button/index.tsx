import { useFontSize } from '@theme/responsiveFontSize';
import { Button as NativeButton, IButtonProps } from 'native-base';
import { ColorType } from 'native-base/lib/typescript/components/types';

type Props = IButtonProps & {
  children: string;
  bgPressed?: ColorType;
};

export const Button = ({
  children,
  bgPressed,
  bg,
  color,
  h,
  ...props
}: Props) => {
  const { FontSize } = useFontSize();
  return (
    <NativeButton
      h={h || 12}
      bg={bg || 'primary.100'}
      _text={{
        color: color,
        fontFamily: 'body',
        fontWeight: '400',
        fontSize: {
          base: FontSize(18),
          md: FontSize(16),
          sm: FontSize(14),
          xl: FontSize(12),
        },
      }}
      _pressed={{
        bg: bgPressed || 'primary.100',
        _text: {
          color: 'white',
        },
      }}
      {...props}
    >
      {children}
    </NativeButton>
  );
};
