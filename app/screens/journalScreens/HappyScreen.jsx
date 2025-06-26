// screens/Happy.jsx
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const HappyScreen = ({ route }) => {
  const { fromCard } = route.params; // Access parameters passed from the previous screen

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Happy Journal Entries</Text>
      <Text style={styles.subtitle}>Opened from: {fromCard}</Text>

      {/* Example Journal Entries */}
      <View style={styles.entry}>
        <Text style={styles.entryDate}>June 26, 2025</Text>
        <Text style={styles.entryText}>Had a wonderful day exploring new places and meeting new people. Feeling truly joyful!</Text>
      </View>

      <View style={styles.entry}>
        <Text style={styles.entryDate}>June 25, 2025</Text>
        <Text style={styles.entryText}>Finished a challenging project at work. The sense of accomplishment is amazing!</Text>
      </View>

      <View style={styles.entry}>
        <Text style={styles.entryDate}>June 24, 2025</Text>
        <Text style={styles.entryText}>Spent quality time with family. Laughter and good food filled the evening.</Text>
      </View>

      {/* Add more journal entries as needed */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  entry: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  entryDate: {
    fontSize: 14,
    fontWeight: '600',
    color: '#888',
    marginBottom: 5,
  },
  entryText: {
    fontSize: 16,
    color: '#555',
    lineHeight: 22,
  },
});

export default HappyScreen;