import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
} from 'react-native';

const FormPage = () => {
  const [selectedCourses, setSelectedCourses] = useState<string[]>([]);
  const [totalFee, setTotalFee] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');

  // Course data
  const sixMonthCourses = [
    { name: 'First Aid', fee: 1500 },
    { name: 'Sewing', fee: 1500 },
    { name: 'Landscaping', fee: 1500 },
    { name: 'Life Skills', fee: 1500 },
  ];

  const sixWeekCourses = [
    { name: 'Child Minding', fee: 750 },
    { name: 'Cooking', fee: 750 },
    { name: 'Garden Maintenance', fee: 750 },
  ];

  //for Calculating total fee and discount
  const calculateTotalFee = () => {
    const numCourses = selectedCourses.length;
    let discountRate = 0;

    //to APply discount logic
    if (numCourses === 2) discountRate = 5;
    else if (numCourses === 3) discountRate = 10;
    else if (numCourses > 3) discountRate = 15;

    const totalFeeWithoutDiscount = selectedCourses.reduce((total, course) => {
      const courseFee =
        sixMonthCourses.find((item) => item.name === course)?.fee ||
        sixWeekCourses.find((item) => item.name === course)?.fee ||
        0;
      return total + courseFee;
    }, 0);

    const discountAmount = (totalFeeWithoutDiscount * discountRate) / 100;
    const discountedFee = totalFeeWithoutDiscount - discountAmount;

    setTotalFee(discountedFee);
    setDiscount(discountRate);
  };

  // for course selection
  const toggleCourseSelection = (course: string) => {
    setSelectedCourses((prev) =>
      prev.includes(course)
        ? prev.filter((c) => c !== course)
        : [...prev, course]
    );
  };

  // for booking submission
  const handleBooking = () => {
    // Validated form inputs
    if (!name.trim() || !contact.trim() || !email.trim()) {
      Alert.alert('Error', 'Please fill out all the fields.');
      return;
    }

    // Validated email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Alert.alert('Error', 'Please enter a valid email address.');
      return;
    }

    // Validate contact number by ensuring it's numeric and at least 10 digits)
    if (!/^\d{10,}$/.test(contact)) {
      Alert.alert('Error', 'Please enter a valid contact number (at least 10 digits).');
      return;
    }

    // Displaying success message
    Alert.alert(
      'Success',
      `Booking successful! Your total fee is R${totalFee.toFixed(2)}`
    );

    //  form fields and selections
    setName('');
    setContact('');
    setEmail('');
    setSelectedCourses([]);
    setTotalFee(0);
    setDiscount(0);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Title */}
      <Text style={styles.title}>CALCULATE TOTAL FEES</Text>

      {/* Six Month Courses Section */}
      <Text style={styles.subtitle}>Pick your Six Month Courses</Text>
      <View style={styles.checkboxGroup}>
        {sixMonthCourses.map((course, index) => (
          <TouchableOpacity
            key={index}
            style={styles.checkboxItem}
            onPress={() => toggleCourseSelection(course.name)}
          >
            <View
              style={[
                styles.checkbox,
                selectedCourses.includes(course.name) && styles.checkboxSelected,
              ]}
            />
            <Text style={styles.checkboxText}>
              {course.name} - R{course.fee.toFixed(2)}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Six Week Courses Section */}
      <Text style={styles.subtitle}>Pick your Six Week Courses</Text>
      <View style={styles.checkboxGroup}>
        {sixWeekCourses.map((course, index) => (
          <TouchableOpacity
            key={index}
            style={styles.checkboxItem}
            onPress={() => toggleCourseSelection(course.name)}
          >
            <View
              style={[
                styles.checkbox,
                selectedCourses.includes(course.name) && styles.checkboxSelected,
              ]}
            />
            <Text style={styles.checkboxText}>
              {course.name} - R{course.fee.toFixed(2)}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/*The Calculate Button */}
      <TouchableOpacity style={styles.calculateButton} onPress={calculateTotalFee}>
        <Text style={styles.buttonText}>CALCULATE</Text>
      </TouchableOpacity>

      {/* Total Fees Display */}
      {totalFee > 0 && (
        <View style={styles.feeDisplay}>
          <Text style={styles.feeText}>
            YOUR TOTAL COURSE FEE IS R{totalFee.toFixed(2)}
          </Text>
          <Text style={styles.discountText}>
            YOU RECEIVED A DISCOUNT OF {discount}%
          </Text>
        </View>
      )}

      {/* Booking Section */}
      <Text style={styles.subtitle}>MAKE A BOOKING</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Contact"
        value={contact}
        onChangeText={setContact}
        keyboardType="phone-pad"
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      {/*  Button */}
      <TouchableOpacity style={styles.bookButton} onPress={handleBooking}>
        <Text style={styles.bookButtonText}>Book now</Text>
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
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
    color: '#000',
  },
  checkboxGroup: {
    marginBottom: 20,
  },
  checkboxItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 3,
    marginRight: 10,
  },
  checkboxSelected: {
    backgroundColor: '#558B2F',
    borderColor: '#558B2F',
  },
  checkboxText: {
    fontSize: 16,
    color: '#000',
  },
  calculateButton: {
    backgroundColor: '#8B5E3C',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  feeDisplay: {
    marginBottom: 20,
    alignItems: 'center',
  },
  feeText: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
  },
  discountText: {
    fontSize: 14,
    color: '#888',
  },
  input: {
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    fontSize: 16,
  },
  bookButton: {
    backgroundColor: '#558B2F',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  bookButtonText: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default FormPage;