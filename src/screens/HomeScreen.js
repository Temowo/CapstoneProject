import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const userName = 'John Doe';  // This should come from your auth system, but using static for now.

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.welcome}>Welcome back, {userName}!</Text>
      <Text style={styles.subtitle}>What would you like to order today?</Text>

      {/* Quick links or categories */}
      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Categories')}>
        <Text style={styles.cardTitle}>Browse Menu Categories</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('OrderHistory')}>
        <Text style={styles.cardTitle}>Your Order History</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Promotions')}>
        <Text style={styles.cardTitle}>Check Promotions</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Cart')}>
        <Text style={styles.cardTitle}>Go to Cart</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    paddingTop: 20,
  },
  welcome: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: '#FF6347',
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
    color: '#555',
  },
  card: {
    backgroundColor: '#FF6347',
    borderRadius: 8,
    padding: 20,
    marginBottom: 20,
  },
  cardTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default HomeScreen;
