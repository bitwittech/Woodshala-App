import {Dimensions, StyleSheet} from 'react-native';

const styleBlog = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginBottom : 70,
  },
  card: {
    marginBottom: 15,
    backgroundColor: 'white',
    borderWidth: 1,
    elevation: 2,
    borderColor: '#d4d4d4',
  },
  img: {
    alignSelf: 'center',
    width: '100%',
    height: 280,
    objectFit: 'fill',
  },
  content: {
    flex: 1,
    padding: 8,
    overflow: 'hidden',
  },
  time: {
    position: 'absolute',
    right: '2%',
    bottom: '2%',
    padding: 5,
  },
});

export default styleBlog;
