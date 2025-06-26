// index.jsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/homeScreens/HomeScreen';
import HappyScreen from '../screens/journalScreens/HappyScreen'; // Import HappyScreen

const Stack = createStackNavigator();

const App = () => { // Renamed 'index' to 'App' for conventional naming
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }} // Optionally hide the header for the home screen
        />
        <Stack.Screen
          name="HappyScreen"
          component={HappyScreen}
          options={{ title: 'Happy Journal' }} // Set a title for HappyScreen
        />
        {/* Define other screens here if needed */}
        {/* <Stack.Screen name="AnotherScreen" component={AnotherScreenComponent} /> */}
        {/* <Stack.Screen name="YetAnotherScreen" component={YetAnotherScreenComponent} /> */}
        {/* <Stack.Screen name="MoodLogScreen" component={MoodLogScreenComponent} /> */}
        {/* <Stack.Screen name="Card5Screen" component={Card5ScreenComponent} /> */}
        {/* <Stack.Screen name="Card4Screen" component={Card4ScreenComponent} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;