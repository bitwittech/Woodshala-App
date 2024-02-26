import {Image, View} from 'react-native';
import React from 'react';
import styleNotify from '../../assets/styles/style_notification';
import {Text} from 'react-native-paper';
// image
import defaultImg from '../../assets/image/other/notification.png';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
const Notification = () => {
  return (
    <ScrollView style={styleNotify.container}>
      {Notifications.map((row, index) => (
        <NotificationBar key={index} item={row} />
      ))}
    </ScrollView>
  );
};

function NotificationBar({item}) {
  return (
    <TouchableOpacity
      onPress={() => console.log(item.navigate)}
      style={styleNotify.barContainer}>
      <View style={styleNotify.imgContainer}>
        <Image source={item.img || defaultImg} style={styleNotify.img} />
      </View>
      <View style={styleNotify.content}>
        <Text numberOfLines={2} variant="bodyLarge">
          {item.text}
        </Text>
      </View>
      <View style={styleNotify.time}>
        <Text numberOfLines={1} variant="bodySmall">
          {item.time}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const Notifications = [
  {
    img: defaultImg,
    text: ' Hello, Yashwant Sahu your has been dispatched.',
    time: ' 1 Jan 2024 at 05:00 am',
    navigate: 'asdf',
  },
];

export default Notification;
