import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ContactUsPage = () => {
  const navigation = useNavigation();

  const contacts = [
    {
      image: require('../assets/campus 1.png'),  
      address: '42 Oakwood Avenue Riverside Heights\nCape Town\n8001',
      email: 'info@empoweringherafrica.co.za',
      phone: '021 456 7894',
    },
    {
      image: require('../assets/Campus 2.png'), 
      address: '1234 Main Road\nPretoria\n7004',
      email: 'info@empoweringherafrica.co.za',
      phone: '011 987 6543',
    },
    {
      image: require('../assets/campus 3.png'), 
      address: '50 Sunset Boulevard Bayside Gardens\nKwazulu-Natal\n4001',
      email: 'info@empoweringherafrica.co.za',
      phone: '031 789 0124',
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>CONTACT US</Text>

      {contacts.map((contact, index) => (
        <View key={index} style={styles.contactCard}>
          <Image source={contact.image} style={styles.image} />
          <View style={styles.contactInfo}>
            <Text style={styles.address}>{contact.address}</Text>
            <Text style={styles.email}>
              <Text style={styles.boldText}>Email Address:</Text> {contact.email}
            </Text>
            <Text style={styles.phone}>
              <Text style={styles.boldText}>Contact Number:</Text> {contact.phone}
            </Text>
          </View>
        </View>
      ))}

      {/* Book Now Button */}
      <TouchableOpacity
        style={styles.smallButton}
        onPress={() => navigation.navigate('FormPage')} // Navigate to FormPage
      >
        <Text style={styles.smallButtonText}>Book Now</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#000',
  },
  contactCard: {
    flexDirection: 'row',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#CCC',
    paddingBottom: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 5,
    marginRight: 15,
  },
  contactInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  address: {
    fontSize: 14,
    marginBottom: 5,
    color: '#000',
  },
  email: {
    fontSize: 14,
    marginBottom: 5,
    color: '#000',
  },
  phone: {
    fontSize: 14,
    marginBottom: 10,
    color: '#000',
  },
  boldText: {
    fontWeight: 'bold',
  },
  smallButton: {
    alignSelf: 'center',
    backgroundColor: '#8B5E3C',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 15,
    marginTop: 20,
  },
  smallButtonText: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default ContactUsPage;
