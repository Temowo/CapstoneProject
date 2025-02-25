import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/home/HomeScreen';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './AuthStack';
import DashboardNavigator from './DashboardNavigator';

function AppNavigator() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Onboarding"
        screenOptions={{headerShown: false}}>
        <Stack.Screen component={AuthStack} name="Onboarding" />
        <Stack.Screen component={DashboardNavigator} name="Dashboard" />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
