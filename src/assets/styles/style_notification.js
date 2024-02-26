import {Dimensions, StyleSheet} from 'react-native';

const styleNotify = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  barContainer: {
    borderRadius: 15,
    position: 'relative',
    padding: 5,
    height: 70,
    backgroundColor: '#e6e6e6',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    gap: 5,
    height : 90,
    alignItems: 'center',
  },
  imgContainer: {
    height: 55,
    width: 55,
    borderRadius: 70 / 2,
    padding: 5,
    backgroundColor: 'transparent',
    justifyContent: 'center',
  },
  img: {
    alignSelf: 'center',
    width: '100%',
    height: 40,
    objectFit: 'contain',
  },
  content: {
    flex : 1,
    overflow: 'hidden',
  },
  time: {
    position: 'absolute',
    right: '2%',
    bottom: '2%',
    padding: 5,
  },
});

export default styleNotify;
