import React from 'react';
import {ScrollView, View, Text} from 'react-native';
import stylesSlider from '../../assets/styles/style_slider';

const Slider = ({data, Tile, heading}) => {
  return (
    <View style={stylesSlider.container}>
      <View style={stylesSlider.header}>
        <Text style={stylesSlider.heading}>{heading}</Text>
      </View>
      <ScrollView horizontal style={{width: '100%'}}>
        <View style={stylesSlider.slider}>
          {data.map((item, index) => (
            <Tile key={index} data={item} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Slider;
