
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';


const LifeskillPage = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      {/* Title */}
      <Text style={styles.title}>Life Skills</Text>

      {/* Image */}
      <Image
        source={require('../assets/save.jpg')} 
        style={styles.image}
        accessibilityLabel="Life skills course image"
      />

      {/* Color Boxes */}
      <View style={styles.colorBoxes}>
        <View style={[styles.colorBox, { backgroundColor: '#558B2F' }]} />
        <View style={[styles.colorBox, { backgroundColor: '#8B5E3C' }]} />
        <View style={[styles.colorBox, { backgroundColor: '#98C172' }]} />
      </View>

      {/* Fee, Purpose, Content */}
      <View style={styles.textContent}>
        <Text style={styles.textHeading}>Fees:</Text>
        <Text style={styles.textDetails}>R1500</Text>

        <Text style={styles.textHeading}>Purpose:</Text>
        <Text style={styles.textDetails}>
          To provide skills to navigate basic life necessities
        </Text>

        <Text style={styles.textHeading}>Content:</Text>
        <Text style={styles.textDetails}>- Opening a bank account</Text>
        <Text style={styles.textDetails}>- Basic labour law [know your rights]</Text>
        <Text style={styles.textDetails}>- Basic reading and writing literacy</Text>
        <Text style={styles.textDetails}>- Basic numeric literacy</Text>
      </View>

      {/* Enroll Button */}
      <TouchableOpacity
        style={styles.enrollButton}
        onPress={() => navigation.navigate('FormPage')} 
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

export default LifeskillPage;
