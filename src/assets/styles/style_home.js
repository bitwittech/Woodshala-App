import {Dimensions, StyleSheet} from 'react-native';

const ScreenWidth = Dimensions.get('window').width;
let styleHome = StyleSheet.create({
  container: {
    width: '100%',
    gap: 5,
  },
  searchBar: {
    marginTop: 7,
    borderColor: 'grey',
    flexDirection: 'row',
    backgroundColor: '#fafdff',
    width: '98%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 1,
    padding: 1,
  },
  searchText: {
    fontSize: 19,
    color: 'black',
  },
  mic: {
    alignSelf: 'flex-end',
    backgroundColor: 'black',
  },
  offerTile: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#682d2d',
  },
  offerText: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
  },
  sec2: {
    width: ScreenWidth,
    paddingHorizontal: 5,
    height: 120,
  },
  sec2Img: {
    flex: 1,
    width: '100%',
  },
  insightTile: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  insightImg: {
    width: '78%',
    height: '70%',
  },
  insightHeading: {
    fontSize: 20,
    color: 'black',
    fontWeight: '700',
    textAlign: 'center',
  },
  insightContent: {
    fontSize: 15,
    color: 'black',
    paddingHorizontal: 11,
    textAlign: 'center',
  },
  SOC_Tile: {
    height: 130,
    width: 100,
    gap: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  SOC_Img: {
    width: 95,
    borderRadius: 100,
    height: 95,
    objectFit: 'contain',
  },
  SOC_Text: {
    fontSize: 20,
    color: 'black',
    fontWeight: '400',
  },
  Cabinet_Tile: {
    height: 130,
    width: 100,
    gap: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Cabinet_Img: {width: '100%', height: 100, objectFit: 'cover'},
  Cabinet_Text: {fontSize: 16, color: 'grey'},
  Cabinet_Price: {fontSize: 18, color: 'black', fontWeight: '500'},
  FT_Tile: {
    height: 80,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  FT_Img: {
    width: 95,
    height: 95,
    objectFit: 'contain',
  },
  bannerSlide: {
    height: 150,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bannerSlide_img: {
    width: '100%',
    objectFit: 'contain',
  },
});
export default styleHome;
