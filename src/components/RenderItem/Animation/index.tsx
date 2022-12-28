import { useRef, useState } from 'react';
import { Animated, Easing, LayoutAnimation } from 'react-native';

export const useAnimationList = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [bodySectionHeight, setBodySectionHeight] = useState<number>(0);

  const animatedController = useRef(new Animated.Value(0)).current;

  const bodyHeight = animatedController.interpolate({
    inputRange: [0, 1],
    outputRange: [0, bodySectionHeight],
  });

  const toggleAnimation = {
    duration: 500,
    update: {
      duration: 500,
      property: LayoutAnimation.Properties.opacity,
      type: LayoutAnimation.Types.easeInEaseOut,
    },
    delete: {
      duration: 500,
      property: LayoutAnimation.Properties.opacity,
      type: LayoutAnimation.Types.easeInEaseOut,
    },
  };

  const toggleCollapse = () => {
    const config = {
      duration: 500,
      toValue: isOpen ? 0 : 1,
      useNativeDriver: false,
      easing: Easing.bezier(0.4, 0.0, 0.2, 1),
    };
    LayoutAnimation.configureNext(toggleAnimation);
    Animated.timing(animatedController, config).start();
    setIsOpen(!isOpen);
  };

  const arrowTransform = animatedController.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '90deg'],
  });

  return {
    isOpen,
    toggleCollapse,
    arrowTransform,
    bodyHeight,
    setBodySectionHeight,
  };
};
