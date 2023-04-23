import { MotiView } from 'moti';
import { FC } from 'react';

type ZoomType = {
  children: React.ReactNode;
  scaleIn?: number;
  scaleOut?: number;
  duration?: number;
};

export const Zoom: FC<ZoomType> = ({
  children,
  scaleIn = 0,
  scaleOut = 1,
  duration = 2500,
}) => {
  return (
    <MotiView
      from={{
        scale: scaleIn,
      }}
      animate={{
        scale: scaleOut,
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
