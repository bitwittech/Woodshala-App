import {StyleSheet} from 'react-native';

const styleDrawer = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    gap: 20,
    backgroundColor: '#FEF5E7',
    height: 230,
  },
  profileImg_container: {
    marginTop: 20,
    width: 130,
    height: 130,
    borderRadius: 200 / 2,
    backgroundColor: 'black',
    alignSelf: 'center',
    overflow: 'hidden',
  },
  profileImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
});

export default styleDrawer;
