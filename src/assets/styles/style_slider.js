import {Dimensions, StyleSheet} from 'react-native';

const ScreenWidth = Dimensions.get('window').width;
const ScreenHeight = Dimensions.get('window').height;

let styleSlider = StyleSheet.create({
  container: {
    width: ScreenWidth,
    paddingVertical : 15,
    gap : 10,
  },
  header:{
    justifyContent : 'center',
    alignItems : 'center',
  },
  heading:{
    textTransform : 'uppercase',
    color : 'black',
    fontWeight : '400',
    fontSize : 24,
  },
  slider: {
    flex: 1,
    width : '100%',
    padding: 15,
    justifyContent: 'center',
    gap: 30,
    flexDirection: 'row',
  },
});
export default styleSlider;
