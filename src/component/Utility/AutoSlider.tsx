import * as React from 'react';
import {Dimensions, Text, View} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

function AutoSlider({items, widthBy, Tile, elevation, autoPlay = true}) {
  const width = Dimensions.get('window').width;
  return (
    <View style={{elevation: elevation}}>
      <Carousel
        // this line allow you to scroll the page down
        panGestureHandlerProps={{
          activeOffsetX: [-10, 10],
        }}
        loop
        width={width}
        height={width / widthBy}
        autoPlay={autoPlay ? true : false}
        data={[...items]}
        scrollAnimationDuration={1000}
        // onSnapToItem={index => console.log('current index:', index)}
        renderItem={({index}) => <Tile index={index} items={items} />}
      />
    </View>
  );
}

export default AutoSlider;
