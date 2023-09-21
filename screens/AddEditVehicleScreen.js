import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { TextInput, Button, Title, Text, Checkbox } from 'react-native-paper';
import * as DocumentPicker from 'expo-document-picker';
import { FontAwesome } from '@expo/vector-icons';

const servicesOptions = [
  'Air Conditioning',
  'Battery',
  'Engine Oil Change',
  'Inspection',
  'Tire Change',
  'Wheel Alignment',
];

const AddEditVehicleScreen = ({ navigation }) => {
  const [services, setServices] = useState([]);
  const [currentMileage, setCurrentMileage] = useState('');
  const [nextServiceMileage, setNextServiceMileage] = useState('');
  const [fuelConsumption, setFuelConsumption] = useState('');
  const [totalFuelCost, setTotalFuelCost] = useState('');
  const [documents, setDocuments] = useState([]); // Store attached documents

  

  const handleServiceToggle = (service) => {
    if (services.includes(service)) {
      setServices(services.filter((item) => item !== service));
    } else {
      setServices([...services, service]);
    }
  };

  const handleDocumentPick = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: '*/*', // You can specify the allowed MIME types here
        copyToCacheDirectory: false, // Set to true if you want to cache the file
      });

      if (result.type === 'success') {
        const newDocument = {
          name: result.name,
          uri: result.uri,
          extension: result.name.split('.').pop(),
        };
        setDocuments([...documents, newDocument]);
      } else {
        console.log('Document selection cancelled');
      }
    } catch (error) {
      console.error('Error picking a document:', error);
    }
  };

  const handleSave = () => {
    // Perform save logic using AsyncStorage or state management
    navigation.goBack();
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.container}>
        <Title style={styles.title}>Services</Title>
        <View style={styles.servicesContainer}>
          {servicesOptions.map((service) => (
            <Checkbox.Item
              key={service}
              label={service}
              status={services.includes(service) ? 'checked' : 'unchecked'}
              onPress={() => handleServiceToggle(service)}
            />
          ))}
        </View>

        <Text style={styles.sectionTitle}>Mileage</Text>
        <View style={styles.mileageContainer}>
          <TextInput
            label="Current Mileage"
            value={currentMileage}
            onChangeText={(text) => setCurrentMileage(text)}
            style={styles.input}
          />
          <TextInput
            label="Next Service Mileage"
            value={nextServiceMileage}
            onChangeText={(text) => setNextServiceMileage(text)}
            style={styles.input}
          />
        </View>

        <Text style={styles.sectionTitle}>Fuel Detail</Text>
        <View style={styles.fuelDetailContainer}>
          <TextInput
            label="Fuel Consumption"
            value={fuelConsumption}
            onChangeText={(text) => setFuelConsumption(text)}
            style={styles.input}
          />
          <TextInput
            label="Total Fuel Cost"
            value={totalFuelCost}
            onChangeText={(text) => setTotalFuelCost(text)}
            style={styles.input}
          />
        </View>

        <Text style={styles.sectionTitle}>Attached Documents</Text>
        <TouchableOpacity style={styles.attachmentButton} onPress={handleDocumentPick}>
         <FontAwesome name="paperclip" size={16} color="black" style={styles.icon} />
         </TouchableOpacity>
         {documents.map((document, index) => (
         <View key={index} style={styles.documentContainer}>
        <FontAwesome name="file" size={16} color="black" style={styles.icon} />
        <Text>{document.name} ({document.extension})</Text>
       </View>
       ))}


        <Button mode="contained" style={styles.saveButton} onPress={handleSave}>
          Save
        </Button>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 20,
    marginBottom: 2,
  },
  servicesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 2,
  },
  sectionTitle: {
    fontSize: 16,
    marginBottom: 3,
    marginTop: 3,
  },
  mileageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 3,
  },
  fuelDetailContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    marginRight: 10,
  },
  saveButton: {
    backgroundColor: '#4CAF50',
    marginTop: 20,
  },
  attachmentButton: {
    marginTop: 10,
    marginBottom: 10,
  },
  documentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  icon: {
    marginRight: 5,
  },
  scrollViewContainer: {
    flexGrow: 1, // Important to allow scrolling
    paddingVertical: 16, // Add padding at the bottom if needed
  },
});

export default AddEditVehicleScreen;
