import {Dimensions, StyleSheet} from 'react-native';
import {color} from '../../../App';

const styleDetail = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height,
    padding: 10,
  },
  flex_row_space: {
    paddingTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  flex_row_gap: {
    paddingTop: 10,
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  img_container: {},
  product_img: {
    width: '100%',
    height: '100%',
    objectFit: 'fill',
  },
  review_text: {
    color: '#682d2d',
    fontWeight: '700',
  },
  fieldContainer: {
    paddingVertical: 10,
    paddingHorizontal: 5,
    gap: 10,
  },
  parameters_input: {
    backgroundColor: '#e6e6e6',
    height: 45,
  },
});

export default styleDetail;
