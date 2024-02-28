import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Splash from './src/component/Utility/Splash';
import {NavigationContainer} from '@react-navigation/native';
import {DefaultTheme, PaperProvider} from 'react-native-paper';
import {StatusBar, LogBox} from 'react-native';
import Drawer from './src/component/Utility/Drawer';
import 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import Register from './src/component/User/Register';
import Listing from './src/component/Product/Listing';
import {useSelector} from 'react-redux';
import Cart from './src/component/Cart/Cart';
import Wishlist from './src/component/Cart/Wishlist';
import CusModal from './src/component/Utility/CusModal';
const Stack = createStackNavigator();
export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#682d2d',
    secondary: '#FEF5E7',
  },
};

export const color = {
  primary: '#682d2d',
  secondary: '#FEF5E7',
};

export default function App() {
  LogBox.ignoreAllLogs();
  let {catagories} = useSelector(
    (state: {generalSlice: any}) => state.generalSlice,
  );

  return (
    <PaperProvider theme={theme}>
      <SafeAreaView style={{flex: 1}}>
        <StatusBar
          barStyle="dark-content"
          animated={true}
          backgroundColor="#FEF5E7"
        />
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: {
                backgroundColor: theme.colors.secondary,
              },
            }}
            initialRouteName="Splash">
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
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen
              options={{
                headerTitle: catagories,
              }}
              name="Product"
              component={Listing}
            />
            <Stack.Screen name="Cart" component={Cart} />
            <Stack.Screen name="Wishlist" component={Wishlist} />
          </Stack.Navigator>
        </NavigationContainer>
        <CusModal />
      </SafeAreaView>
    </PaperProvider>
  );
}
