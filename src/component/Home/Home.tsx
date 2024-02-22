import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import styleHome from '../../assets/styles/style_home';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import {Button, IconButton} from 'react-native-paper';
import AutoSlider from '../Utility/AutoSlider';

// image
import bannerSec2 from '../../assets/image/Home/sec2banner.jpg';
import sec3Img1 from '../../assets/image/Home/sec3img.webp';
import {SafeAreaView} from 'react-native-safe-area-context';
import Slider from '../Utility/Slider';
const Home = () => {
  return (
    <View style={styleHome.container}>
      {/* // search bar  */}
      <TouchableOpacity style={styleHome.searchBar}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <IconButton icon={'magnify'} />
          <View>
            <Text style={styleHome.searchText}>What are you looking for?</Text>
          </View>
        </View>
        <IconButton icon={'microphone'} />
      </TouchableOpacity>
      <ScrollView style = {{height : '100%'}}>
        {/* // offer label */}
        <AutoSlider items={offer} widthBy={9} Tile={OfferTile} />
        {/* Sec 2 banner */}
        <View style={styleHome.sec2}>
          <Image style={styleHome.sec2Img} source={bannerSec2} />
        </View>
        {/* // insight label */}
        <AutoSlider
          elevation={1}
          items={insight}
          widthBy={1.1}
          Tile={Insight}
        />
        {/* // insight label */}
        <AutoSlider
          elevation={1}
          items={insight}
          widthBy={1.1}
          Tile={Insight}
        />
        {/* // offer label */}
        <AutoSlider items={offer} widthBy={9} Tile={OfferTile} />
        {/* Shop By CateGory */}
        <Slider heading={'Shop By Category'} data={SOC} Tile={SOC_Tile} />
        {/* Shop By CateGory */}
        <Slider heading={'Dining Set'} data={SOC} Tile={SOC_Tile} />
        {/* Shop By CateGory */}
        <Slider heading={'Featured In'} data={SOC} Tile={SOC_Tile} />
      </ScrollView>
    </View>
  );
};

// Tiles ============
export function OfferTile({index}) {
  let {key, title} = offer[index];
  return (
    <View style={styleHome.offerTile} key={key}>
      <Text style={styleHome.offerText}>{title}</Text>
    </View>
  );
}
export function Insight({index}) {
  let {key, title, img, content} = insight[index];
  return (
    <View style={styleHome.insightTile} key={key}>
      <Image style={styleHome.insightImg} source={img} />
      <Text style={styleHome.insightHeading}>{title}</Text>
      <Text numberOfLines={2} style={styleHome.insightContent}>
        {content}
      </Text>
    </View>
  );
}
export function SOC_Tile({data}) {
  let {id, title, img} = data;
  return (
    <View style={styleHome.SOC_Tile} key={id}>
      <Image style={styleHome.SOC_Img} source={img} />
      <Text style={styleHome.SOC_Text}>{title}</Text>
    </View>
  );
}

// List Array ============

let offer = [
  {key: 'o1', title: '< COD upto ₹5,000 >'},
  {key: 'o2', title: '< 1 year warranty on wooden product >'},
];
let insight = [
  {
    key: 'o1',
    img: sec3Img1,
    content:
      'The coasters in the photo looked really nice and I ordered them quickly. The coasters in the photo looked really nice and I ordered them quickly.',
    title: 'Perfection By Hand',
  },
  {
    key: 'o2',
    img: sec3Img1,
    content:
      'The coasters in the photo looked really nice and I ordered them quickly. ',
    title: 'Safe Delivery Promise',
  },
];

let SOC = [
  {id: 'o1', img: sec3Img1, title: 'Bedroom'},
  {id: 'o2', img: sec3Img1, title: 'Dining'},
  {id: 'o3', img: sec3Img1, title: 'Dining'},
  {id: 'o4', img: sec3Img1, title: 'Bedroom'},
  {id: 'o5', img: sec3Img1, title: 'Dining'},
  {id: 'o6', img: sec3Img1, title: 'Dining'},
  {id: 'o7', img: sec3Img1, title: 'Dining'},
];

export default Home;
