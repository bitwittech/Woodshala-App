import * as React from 'react';
import Home from '../Home/Home';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {DrawerActions, useNavigation, useRoute} from '@react-navigation/native';
import {View, Image} from 'react-native';
import {IconButton, Text} from 'react-native-paper';
import styleHarder from '../../assets/styles/style_header';
import logo from '../../assets/image/Home/logo_spell.png';
import BottomNav from './BottomNav';
import {useSelector} from 'react-redux';

const DrawerNav = createDrawerNavigator();

export default function Drawer() {
  const navigation = useNavigation();
  const route = useRoute();
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
    headerLeft: () => (
      <HeaderLeft handleDrawer={handleDrawer} name={route.name} />
    ),
  };
  return (
    <DrawerNav.Navigator initialRouteName="Bottom">
      <DrawerNav.Screen
        options={headerHome}
        name="Bottom"
        component={BottomNav}
      />
    </DrawerNav.Navigator>
  );
}

function HeaderLeft({handleDrawer}) {
  const {name} = useSelector(state => state.generalSlice);

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
      {['Main', 'Home'].includes(name) ? (
        <View style={styleHarder.headerImg}>
          <Image style={styleHarder.img} source={logo} />
        </View>
      ) : (
        <Text style={styleHarder.headerTitle}>{name}</Text>
      )}
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
