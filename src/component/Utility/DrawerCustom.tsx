import {View, Image} from 'react-native';
import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import styleDrawer from '../../assets/styles/style_drawer';
import avatar from '../../assets/image/other/avatar.png';
import {Text} from 'react-native-paper';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {ListComp, ListObj} from '../Collection/Collection';
const DrawerCustom = props => {
  const navigation = useNavigation();
  return (
    <ScrollView style={styleDrawer.container}>
      <View style={styleDrawer.header}>
        <View style={styleDrawer.profileImg_container}>
          <Image source={avatar} style={styleDrawer.profileImg} />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Account')}>
          <Text
            numberOfLines={1}
            variant="titleLarge"
            style={{textAlign: 'center'}}>
            Sign In / Sign In
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styleDrawer.list}>
        <Text
          variant="bodyLarge"
          style={{paddingHorizontal: 10, paddingTop: 10, color :'grey'}}>
          Shop by category
        </Text>
        <ListComp ListObj={ListObj} />
      </View>
      {/* // this line while render the list the screen in Drawer component */}
      {/* <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView> */}
    </ScrollView>
  );
};

export default DrawerCustom;
