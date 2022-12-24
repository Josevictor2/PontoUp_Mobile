import {
  Easing,
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

interface AnimationButton {
  valueScale?: number;
}

export const useAnimattion = (scaleTo?: AnimationButton) => {
  const pressed = useSharedValue(false);

  const value = scaleTo?.valueScale || 1.3;

  const TimeConfigurations = { duration: 50, easing: Easing.linear };
  const progress = useDerivedValue(() => {
    return pressed.value
      ? withTiming(1, TimeConfigurations)
      : withTiming(0, TimeConfigurations);
  });

  const animatedStyle = useAnimatedStyle(() => {
    const scale = interpolate(
      progress.value,
      [0, 1],
      [1, value],
      Extrapolate.CLAMP,
    );

    return {
      transform: [{ scale }],
    };
  });

  return { pressed, animatedStyle };
};
