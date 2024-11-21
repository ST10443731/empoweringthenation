import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SixMonthsCourses: React.FC = () => {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Page Title */}
      <Text style={styles.pageTitle}>SIX MONTHS COURSES</Text>

      {/* Description */}
      <Text style={styles.description}>
        Our six-month courses aim to provide you with essential skills that require more attention and detail than our shorter programs. 
        These courses cover topics like handling emergencies, building a fulfilling life, advancing your career, and mastering practical skills with basic human knowledge.
      </Text>

      {/* Courses Grid */}
      <View style={styles.coursesGrid}>
        <TouchableOpacity
          style={styles.courseItem}
          onPress={() => navigation.navigate('FirstAidPage')} // Navigate to the First Aid page
        >
          <Image
            source={require('../assets/Aid.jpg')}
            style={styles.courseImage}
            accessibilityLabel="First Aid course image"
          />
          <Text style={styles.courseTitle}>FIRST AID</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.courseItem}
          onPress={() => navigation.navigate('SewingPage')} // Navigate to the Sewing page
        >
          <Image
            source={require('../assets/sewing.jpg')}
            style={styles.courseImage}
            accessibilityLabel="Sewing course image"
          />
          <Text style={styles.courseTitle}>SEWING</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.courseItem}
          onPress={() => navigation.navigate('LandscapingPage')} // Navigate to the Landscaping page
        >
          <Image
            source={require('../assets/landscaping.jpg')}
            style={styles.courseImage}
            accessibilityLabel="Landscaping course image"
          />
          <Text style={styles.courseTitle}>LANDSCAPING</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.courseItem}
          onPress={() => navigation.navigate('LifeSkillsPage')} // Navigate to the Life Skills page
        >
          <Image
            source={require('../assets/lifeskill.jpg')}
            style={styles.courseImage}
            accessibilityLabel="Life Skills course image"
          />
          <Text style={styles.courseTitle}>LIFE SKILLS</Text>
        </TouchableOpacity>
      </View>

      {/* Back Button */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.navigate('HomePage')} // Navigate back to the homepage
      >
        <Text style={styles.backButtonText}>Back to Home</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  pageTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  description: {
    fontSize: 19,
    color: '#000000',
    lineHeight: 24,
    marginBottom: 20,
  },
  bold: {
    fontWeight: 'bold',
  },
  coursesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  courseItem: {
    alignItems: 'center',
    width: 150,
    marginBottom: 20,
  },
  courseImage: {
    width: 120,
    height: 80,
    borderRadius: 5,
  },
  courseTitle: {
    marginTop: 10,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
  },
  backButton: {
    alignSelf: 'center',
    backgroundColor: '#A0522D',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  backButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SixMonthsCourses;
