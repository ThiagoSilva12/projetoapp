import * as React from 'react';
import { Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();
let rs = "";
export default function Home ((route)){
    const {dados} = route.params
    rs = dados[2];
    return(
      <NavigationContainer>
          <Stack.Screen name="TelaHome" component="TelaHome"/>
          <Stack.Screen name="Agendado" component="Agendado"/>
      </NavigationContainer>
    )
}