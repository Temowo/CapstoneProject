import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabBar from "./BottomTabBar";

const Stack = createNativeStackNavigator();

function DashboardNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="TabBar"
      screenOptions={{headerShown: false}}>
      <Stack.Screen component={BottomTabBar} name="TabBar" />
    </Stack.Navigator>
  );
}

export default DashboardNavigator;
