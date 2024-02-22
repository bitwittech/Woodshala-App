import {StyleSheet} from 'react-native';

let styleSplash = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  img: {
    alignSelf: 'center',
    width: 150,
    height: 150,
  },
  loader: {
    position: 'absolute',
    alignSelf : 'center',
    bottom: '5%',
  },
});
export default styleSplash;
