import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import Login from './Login';
const Stack = createStackNavigator();

export default function Account() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          options={{headerShown: false}}
          name="Login"
          component={Login}
        />
      </Stack.Navigator>
    </SafeAreaView>
  );
}
