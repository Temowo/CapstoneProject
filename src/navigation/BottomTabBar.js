import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeIcon from '../assets/svg/homeIcon.svg';
import FavoritesIcon from '../assets/svg/heart.svg';
import SurpriseIcon from '../assets/svg/cubeIcon.svg';
import CartIcon from '../assets/svg/cartIcon.svg';
import UserIcon from '../assets/svg/userIcon.svg';
import LibraryScreen from '../screens/library/Screen';
import SurprisesScreen from '../screens/surprises/Screen';
import CartScreen from '../screens/cart/Screen';
import ProfileScreen from '../screens/profile/Screen';
import theme from '../resources/theme';
import {StyleSheet, TouchableOpacity} from 'react-native';
import BaseView from '../components/base/BaseView';
import DashboardScreen from '../screens/home/DashboardScreen';

function CustomTabBarButton({children, onPress}) {
    return (
      <TouchableOpacity onPress={onPress} style={[styles.centerButton, styles.glow]}>
        <BaseView style={{paddingBottom: 5}}>{children}</BaseView>
      </TouchableOpacity>
    );
  }

const Tab = createBottomTabNavigator();
export default function BottomTabBar() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          elevation: 0,
          borderRadius: theme.borderRadii.m,
          height: 90,
          ...styles.glow,
        },
        tabBarActiveTintColor: theme.colors.brightPink,
        tabBarInactiveTintColor: theme.colors.grayText,
      }}>
      <Tab.Screen
        name="Home"
        options={{
          tabBarIcon: ({focused}) => (
            <BaseView>
              <HomeIcon width={20} height={20} style={{ color: focused ? theme.colors.brightPink : theme.colors.grayText }}/>
            </BaseView>
          ),
        }}
        component={DashboardScreen}
      />
      <Tab.Screen
        name="Favorites"
        options={{
          tabBarIcon: ({focused}) => (
            <BaseView>
              <FavoritesIcon width={20} height={20} style={{ color: focused ? theme.colors.brightPink : theme.colors.grayText }}/>
            </BaseView>
          ),
        }}
        component={LibraryScreen}
      />
      <Tab.Screen
        name="Surprise"
        options={{
          tabBarIcon: ({focused}) => (
            <BaseView>
                <SurpriseIcon width={20} height={20} style={{color: theme.colors.white}} />
            </BaseView>
          ),
          tabBarButton: (props) => (
            <CustomTabBarButton{...props} />
          )
        }}
        component={SurprisesScreen}
      />
      <Tab.Screen
        name="Cart"
        options={{
          tabBarIcon: ({focused}) => (
            <BaseView>
              <CartIcon width={20} height={20} style={{ color: focused ? theme.colors.brightPink : theme.colors.grayText }}/>
            </BaseView>
          ),
        }}
        component={CartScreen}
      />

      <Tab.Screen
        name="Profile"
        options={{
          tabBarIcon: ({focused}) => (
            <BaseView>
              <UserIcon width={20} height={20} style={{ color: focused ? theme.colors.brightPink : theme.colors.grayText }}/>
            </BaseView>
          ),
        }}
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  glow: {
    shadowColor: theme.colors.brightPink,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4.5,
    elevation: 5,
  },

  centerButton: {
    top: -30,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 10,
    alignSelf: 'center',
    backgroundColor: '#D81B60',
    width: 60,
    height: 60,
    borderRadius: 30,
    elevation: 5,
  },
  
});
