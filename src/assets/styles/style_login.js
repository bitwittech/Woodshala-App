import {Dimensions, StyleSheet} from 'react-native';
import {color} from '../../../App';

const ScreenHeight = Dimensions.get('window').height;

const styleLogin = StyleSheet.create({
  container: {
    height: ScreenHeight,
    padding: 15,
    gap: 10,
    paddingTop: ScreenHeight / 20,
  },
  logo: {
    width: '100%',
    height: 100,
  },
  logo_img: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  },
  field: {
    backgroundColor: 'transparent',
  },
  button: {
    borderRadius: 5,
    borderWidth: 1,
    padding: 3,
  },
  btn_text: {
    textAlign: 'center',
    color: 'white',
    fontWeight: '300',
    fontSize: 17,
  },
  form: {
    gap: 15,
    height: ScreenHeight,
  },
  helperText_container: {
    flexWrap: 'nowrap',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  helperText: {
    paddingHorizontal: 20,
    color: 'grey',
    textAlign: 'center',
  },
  reg_Button: {
    position: 'absolute',
    alignSelf: 'center',
    width: '100%',
    bottom: '20%',
  },
  root: {flex: 1, padding: 20},
  title: {textAlign: 'center', fontSize: 30},
  codeFieldRoot: {marginTop: 20},
  cell: {
    width: 40,
    height: 40,
    lineHeight: 38,
    fontSize: 24,
    borderWidth: 0,
    borderBottomWidth: 1,
    borderColor: '#00000030',
    textAlign: 'center',
  },
  focusCell: {
    borderColor: '#000',
  },
  text: {
    fontSize: 15,
    color: 'black',
  },
});

export default styleLogin;
