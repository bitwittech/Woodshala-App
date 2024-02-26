import {Dimensions, StyleSheet} from 'react-native';

const styleList = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  card: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#d4d4d4',
    width: Dimensions.get('window').width / 2,
    height: 280,
    borderRadius: 0,
  },
  img: {
    width: '100%',
    height: 200,
    objectFit: 'contain',
  },
  title: {
    padding: 5,
    textAlign: 'center',
  },
  price: {
    position: 'absolute',
    bottom: '2%',
    textAlign: 'center',
  },
});

export default styleList;
