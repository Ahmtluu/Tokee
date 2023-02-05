import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {Keyboard} from 'react-native';
//Screens
import Home from './src/screens/Home';
import Messages from './src/screens/Messages';
import Market from './src/screens/Market';
import Trade from './src/screens/Trade';
import Wallet from './src/screens/Wallet';

const Tab = createBottomTabNavigator();

const App = () => {
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    console.log(isKeyboardVisible);
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true); // or some other action
        console.log(isKeyboardVisible);
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false); // or some other action
        console.log(isKeyboardVisible);
      },
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            switch (route.name) {
              /*If you wanna change icon when pressed another tab */
              case 'Home':
                iconName = focused ? 'home' : 'home';
                break;
              case 'Market':
                iconName = focused ? 'activity' : 'activity';
                break;
              case 'Trade':
                iconName = focused ? 'pie-chart' : 'pie-chart';
                break;
              case 'Messages':
                iconName = focused ? 'message-circle' : 'message-circle';
                break;

              default:
                break;
            }
            // You can return any component that you like here!
            return <FeatherIcon name={iconName} size={26} color={color} />;
          },
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {height: 60, elevation: 0},
          tabBarShowLabel: false,
          headerShown: false,
          showLabel: false,
          tabBarHideOnKeyboard: isKeyboardVisible,
        })}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Market" component={Market} />
        <Tab.Screen name="Trade" component={Trade} />
        <Tab.Screen name="Messages" component={Messages} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
