import {Image, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {Button, Divider, Icon, Text, TextInput} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView} from 'react-native-gesture-handler';
import styleDetail from '../../assets/styles/style_details';
import AutoSlider from '../Utility/AutoSlider';
// image
import image from '../../assets/image/Home/sec3img.webp';
import {StarRatingDisplay} from 'react-native-star-rating-widget';
import {PaperSelect} from 'react-native-paper-select';
const Details = () => {
  const products = [{img: image}];
  const formatter = new Intl.NumberFormat('en-IN', {
    maximumSignificantDigits: 3,
  });
  return (
      <ScrollView style={styleDetail.container}>
        {/* // Product Image Slider */}
        <AutoSlider
          Tile={ProductImage}
          widthBy={1}
          items={products}
          elevation={0}
          autoPlay={false}
        />
        {/* // product Details  */}
        <View style={{paddingTop: 10}}>
          <Text
            style={{fontWeight: '700'}}
            numberOfLines={2}
            variant="headlineSmall">
            Classic Solid Wood Stool
          </Text>
          <Text
            style={{fontWeight: '700'}}
            numberOfLines={1}
            variant="titleMedium">
            ₹{formatter.format(10000)} (Inc. of Tax & Shipping)
          </Text>
        </View>
        <View style={styleDetail.flex_row_space}>
          <StarRatingDisplay starSize={22} rating={2.5} />
          <TouchableOpacity>
            <Text style={styleDetail.review_text} variant="bodyLarge">
              Write a review
            </Text>
          </TouchableOpacity>
        </View>
        <Divider style={{paddingTop: 1, marginTop: 10}} />
        <Parameters />
        <Button style={{borderRadius: 5}} mode="contained">
          <Text
            style={{color: 'white', fontWeight: '700'}}
            variant="titleMedium">
            ADD TO CART
          </Text>
        </Button>
      </ScrollView>
  );
};

function ProductImage({index, items}) {
  const {img} = items[index];
  return (
    <View style={styleDetail.img_container}>
      <Image style={styleDetail.product_img} source={img} />
    </View>
  );
}

function Parameters() {
  const [colors, setColors] = useState({
    value: '',
    list: [
      {_id: '1', value: 'No (Same as Photo)'},
      {_id: '2', value: 'Natural Polish'},
      {_id: '3', value: 'Walnut'},
      {_id: '4', value: 'Medium Mohagany'},
      {_id: '5', value: 'Dark Mohagany'},
    ],
    selectedList: [{_id: '1', value: 'No (Same as Photo)'}],
    error: '',
  });
  return (
    <View style={styleDetail.fieldContainer}>
      <View style={{gap: 10}}>
        <Text variant="bodyMedium">
          <Icon color="grey" size={15} source={'shopping'} /> Quantity:
        </Text>
        <TextInput
          outlineColor="transparent"
          keyboardType="numeric"
          placeholder="0"
          style={styleDetail.parameters_input}
          mode="outlined"
        />
      </View>
      <View style={{gap: 10}}>
        <Text variant="bodyMedium">
          <Icon color="grey" size={15} source={'view-grid'} /> Do you want to
          change the wood polish?:
        </Text>
        <PaperSelect
          label="Select Polish"
          value={colors.value}
          onSelection={(value: any) => {
            setColors({
              ...colors,
              value: value.text,
              selectedList: value.selectedList,
              error: '',
            });
          }}
          arrayList={[...colors.list]}
          selectedArrayList={colors.selectedList}
          errorText={colors.error}
          textInputStyle={styleDetail.parameters_input}
        />
      </View>
    </View>
  );
}

export default Details;
