import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';

const ScreenWidth = Dimensions.get('window').width;
let styleHarder = StyleSheet.create({
  container: {
    width: ScreenWidth,
    flexDirection: 'row',
    backgroundColor: '#FEF5E7',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTitle :{
    fontSize : 21,
   },
  headerImg: {
    width: 180,
  },
  img: {
    width: '100%',
    objectFit: 'contain',
  },
});
export default styleHarder;
