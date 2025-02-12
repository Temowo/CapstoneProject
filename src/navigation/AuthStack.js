import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import HomeScreen from '../screens/HomeScreen';



const Stack = createNativeStackNavigator();

const AuthStack = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
   
    <Stack.Navigator initialRouteName={isLoggedIn ? 'Home' : 'Login'}>
      <Stack.Screen name="Login" component={LoginScreen}options={{ headerShown: false }} />  
      <Stack.Screen name="Register" component={RegisterScreen}options={{ headerShown: false }} />
      <Stack.Screen name="Home" component={HomeScreen}  options={{ headerShown: false }} />
    </Stack.Navigator>
   
  );
};

export default AuthStack;
