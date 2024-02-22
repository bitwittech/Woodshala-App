import {Dimensions, StyleSheet} from 'react-native';

const ScreenWidth = Dimensions.get('window').width;
const ScreenHeight = Dimensions.get('window').height;
let styleHome = StyleSheet.create({
  container: {
    width: '100%',
    gap: 10,
  },
  searchBar: {
    marginTop: 10,
    borderColor: 'grey',
    flexDirection: 'row',
    backgroundColor: 'white',
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
    fontWeight: '700',
    textAlign: 'center',
  },
  insightContent: {
    fontSize: 15,
    paddingHorizontal: 11,
    textAlign: 'center',
  },
  SOC_Tile: {
    height: 130,
    gap : 10,
    justifyContent : 'center',
    alignItems : 'center'
  },
  SOC_Img: {
    width: 95,
    borderRadius : 100,
    height: 95,
    objectFit: 'contain',
  },
  SOC_Text: {
    fontSize: 20,
    color: 'black',
    fontWeight: '400',
  },
});
export default styleHome;
