import {Image, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import styleList from '../../assets/styles/style_listing';
import {Text} from 'react-native-paper';
import image from '../../assets/image/Home/sec3img.webp';
import {ScrollView} from 'react-native-gesture-handler';
const Listing = () => {
  return (
    <SafeAreaView>
      <ScrollView
        style={{height: '100%'}}
        contentContainerStyle={styleList.container}>
        {products.map((row, i) => (
          <ProductCard index={i} item={row} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

function ProductCard({item, index}) {
  const formatter = new Intl.NumberFormat('en-IN', {
    maximumSignificantDigits: 3,
  });
  return (
    <View style={styleList.card} key={index}>
      <Image style={styleList.img} source={item.img} />
      <Text style={styleList.title} numberOfLines={2} variant="bodyLarge">
        {item.title}{' '}
      </Text>
      <Text style={styleList.price} variant="titleMedium">
        ₹{formatter.format(item.price)}
      </Text>
    </View>
  );
}

const products = [
  {title: 'Wooden Box set 2', img: image, price: 12000},
  {title: 'Wooden Box set 2', img: image, price: 22000},
  {title: 'Wooden Box set 2', img: image, price: 18000},
  {title: 'Wooden Box set 2', img: image, price: 22000},
  {title: 'Wooden Box set 2', img: image, price: 18000},
  {title: 'Wooden Box set 2', img: image, price: 22000},
  {title: 'Wooden Box set 2', img: image, price: 18000},
  {title: 'Wooden Box set 2', img: image, price: 28000},
];
export default Listing;
