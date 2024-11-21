import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import your pages
import HomePage from './Pages/Homepage';
import ContactUsPage from './Pages/ContactUs';
import GardenMaintenancePage from './Pages/Gardenmaintenance';
import SixWeeksCourses from './Pages/Sixweekscourses';
import SixMonthsCourses from './Pages/Sixmonthcourses';
import FirstAidPage from './Pages/Firstaid';
import ChildMindingPage from './Pages/Childminding';
import LifeSkillsPage from './Pages/Lifeskill';
import SewingPage from './Pages/Sewing';
import LandscapingPage from './Pages/Landscaping';
import CookingPage from './Pages/cooking';
import FormPage from './Pages/FormPage';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="HomePage"
        screenOptions={{
          headerStyle: { backgroundColor: '#558B2F' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      >
        <Stack.Screen name="HomePage" component={HomePage} options={{ title: 'Home' }} />
        <Stack.Screen name="ContactUsPage" component={ContactUsPage} options={{ title: 'Contact Us' }} />
        <Stack.Screen name="GardenMaintenancePage" component={GardenMaintenancePage} options={{ title: 'Garden Maintenance' }} />
        <Stack.Screen name="SixWeeksCourses" component={SixWeeksCourses} options={{ title: 'Six Weeks Courses' }} />
        <Stack.Screen name="SixMonthsCourses" component={SixMonthsCourses} options={{ title: 'Six Months Courses' }} />
        <Stack.Screen name="FirstAidPage" component={FirstAidPage} options={{ title: 'First Aid' }} />
        <Stack.Screen name="ChildMindingPage" component={ChildMindingPage} options={{ title: 'Child Minding' }} />
        <Stack.Screen name="LifeSkillsPage" component={LifeSkillsPage} options={{ title: 'Life Skills' }} />
        <Stack.Screen name="SewingPage" component={SewingPage} options={{ title: 'Sewing' }} />
        <Stack.Screen name="LandscapingPage" component={LandscapingPage} options={{ title: 'Landscaping' }} />
        <Stack.Screen name="CookingPage" component={CookingPage} options={{ title: 'Cooking' }} />
        <Stack.Screen name="FormPage" component={FormPage} options={{ title: 'Enrollment Form' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

