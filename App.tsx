import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Splash from './src/component/Utility/Splash';
import {NavigationContainer} from '@react-navigation/native';
import {DefaultTheme, PaperProvider} from 'react-native-paper';
import {StatusBar, LogBox} from 'react-native';
import Drawer from './src/component/Utility/Drawer';
import 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useSelector} from 'react-redux';
const Stack = createStackNavigator();

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#682d2d',
    secondary: '#FEF5E7',
  },
};

export default function App() {
  LogBox.ignoreAllLogs();

  return (
    <PaperProvider theme={theme}>
      <SafeAreaView style={{flex: 1}}>
        <StatusBar
          barStyle="dark-content"
          animated={true}
          backgroundColor="#FEF5E7"
        />
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Splash">
            <Stack.Screen
              name="Splash"
              component={Splash}
              options={{headerShown: false}}
            />
            <Stack.Screen
              options={{headerShown: false}}
              name="Main"
              component={Drawer}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </PaperProvider>
  );
}
