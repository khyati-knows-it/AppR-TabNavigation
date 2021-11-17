import React from 'react';
import {View, StyleSheet, Text} from'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ProfileScreen from '../screens/ProfileScreen';
import ContactsScreen from '../screens/ContactsScreen';
import CameraScreen from '../screens/CameraScreen';
import ProductListScreen from '../screens/ProductListScreen';

const Tab= createBottomTabNavigator();

const BottomTabNavigator =()=>{
    return(
      <Tab.Navigator 
            labeled ={false} 
            screenOptions={({route})=> ({
            tabBarIcon:({focused,color,size}) =>{
              let iconName;
              if(route.name==="CameraScreen"){
                  iconName=focused?'camera':'camera-outline';
              }
              else if(route.name==="ProductListScreen"){
                  iconName=focused?'list':'list-outline'; 
              }
              else if(route==="ContactsScreen"){
                  iconName=focused?'contacts':'contacts-outline';
              }
              else if(route==="ProfileScreen"){
                  iconName=focused?'contact':'contact-outline';
              }
              return <Ionicons name={iconName} size={size} color={color}/>
          },
        })}
          tabBarOptions={{
              activeTintColor:'#d0e798',
              inactiveTintColor:'black',
        }}>
        <Tab.Screen name="CameraScreen" component={CameraScreen}/>
        <Tab.Screen name="ProductListScreen" component={ProductListScreen}/>
        <Tab.Screen name="ContactsScreen" component={ContactsScreen}/>
        <Tab.Screen name="ProfileScreen" component={ProfileScreen}/>
      </Tab.Navigator>
    )
}

export default BottomTabNavigator;
