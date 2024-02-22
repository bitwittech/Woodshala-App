import * as React from 'react';
import Home from '../Home/Home';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import {View, Image} from 'react-native';
import {IconButton} from 'react-native-paper';
import styleHarder from '../../assets/styles/style_header';
import logo from '../../assets/image/Home/logo_spell.png';

const DrawerNav = createDrawerNavigator();

export default function Drawer() {
  const navigation = useNavigation();

  function handleDrawer() {
    try {
      navigation.dispatch(DrawerActions.openDrawer());
    } catch (error) {
      console.log(error);
    }
  }

  const headerHome = {
    headerShown: true,
    headerTitle: '',
    headerLeft: () => <HeaderLeft handleDrawer={handleDrawer} />,
  };
  return (
    <DrawerNav.Navigator initialRouteName="Home">
      <DrawerNav.Screen options={headerHome} name="Home" component={Home} />
    </DrawerNav.Navigator>
  );
}

function HeaderLeft({handleDrawer}) {
  const color = '#682d2d';
  return (
    <View style={styleHarder.container}>
      <View>
        <IconButton
          iconColor={color}
          icon="menu"
          size={30}
          onPress={() => handleDrawer()}
        />
      </View>
      <View style={styleHarder.headerImg}>
        <Image style={styleHarder.img} source={logo} />
      </View>
      <View style={styleHarder.mic}>
        <IconButton
          iconColor={color}
          icon="cart"
          size={30}
          onPress={handleDrawer}
        />
      </View>
    </View>
  );
}
