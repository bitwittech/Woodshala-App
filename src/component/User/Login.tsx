import {View, Text, Image} from 'react-native';
import React, {useState} from 'react';
import styleLogin from '../../assets/styles/style_login';

// image
import logo from '../../assets/image/splash/logo.png';
import {Button, Divider, TextInput} from 'react-native-paper';
import {color} from '../../../App';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const [screen, setScreen] = useState('phone');
  const navigation = useNavigation();
  return (
    <View style={styleLogin.container}>
      <View style={styleLogin.logo}>
        <Image source={logo} style={styleLogin.logo_img} />
      </View>
      <View style={styleLogin.form}>
        {screen === 'email' ? (
          <LogWithEmail setScreen={setScreen} />
        ) : screen === 'phone' ? (
          <LogWithPhone setScreen={setScreen} />
        ) : (
          <Verify setScreen={setScreen} />
        )}
        {/* Register */}
        {screen !== 'verify' && (
          <View style={styleLogin.reg_Button}>
            <Button
              onPress={()=>navigation.navigate('Register')}
              mode="outlined"
              buttonColor="primary"
              style={styleLogin.button}>
              <Text style={{...styleLogin.btn_text, color: 'black'}}>
                Don't have an account?
              </Text>
              <Text style={{...styleLogin.btn_text, color: color.primary}}>
                {' '}
                REGISTER
              </Text>
            </Button>
          </View>
        )}
      </View>
    </View>
  );
};

function LogWithEmail({setScreen}) {
  return (
    <>
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
        <Text style={styleLogin.btn_text}>Login</Text>
      </Button>
      <View style={styleLogin.helperText_container}>
        <Text style={styleLogin.helperText}>
          Having trouble?
          <Text
            style={{
              ...styleLogin.helperText,
              fontWeight: '500',
              color: color.primary,
            }}>
            {' '}
            Reset your password
          </Text>{' '}
        </Text>
      </View>
      <View style={styleLogin.helperText_container}>
        <Divider style={{flex: 1}} bold={true} />
        <Text style={styleLogin.helperText}>or login with</Text>
        <Divider bold={true} style={{flex: 1}} />
      </View>
      {/* Email button  */}
      <Button
        onPress={() => setScreen('phone')}
        icon={'phone'}
        mode="outlined"
        buttonColor="primary"
        style={styleLogin.button}>
        <Text style={{...styleLogin.btn_text, color: color.primary}}>
          Phone
        </Text>
      </Button>
    </>
  );
}

function LogWithPhone({setScreen}) {
  return (
    <>
      <TextInput
        style={styleLogin.field}
        label="Phone Number"
        keyboardType="numeric"
        mode="outlined"
        onChangeText={text => console.log(text)}
      />
      <Button
        onPress={() => setScreen('verify')}
        buttonColor={color.primary}
        style={styleLogin.button}>
        <Text style={styleLogin.btn_text}>Continue</Text>
      </Button>
      <View style={styleLogin.helperText_container}>
        <Divider style={{flex: 1}} bold={true} />
        <Text style={styleLogin.helperText}>or login with</Text>
        <Divider bold={true} style={{flex: 1}} />
      </View>
      {/* Email button  */}
      <Button
        onPress={() => setScreen('email')}
        icon={'email'}
        mode="outlined"
        buttonColor="primary"
        style={styleLogin.button}>
        <Text style={{...styleLogin.btn_text, color: color.primary}}>
          Email
        </Text>
      </Button>
    </>
  );
}

function Verify({setScreen}) {
  const CELL_COUNT = 6;
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  return (
    <>
      <View style={{gap: 15}}>
        <Text style={styleLogin.text}>Confirm Your Number</Text>
        <Text>Enter the 6 digit code sent to you at</Text>
        <Text>+918302043259</Text>
        <CodeField
          ref={ref}
          {...props}
          caretHidden={false} // when users can't paste a text value, because context menu doesn't appear
          value={value}
          onChangeText={setValue}
          cellCount={CELL_COUNT}
          rootStyle={styleLogin.codeFieldRoot}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          renderCell={({index, symbol, isFocused}) => (
            <Text
              key={index}
              style={[styleLogin.cell, isFocused && styleLogin.focusCell]}
              onLayout={getCellOnLayoutHandler(index)}>
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          )}
        />
        <Button
          onPress={() => setScreen('phone')}
          style={styleLogin.button}
          mode="contained">
          <Text style={styleLogin.btn_text}>Submit</Text>
        </Button>
        <Text style={styleLogin.text}>Resend Code</Text>
      </View>
    </>
  );
}

export default Login;
