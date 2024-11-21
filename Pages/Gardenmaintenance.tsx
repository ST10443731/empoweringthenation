
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const GardenMaintenancePage = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      {/* Title */}
      <Text style={styles.title}>GARDEN MAINTENANCE</Text>

      {/* Image */}
      <Image source={require('../assets/grr.jpg')} style={styles.image} />

      {/* Color Boxes */}
      <View style={styles.colorBoxes}>
        <View style={[styles.colorBox, { backgroundColor: '#4CAF50' }]} />
        <View style={[styles.colorBox, { backgroundColor: '#8B5E3C' }]} />
        <View style={[styles.colorBox, { backgroundColor: '#98C172' }]} />
      </View>

      {/* Fee, Purpose, Content */}
      <View style={styles.textContent}>
        {/* Fees */}
        <Text style={styles.textHeading}>Fees:</Text>
        <Text style={styles.textDetails}>R750</Text>

        {/* Purpose */}
        <Text style={styles.textHeading}>Purpose:</Text>
        <Text style={styles.textDetails}>
          To learn the art of maintaining and beautifying your garden.
        </Text>

        {/* Content */}
        <Text style={styles.textHeading}>Content:</Text>
        <Text style={styles.textDetails}>- Soil preparation techniques</Text>
        <Text style={styles.textDetails}>- Planting and pruning skills</Text>
        <Text style={styles.textDetails}>- Lawn maintenance and care</Text>
        <Text style={styles.textDetails}>- Pest control methods</Text>
      </View>

      {/* Enroll Button */}
      <TouchableOpacity
        style={styles.enrollButton}
        onPress={() => navigation.navigate('FormPage')} // Navigate to the enrollment form
      >
        <Text style={styles.buttonText}>Enroll Now</Text>
      </TouchableOpacity>

      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000',
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 300,
    borderRadius: 10,
    marginBottom: 15,
  },
  colorBoxes: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 25,
  },
  colorBox: {
    width: 130,
    height: 50,
    borderRadius: 0,
  },
  textContent: {
    marginBottom: 20,
  },
  textHeading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#000',
  },
  textDetails: {
    fontSize: 20,
    color: '#000',
    marginBottom: 10,
    lineHeight: 20,
    fontWeight: '600',
  },
  enrollButton: {
    backgroundColor: '#8B5E3C',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 20,
    marginTop: 20,
    alignSelf: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#FFF',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  footerIcon: {
    padding: 10,
  },
  iconText: {
    fontSize: 20,
    color: '#8B5E3C',
  },
});

export default GardenMaintenancePage;
