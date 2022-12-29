import { useAnimationState } from 'moti';

type scaleProps = {
  scale?: number;
};

export const useMotiScale = ({ scale }: scaleProps) => {
  const toogleAnimation = useAnimationState({
    opened: {
      scale: scale,
    },
    closed: {
      scale: 1,
    },
  });

  const handleToogle = () => {
    toogleAnimation.transitionTo(
      toogleAnimation.current === 'opened' ? 'closed' : 'opened',
    );
  };

  return { toogleAnimation, handleToogle };
};
