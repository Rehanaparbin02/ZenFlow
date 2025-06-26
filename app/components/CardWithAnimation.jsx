import React from 'react';
import { View, Text, StyleSheet, Animated, Easing, Pressable } from 'react-native'; // Import Pressable

// Example simple pulsing animation component
const PulsingCircle = () => {
  const scaleAnim = React.useRef(new Animated.Value(1)).current;

  React.useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(scaleAnim, {
          toValue: 1.1, // Slightly larger pulse
          duration: 700,
          easing: Easing.ease,
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 1,
          duration: 700,
          easing: Easing.ease,
          useNativeDriver: true,
        }),
      ]),
      { iterations: -1 } // Loop indefinitely
    ).start();
  }, [scaleAnim]);

  return (
    <Animated.View
      style={{
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#4CAF50', // A calming green
        transform: [{ scale: scaleAnim }],
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text style={{ color: 'white', fontWeight: 'bold' }}>✓</Text>
    </Animated.View>
  );
};

// Another simple animation: a bouncing dot
const BouncingDot = () => {
  const translateYAnim = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(translateYAnim, {
          toValue: -15, // Move up 15 units
          duration: 400,
          easing: Easing.out(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(translateYAnim, {
          toValue: 0, // Move back down
          duration: 400,
          easing: Easing.in(Easing.ease),
          useNativeDriver: true,
        }),
      ]),
      { iterations: -1 }
    ).start();
  }, [translateYAnim]);

  return (
    <Animated.View
      style={{
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: '#FFC107', // Amber color
        transform: [{ translateY: translateYAnim }],
      }}
    />
  );
};

// Another example: a simple rotating square
const RotatingSquare = () => {
  const rotateAnim = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.loop(
      Animated.timing(rotateAnim, {
        toValue: 1, // Goes from 0 to 1
        duration: 2000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
      { iterations: -1 }
    ).start();
  }, [rotateAnim]);

  const rotateDeg = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <Animated.View
      style={{
        width: 50,
        height: 50,
        backgroundColor: '#03A9F4', // Light blue
        transform: [{ rotate: rotateDeg }],
      }}
    />
  );
};

const CardWithAnimation = ({
  cardText = 'Card Title',
  animationComponent: AnimationComponent,
  cardStyle,
  textStyle,
  animationContainerStyle,
  onPress, // Accept onPress prop
}) => {
  return (
    <Pressable onPress={onPress} style={({ pressed }) => [
      styles.cardContainer,
      cardStyle,
      pressed && styles.cardPressed, // Optional: add a style for pressed state
    ]}>
      <Text style={[styles.cardText, textStyle]}>{cardText}</Text>
      <View style={[styles.animationWrapper, animationContainerStyle]}>
        {AnimationComponent ? (
          <AnimationComponent />
        ) : (
          <Text style={styles.placeholderAnimation}>[No Animation]</Text>
        )}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.15,
    shadowRadius: 4.65,
    elevation: 6,
  },
  cardPressed: {
    opacity: 0.8, // Example of a pressed state style
  },
  cardText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
    marginBottom: 10,
  },
  animationWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    maxHeight: 80,
    maxWidth: 80,
  },
  placeholderAnimation: {
    color: '#aaa',
    fontSize: 14,
    textAlign: 'center',
  },
});

export { CardWithAnimation, PulsingCircle, BouncingDot, RotatingSquare };
