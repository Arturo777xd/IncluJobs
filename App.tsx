/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */




import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './nav/login';
import Registro from './nav/registro';

import { AccesibilidadProvider } from './context/AccesibilidadContext';
import RecuperarPassword from './nav/RecuperarPassword';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <AccesibilidadProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Registro" component={Registro} />
          <Stack.Screen name="RecuperarPassword" component={RecuperarPassword} />
        </Stack.Navigator>
      </NavigationContainer>
    </AccesibilidadProvider>
  );
}



