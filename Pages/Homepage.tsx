import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomePage: React.FC = () => {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>WELCOME TO EMPOWERING THE NATION</Text>
      
      {/* Logo Section */}
      <View style={styles.logoSection}>
        <Image
          source={require('../assets/XHAW GROUP 1 LOGO.png')} 
          style={styles.logo}
          resizeMode="contain"
          accessibilityLabel="Empowering the Nation Logo" 
        />
      </View>

      {/* Description */}
      <Text style={styles.description}>
        Empowering the Nation is a school for the community. We provide essential skills to help navigate a fast-paced life, ensuring everyone has access to programs tailored to their needs. {'\n\n'}
        Our courses include six-month and six-week programs, designed for flexibility and affordability to suit different schedules and goals.
      </Text>

      {/* Courses Section */}
      <View style={styles.courseSection}>
        <Text style={styles.subtitle}>Courses tailored for everyone</Text>

        {/* Course Options */}
        <View style={styles.courseOptions}>
          <TouchableOpacity
            style={[styles.courseButton, styles.brown]}
            onPress={() => navigation.navigate('SixWeeksCourses')}  
          >
            <Text style={styles.buttonText}>Six Weeks Courses</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.courseButton, styles.green]}
            onPress={() => navigation.navigate('SixMonthsCourses')}  
          >
            <Text style={styles.buttonText}>Six Months Courses</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Contact Us Button */}
      <View style={styles.contactSection}>
        <TouchableOpacity
          style={styles.contactButton}
          onPress={() => navigation.navigate('ContactUsPage')} 
        >
          <Text style={styles.contactButtonText}>Contact Us</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  logoSection: {
    alignItems: 'center',
    marginBottom: 30,
  },
  logo: {
    width: 250,
    height: 250,
  },
  description: {
    fontSize: 17,
    color: '#000000',
    lineHeight: 24,
    textAlign: 'justify',
    marginBottom: 20,
  },
  courseSection: {
    marginTop: 20,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
    color: '#444',
  },
  courseOptions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  courseButton: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    elevation: 2,
  },
  brown: {
    backgroundColor: '#8B4513',
  },
  green: {
    backgroundColor: '#006400',
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  contactSection: {
    marginTop: 30,
    alignItems: 'center',
  },
  contactButton: {
    backgroundColor: '#98C172',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  contactButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default HomePage;
