import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import Agendamento from './screen/Agendamento';
const Stack = createNativeStackNavigator ();
import Paciente from './screen/Paciente';
import Home from './screen/Home';

export default function App() {
  return (
  <NavigationContainer>
    <Stack.Screen name="Paciente" component={Paciente} options={{headerShown:false}}/>
    <Stack.Screen name="Agendamento" component={Agendamento}/>
    <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
  </NavigationContainer>
  );
}


