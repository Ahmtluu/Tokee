import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome5';
//Screens
import Home from './src/screens/Home';
import EasyBuySell from './src/screens/EasyBuySell';
import Market from './src/screens/Market';
import Trade from './src/screens/Trade';
import Wallet from './src/screens/Wallet';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            switch (route.name) {
              case 'Home':
                iconName = focused ? 'home' : 'home';
                break;
              case 'Market':
                iconName = focused ? 'storefront' : 'storefront-outline';
                break;
              case 'Trade':
                iconName = focused ? 'home' : 'fan';
                break;
              case 'EasyBuySell':
                iconName = focused ? 'fan' : 'fan';
                break;
              case 'Wallet':
                iconName = focused ? 'fan' : 'fan';
                break;
              default:
                break;
            }
            if (iconName === 'Trade') {
              return (
                <FontAwesomeIcons name={iconName} size={size} color={color} />
              );
            }
            // You can return any component that you like here!
            return (
              <MaterialCommunityIcons
                name={iconName}
                size={size}
                color={color}
              />
            );
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
        })}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Market" component={Market} />
        <Tab.Screen name="Trade" component={Trade} />
        <Tab.Screen name="EasyBuySell" component={EasyBuySell} />
        <Tab.Screen name="Wallet" component={Wallet} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
