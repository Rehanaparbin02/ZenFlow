// HomeScreen.jsx
import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import BentoBoxGrid from '../../components/BentoBoxGrid';
import { PulsingCircle, BouncingDot, RotatingSquare } from '../../components/CardWithAnimation';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  const myBentoCardData = [
    {
      cardText: 'Deep Focus',
      animationComponent: RotatingSquare,
      cardStyle: { backgroundColor: '#e6f7ff' },
      textStyle: { fontSize: 24, fontWeight: '700' },
      onPress: () => navigation.navigate('HappyScreen', { fromCard: 'Deep Focus' }), // Pass parameter
    },
    {
      cardText: 'Quick Zen',
      animationComponent: PulsingCircle,
      cardStyle: { backgroundColor: '#fff9e6' },
      textStyle: { fontSize: 16 },
      onPress: () => navigation.navigate('AnotherScreen', { fromCard: 'Quick Zen' }),
    },
    {
      cardText: 'Breather',
      animationComponent: BouncingDot,
      cardStyle: { backgroundColor: '#e0ffe0' },
      textStyle: { fontSize: 16 },
      onPress: () => navigation.navigate('YetAnotherScreen', { fromCard: 'Breather' }),
    },
    {
      cardText: 'Mood Log',
      animationComponent: () => <Text style={{ fontSize: 36 }}>📝</Text>,
      cardStyle: { backgroundColor: '#ffe6f2' },
      onPress: () => navigation.navigate('MoodLogScreen', { fromCard: 'Mood Log' }),
    },
    {
      cardText: 'Sound Bath',
      animationComponent: () => <Text style={{ fontSize: 36 }}>🎶</Text>,
      cardStyle: { backgroundColor: '#f0e6ff' },
      onPress: () => navigation.navigate('Card5Screen', { fromCard: 'Sound Bath' }),
    },
    {
      cardText: 'Morning Prep',
      animationComponent: () => <Text style={{ fontSize: 36 }}>☀️</Text>,
      cardStyle: { backgroundColor: '#e6f9f0' },
      onPress: () => navigation.navigate('Card4Screen', { fromCard: 'Morning Prep' }),
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Text style={styles.header}>Your Custom Bento Layout</Text>
        <BentoBoxGrid cardData={myBentoCardData} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    paddingTop: 30,
  },
  scrollViewContent: {
    paddingBottom: 30,
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#2c3e50',
    textAlign: 'center',
    marginBottom: 25,
    marginTop: 20,
  },
});

export default HomeScreen;