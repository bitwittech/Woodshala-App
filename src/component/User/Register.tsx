import React from 'react';
import {View, Image} from 'react-native';
import {Button, Divider, TextInput} from 'react-native-paper';
import {Text} from 'react-native-paper';
import styleLogin from '../../assets/styles/style_login';
import logo from '../../assets/image/splash/logo.png';
import {color} from '../../../App';
import {useNavigation} from '@react-navigation/native';

function Register() {
  const navigation = useNavigation();
  return (
    <View style={styleLogin.container}>
      <View style={styleLogin.logo}>
        <Image source={logo} style={styleLogin.logo_img} />
      </View>
      <TextInput
        style={styleLogin.field}
        label="First Name"
        mode="outlined"
        onChangeText={text => console.log(text)}
      />
      <TextInput
        style={styleLogin.field}
        label="Last Name"
        mode="outlined"
        onChangeText={text => console.log(text)}
      />
      <TextInput
        style={styleLogin.field}
        label="Phone"
        keyboardType="numeric"
        mode="outlined"
        onChangeText={text => console.log(text)}
      />
      <TextInput
        style={styleLogin.field}
        label="Email"
        mode="outlined"
        onChangeText={text => console.log(text)}
      />
      <TextInput
        style={styleLogin.field}
        label="Password"
        mode="outlined"
        onChangeText={text => console.log(text)}
      />
      <Button buttonColor={color.primary} style={styleLogin.button}>
        <Text style={styleLogin.btn_text}>Register</Text>
      </Button>
      <View style={styleLogin.helperText_container}>
        <Text style={styleLogin.helperText}>
          Having an account trouble?
          <Text
            onPress={() => navigation.navigate('Account')}
            style={{
              ...styleLogin.helperText,
              fontWeight: '500',
              color: color.primary,
            }}>
            {' '}
            Login
          </Text>{' '}
        </Text>
      </View>
    </View>
  );
}

export default Register;
