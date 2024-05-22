import { View, Text, Platform } from 'react-native';
import React from 'react';
import { Home, Screen1, Screen2 } from './screens';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const screenOptions = {
  tabBarShowLabel:false,
  headerShown:false,
  tabBarStyle:{
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 60,
    background: "#fff"
  }
}
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen 
          name="view1" 
          component={Screen1} 
          options={{
            tabBarIcon: ({focused})=>{
              return (
                <View style={{alignItems: "center", justifyContent: "center"}}> 
                  <AntDesign name="infocirlceo" size={24} color={focused ? "#FF0000": "#111"} />
                  <Text style={{fonSize: 12, color:focused ? "#FF0000": "#111"}}>Info</Text>
                </View>
              )
            }
          }}
        />
        <Tab.Screen 
          name="view2" 
          component={Screen2} 
          options={{
            tabBarIcon: ({focused})=>{
              return (
                <View style={{alignItems: "center", justifyContent: "center"}}> 
                  <Ionicons name="fast-food" size={24} color={focused ? "#FF0000": "#111"} />
                  <Text style={{fonSize: 12, color:focused ? "#FF0000": "#111"}}>Comida</Text>
                </View>
              )
            }
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}