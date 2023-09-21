import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Divider, Text } from 'react-native-paper';

const VehicleDetailsScreen = ({ route }) => {
  const { vehicle } = route.params;

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Text style={styles.vehicleName}>{vehicle.name}</Text>
        <Text>Mileage: {vehicle.mileage} km</Text>
      </Card>
      <Divider style={styles.divider} />
      {/* Display more vehicle details, fuel information, and documents */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FFFFFF',
  },
  card: {
    padding: 16,
    marginBottom: 16,
    backgroundColor: '#000000',
  },
  vehicleName: {
    color: '#333333',
  },
  divider: {
    marginVertical: 16,
  },
});

export default VehicleDetailsScreen;
