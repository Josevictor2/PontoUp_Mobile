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
  return (
    <NativeButton
      h={h || 12}
      bg={bg || 'primary.900'}
      _text={{
        color: color,
        fontFamily: 'body',
        fontWeight: '400',
        fontSize: 'lg',
      }}
      _pressed={{
        bg: bgPressed || 'green.900',
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
