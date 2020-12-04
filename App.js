import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import EventsScreen from './screens/EventsScreen';
import ContactScreen from './screens/ContactScreen';
import Ionicons from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator Container screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused
            ? 'ios-heart'
            : 'ios-heart';
        } else if (route.name === 'Event') {
          iconName = focused ? 'ios-list-box' : 'ios-list';
        } else if (route.name === 'Contact') {
          iconName = focused ? 'ios-megaphone' : 'ios-megaphone';
        }

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: 'orange',
      inactiveTintColor: 'gray',
    }}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Event" component={EventsScreen} />
        <Tab.Screen name="Contact" component={ContactScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}