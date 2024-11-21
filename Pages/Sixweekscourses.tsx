import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SixWeeksCourses: React.FC = () => {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.pageTitle}>SIX WEEKS COURSES</Text>
      <Text style={styles.description}>
        Our six weeks courses are for gardeners and domestic workers who are family-oriented. 
        These courses will help you build a perfect home with the skills necessary for warm households. 
        Whether it’s cooking perfect meals for your employer’s family, impressing them with an aesthetically pleasing garden, 
        or taking care of the young ones, we have the course for it.
      </Text>

      <View style={styles.coursesGrid}>
        {/* Child Minding Course Navigation*/}
        <TouchableOpacity
          style={styles.courseItem}
          onPress={() => navigation.navigate('ChildMindingPage')} 
        >
          <Image source={require('../assets/child.jpg')} style={styles.courseImage} />
          <Text style={styles.courseTitle}>CHILD MINDING</Text>
        </TouchableOpacity>

        {/* Garden Maintenance Course Navigation */}
        <TouchableOpacity
          style={styles.courseItem}
          onPress={() => navigation.navigate('GardenMaintenancePage')} 
        >
          <Image source={require('../assets/Garden3.png')} style={styles.courseImage} />
          <Text style={styles.courseTitle}>GARDEN MAINTENANCE</Text>
        </TouchableOpacity>

        {/* Cooking Course */}
        <TouchableOpacity
          style={styles.courseItem}
          onPress={() => navigation.navigate('CookingPage')} 
        >
          <Image source={require('../assets/cooking.png')} style={styles.courseImage} />
          <Text style={styles.courseTitle}>COOKING</Text>
        </TouchableOpacity>
      </View>

      {/* Back Button */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.navigate('HomePage')} 
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
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  description: {
    fontSize: 19,
    color: '#000000',
    lineHeight: 19,
    marginBottom: 20,
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
    height: 100,
    borderRadius: 5,
  },
  courseTitle: {
    marginTop: 10,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
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
  },
});

export default SixWeeksCourses;
