import {Dimensions, StyleSheet} from 'react-native';

const styleCart = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height - 140,
    gap: 20,
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    marginTop: 8,
    paddingHorizontal: 3,
    backgroundColor: 'white',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  card_img: {
    width: 100,
    height: 100,
  },
  card_content: {
    width: '45%',
    paddingHorizontal: 3,
    paddingVertical: 10,
    justifyContent: 'space-between',
  },
  extra: {width: '100%', padding: 5},
  menuDot: {
    alignSelf: 'flex-end',
  },
  dot_menu: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'flex-end',
  },
  addButton: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  footer: {
    marginTop: 10,
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    padding: 10,
    flexDirection: 'row',
  },
  btn_out: {
    position: 'absolute',
    top: '100%',
    height: 80,
    padding: 12,
    backgroundColor: 'white',
    width: Dimensions.get('window').width,
  },
  btn_text: {
    color: 'white',
  },
  btn_text_dark: {
    color: 'black',
  },
  btn: {
    marginVertical : 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    padding: 10,
    gap: 5,
    alignItems: 'center',
  },
});

export default styleCart;
