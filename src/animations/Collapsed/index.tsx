import { MotiView } from 'moti';
import { FC } from 'react';

type CollapsedProps = {
  isOpen: boolean;
  layout: number;
  duration?: number;
  children: React.ReactNode;
};

export const CollapsedAnimation: FC<CollapsedProps> = ({
  children,
  isOpen,
  layout,
  duration = 400,
}) => {
  return (
    <MotiView
      style={{ overflow: 'hidden' }}
      from={{
        height: 0,
      }}
      animate={{
        height: isOpen ? layout : 0,
      }}
      transition={{
        type: 'timing',
        duration: duration,
      }}
      exit={{
        height: 0,
      }}
    >
      {children}
    </MotiView>
  );
};
