import {View, TouchableOpacity, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from '../Home/Home';
import {IconButton} from 'react-native-paper';
import Collection from '../Collection/Collection';
import {setRoute} from '../../redux/feature/generalSlice';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {theme} from '../../../App';
import Notification from '../Notification/Notification';
import Account from '../User/Account';
import Blog from '../Blog/Blog';
const Tab = createBottomTabNavigator();

const BottomNav = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const screens = [
    {name: 'Home', component: Home},
    {name: 'Collections', component: Collection},
    {name: 'Account', component: Account},
    {name: 'Notifications', component: Notification},
    {name: 'Blog', component: Blog},
  ];
  const screenOptions = {
    tabBarShowLabel: false,
    // headerShown: false,
    headerTitleAlign: 'center',
    tabBarLabelStyle: {
      fontSize: 15,
    },
    tabBarStyle: {
      position: 'absolute',
      textAlign: 'center',
      bottom: 0,
      left: 0,
      right: 0,
      elevation: 1,
      height: 55,
      backgroundColor: theme.colors.secondary,
    },
  };
  const tabButton = {
    tabBarShowLabel: true,
  };
  function handleIcon(focused, name) {
    const icons = {
      Home: ['home', 'home-outline'],
      Collections: ['shopping', 'shopping-outline'],
      Notification: ['bell', 'bell-outline'],
      Blog: ['post', 'post-outline'],
      Account: ['account', 'account-outline'],
      Notifications: ['bell', 'bell-outline'],
    };

    return (
      <TouchableOpacity>
        <IconButton
          onPress={() => {
            dispatch(setRoute({name}));
            navigation.navigate(name);
          }}
          style={{
          }}
          iconColor={theme.colors.primary}
          icon={focused ? icons[name][0] : icons[name][1]}
          size={focused ? 33 : 25}
        />
      </TouchableOpacity>
    );
  }

  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}
      screenOptions={({route}) => ({
        ...tabButton,
        tabBarLabel: ({focused}) => {
          return (
            <Text
              style={{
                fontSize: 13,
                fontWeight: '600',
                color: theme.colors.primary,
              }}>
              {focused ? route.name : ''}
            </Text>
          );
        },
        tabBarActiveTintColor: theme.colors.primary,
        headerShown: false,
        tabBarButton: props => (
          <TouchableOpacity
            {...props}
            onPress={() => {
              dispatch(setRoute({name: route.name}));
              props.onPress();
            }}
          />
        ),
        ...screenOptions,
      })}
      initialRouteName="Home">
      {screens.map((row, index) => (
        <Tab.Screen
          key={'s'+index}
          name={row.name}
          options={{
            ...tabButton,
            tabBarIcon: ({focused}) => handleIcon(focused, row.name),
          }}
          component={row.component}
        />
      ))}
    </Tab.Navigator>
  );
};

export default BottomNav;
