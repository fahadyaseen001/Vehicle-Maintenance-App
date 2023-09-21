import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Text, FAB } from 'react-native-paper';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/app_logo.png')} 
          style={styles.logo}
        />
        <Text style={styles.logoText}>Welcome to Vehicle Maintenance App!</Text>
      </View>

      <Text style={styles.descriptionText}>
      Add your first vehicle by clicking on the bottom right add button.</Text>

      <FAB
        style={styles.fab}
        icon="plus"
        onPress={() => navigation.navigate('AddEditVehicle')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  logoContainer: {
    alignItems: 'center',
  },
  logo: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
  },
  logoText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 16,
  },
  descriptionText: {
    fontSize: 16,
    marginTop: 16,
    textAlign: 'center',
    paddingHorizontal: 16,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    width: 56,
    height: 56,
    borderRadius: 28, // Half of the width and height
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
