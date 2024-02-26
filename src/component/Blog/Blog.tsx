import {View, Image} from 'react-native';
import React from 'react';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import styleBlog from '../../assets/styles/style_blog';
// image
import image from '../../assets/image/Home/sec3img.webp';
import {Text} from 'react-native-paper';
const Blog = () => {
  return (
    <ScrollView style={styleBlog.container}>
      {BlogArr.map((row, i) => (
        <BlogCard item={row} key={i} />
      ))}
    </ScrollView>
  );
};

function BlogCard({item}) {
  return (
    <TouchableOpacity style={styleBlog.card}>
      <Image source={item.img} style={styleBlog.img} />
      <View style={styleBlog.content}>
        <Text numberOfLines={2} variant="titleLarge">
          {item.title}
        </Text>
        <Text numberOfLines={3} variant="bodyLarge">
          {item.content}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const BlogArr = [
  {
    title: 'First Blog',
    content: 'First Blog is all about making of furtinure and hadycraft.',
    img: image,
  },
  {
    title: 'Second Blog',
    content: 'First Blog is all about making of furtinure and hadycraft.',
    img: image,
  },
];

export default Blog;
