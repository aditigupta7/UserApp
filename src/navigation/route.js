import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import MobileNumber from '../screens/MobileNumber';
import MobileOTP from '../screens/MobileOTP';
import Profile from '../screens/Profile';
import Home from '../screens/Home';
import Bookings from '../screens/Bookings';
import Wallet from '../screens/Wallet';
import ServiceAndRepair from '../screens/ServiceAndRepair';
import AddService from '../screens/AddService';
import History from '../screens/History';
import Ongoing from '../screens/Ongoing';
import Pay from '../screens/Pay';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


function BottomTabScreens(){
  return(
    <Tab.Navigator
    tabBarOptions={{
      showIcon: true ,
      // showLabel:false,
      activeTintColor: '#31AAE2',
      inactiveTintColor: '#797C7B',
      tabStyle:{backgroundColor:'#FDFDFD',marginTop:3},
      labelStyle: {fontSize: 13, fontWeight:'bold'}
       }}
       >

      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon :({color}) => (
              <Ionicons name="flame" color={color} size={28} />
          ),
      }}


      />
      <Tab.Screen
          name="Bookings"
          component={Bookings}
          options={{
            tabBarLabel: 'Bookings',
            tabBarIcon :({color}) => (
                <Ionicons name="clipboard" color={color} size={28} />
            ),
        }}

      />
       <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon :({color}) => (
                <Ionicons name="person" color={color} size={28} />
            ),
        }}


      />
       <Tab.Screen
          name="Wallet"
          component={Wallet}
          options={{
            tabBarLabel: 'Wallet',
            tabBarIcon :({color}) => (
                <Ionicons name="wallet" color={color} size={28} />
            ),
        }}
      />
    </Tab.Navigator>
  )
}

export default function Route() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode='none'>

      <Stack.Screen  name="MobileNumber" component={MobileNumber} />
      <Stack.Screen  name="MobileOTP" component={MobileOTP} />
      <Stack.Screen  name="Profile" component={Profile} />
      <Stack.Screen  name="Home" component={Home} />
      <Stack.Screen  name="Bookings" component={Bookings} />
      <Stack.Screen  name="Wallet" component={Wallet} />
      <Stack.Screen  name="ServiceAndRepair" component={ServiceAndRepair} />
      <Stack.Screen  name="AddService" component={AddService} />
      <Stack.Screen  name="TabScreen" component={BottomTabScreens} />
      <Stack.Screen name="Ongoing" component={Ongoing}/>
      <Stack.Screen name="History" component={History} />
      <Stack.Screen  name="Pay" component={Pay}/>

    </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tab:{
    fontSize:20
  }
});