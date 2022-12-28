import { MaterialCommunityIcons } from '@expo/vector-icons';
import { HStack, Pressable, Text, VStack } from 'native-base';
import { Animated } from 'react-native';
import { useAnimationList } from './Animation';

type ItemProps = Record<'title', string>;

export const RenderItem = (props: ItemProps) => {
  const {
    arrowTransform,
    isOpen,
    toggleCollapse,
    bodyHeight,
    setBodySectionHeight,
  } = useAnimationList();

  return (
    <VStack
      flex={1}
      p="2%"
      borderRadius={12}
      background="white"
      mb="2%"
      overflow="hidden"
    >
      <Pressable onPress={toggleCollapse}>
        <HStack
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Text fontSize="md" color="#2d2d2d">
            Justification
          </Text>
          <Animated.View style={{ transform: [{ rotateZ: arrowTransform }] }}>
            <MaterialCommunityIcons
              name="arrow-collapse-right"
              size={24}
              color="black"
            />
          </Animated.View>
        </HStack>
        {isOpen ? (
          <Animated.View style={{ height: bodyHeight }}>
            <HStack
              height="150px"
              paddingX="2%"
              paddingY="3%"
              onLayout={(e) => {
                setBodySectionHeight(e.nativeEvent.layout.height);
              }}
            >
              <Text>{props.title}</Text>
            </HStack>
          </Animated.View>
        ) : null}
      </Pressable>
    </VStack>
  );
};
