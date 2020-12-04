import * as React from 'react';
import { Text, View, TouchableOpacity} from 'react-native';
import {createStackNavigator} from "@react-navigation/stack";
import { StackActions } from '@react-navigation/native';

function EventsHomeScreen({navigation}){

    return (
      <View style={{ flex: 1, justifyContent: 'space-around', alignItems: 'center', backgroundColor:"gold"}}>
        <Text style={{fontSize:30, fontWeight:"bold"}}>Events First Page!</Text>
        <TouchableOpacity 
        style={{ backgroundColor:"orange", borderRadius:25, justifyContent:"center", padding:30}}
        onPress={() => navigation.navigate("EventsSecond")}>
          <Text>Second Screen</Text>
        </TouchableOpacity>
      </View>
    );
    
}

function EventsSecondScreen({navigation}){
  return(
    <View style={{ flex: 1, justifyContent: 'space-around', alignItems: 'center', backgroundColor:"gold"}}>
      <Text style={{fontSize:30, fontWeight:"bold"}}>Event Second Page!</Text>
      <TouchableOpacity 
        style={{ backgroundColor:"orange", borderRadius:25, justifyContent:"center", padding:30}}
        onPress={() => navigation.navigate("EventsThird")}>
          <Text>Third Screen</Text>
        </TouchableOpacity>
    </View>
  )
}

function EventsThirdScreen({navigation}){
  return(
    <View style={{ flex: 1, justifyContent: 'space-around', alignItems: 'center', backgroundColor:"gold" }}>
      <Text style={{fontSize:30, fontWeight:"bold"}}>Event Third Page!</Text>
      <TouchableOpacity 
        style={{ backgroundColor:"orange", borderRadius:25, justifyContent:"center", padding:30}}
        onPress={() => navigation.popToTop()}>
          <Text>Pop to top</Text>
        </TouchableOpacity>
    </View>
  )
}


const Stack = createStackNavigator();

export default function EventsStack(){
  return(
    <Stack.Navigator>
      <Stack.Screen name="EventsHome" component={EventsHomeScreen} />
      <Stack.Screen name="EventsSecond" component={EventsSecondScreen} />
      <Stack.Screen name="EventsThird" component={EventsThirdScreen} />
    </Stack.Navigator>
  )
}