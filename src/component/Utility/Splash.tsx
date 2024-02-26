import {View, Text, Image} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import styleSplash from '../../assets/styles/style_Splash';
import logo from '../../assets/image/splash/logo.png';
import {ActivityIndicator, Button} from 'react-native-paper';
import { useSelector } from 'react-redux';
const Splash = () => {
  let navigator = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigator.navigate('Main');
    }, 2000);
  }, []);
  return (
    <View style={styleSplash.container}>
      <Image source={logo} style={styleSplash.img} />
      <View style={styleSplash.loader}>
        <ActivityIndicator size={30} animating={true} />
      </View>
    </View>
  );
};

export default Splash;
