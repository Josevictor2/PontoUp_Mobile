import { MotiView } from 'moti';
import { FC } from 'react';

type RotationProps = {
  isOpen: boolean;
  deg: string;
  duration?: number;
  children: React.ReactNode;
};

export const RotationAnimation: FC<RotationProps> = ({
  children,
  deg,
  isOpen,
  duration = 300,
}) => {
  return (
    <MotiView
      from={{
        rotate: '0deg',
      }}
      animate={{
        rotate: isOpen ? deg : '0deg',
      }}
      transition={{
        type: 'timing',
        duration: duration,
      }}
    >
      {children}
    </MotiView>
  );
};
