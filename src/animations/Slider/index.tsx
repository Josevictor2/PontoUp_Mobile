import { MotiView } from 'moti';
import { FC, memo } from 'react';

type SliderType = {
  children: React.ReactNode;
  tranlateX: number;
  opacity: number;
};

export const Slider: FC<SliderType> = memo(
  ({ children, opacity, tranlateX }) => {
    return (
      <>
        <MotiView
          from={{
            opacity: 0,
            translateX: -tranlateX,
          }}
          animate={{
            opacity: opacity,
            translateX: 0,
          }}
        >
          {children}
        </MotiView>
      </>
    );
  },
);
