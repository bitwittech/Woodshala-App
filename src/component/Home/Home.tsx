import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styleHome from '../../assets/styles/style_home';
import {ScrollView} from 'react-native-gesture-handler';
import {IconButton} from 'react-native-paper';
import AutoSlider from '../Utility/AutoSlider';
import YoutubePlayer from 'react-native-youtube-iframe';

// image
import bannerSec2 from '../../assets/image/Home/sec2banner.jpg';
import sec3Img1 from '../../assets/image/Home/sec3img.webp';
import b1 from '../../assets/image/Home/banner1.webp';
import b2 from '../../assets/image/Home/banner2.webp';
import p1 from '../../assets/image/Home/partner.png';
import p2 from '../../assets/image/Home/partner2.png';
import p3 from '../../assets/image/Home/partner3.png';
import p4 from '../../assets/image/Home/partner4.png';
import p5 from '../../assets/image/Home/partner5.png';
import p6 from '../../assets/image/Home/partner6.png';
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
      <ScrollView style={{height: 'auto', marginBottom: 100}}>
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
        {/* Shop By Cabinet */}
        <Slider heading={'Cabinet'} data={Cabinet} Tile={Cabinet_Tile} />
        {/* Shop By Cabinet */}
        <Slider heading={'Dining Set'} data={Cabinet} Tile={Cabinet_Tile} />
        {/* Video  */}
        <YoutubePlayer height={230} play={true} videoId={'OF2x1fx2rDE'} />
        {/* banners  */}
        <AutoSlider items={Banner} widthBy={2.5} Tile={Banner_Tile} />
        {/* Shop By CateGory */}
        <Slider heading={'Featured In'} data={Featured} Tile={FT_Tile} />
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
export function FT_Tile({data}) {
  let {id, title, img} = data;
  return (
    <View style={styleHome.FT_Tile} key={id}>
      <Image style={styleHome.FT_Img} source={img} />
    </View>
  );
}
export function Cabinet_Tile({data}) {
  let {id, title, img, price} = data;
  const formatter = new Intl.NumberFormat('en-IN', {
    maximumSignificantDigits: 3,
  });

  return (
    <View style={styleHome.Cabinet_Tile} key={id}>
      <Image style={styleHome.Cabinet_Img} source={img} />
      <Text style={styleHome.Cabinet_Text}>{title}</Text>
      <Text style={styleHome.Cabinet_Price}>₹{formatter.format(price)}</Text>
    </View>
  );
}
export function Banner_Tile({index}) {
  let {key, img} = Banner[index];
  return (
    <View key={key} style={styleHome.bannerSlide}>
      <Image style={styleHome.bannerSlide_img} source={img} />
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
let Banner = [
  {
    key: 'b1',
    img: b1,
  },
  {
    key: 'b2',
    img: b2,
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

let Cabinet = [
  {id: 'o1', price: 40000, img: sec3Img1, title: 'Bedroom'},
  {id: 'o2', price: 40000, img: sec3Img1, title: 'Dining'},
  {id: 'o3', price: 40000, img: sec3Img1, title: 'Dining'},
  {id: 'o4', price: 40000, img: sec3Img1, title: 'Bedroom'},
  {id: 'o5', price: 40000, img: sec3Img1, title: 'Dining'},
];

let Featured = [
  {id: 'o1', img: p1},
  {id: 'o2', img: p2},
  {id: 'o3', img: p3},
  {id: 'o4', img: p4},
  {id: 'o5', img: p5},
  {id: 'o6', img: p6},
];

export default Home;
