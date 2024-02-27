import {Image, View} from 'react-native';
import React, {useState} from 'react';
import styleCart from '../../assets/styles/style_cart';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {Button, Divider, IconButton, Menu, Text} from 'react-native-paper';
// image
import image from '../../assets/image/other/default.png';
import {color} from '../../../App';
import {SafeAreaView} from 'react-native-safe-area-context';

const formatter = new Intl.NumberFormat('en-IN', {
  maximumSignificantDigits: 3,
});
const Cart = () => {
  return (
    <SafeAreaView>
      <ScrollView style={styleCart.container}>
        {/* // header */}
        <View style={styleCart.header}>
          <Text variant="titleMedium">Cart Items:</Text>
          <Text variant="titleMedium">
            Total :{' '}
            <Text variant="titleMedium">₹{formatter.format(10000)}</Text>
          </Text>
        </View>
        {/* // cards  */}
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        {/* // footer */}
        <View
          style={{
            marginTop: 10,
            width: '100%',
            backgroundColor: 'transparent',
          }}>
          <Text variant="bodyLarge">Price Details:</Text>
        </View>
        <View style={styleCart.footer}>
          <View>
            <Text variant="bodyLarge">Cart Total</Text>
            <Text variant="bodyLarge">Savings</Text>
            <Text variant="titleMedium">Final Price</Text>
          </View>
          <View>
            <Text numberOfLines={1} variant="bodyLarge">
              ₹{formatter.format(1000)}
            </Text>
            <Text numberOfLines={1} variant="bodyLarge">
              ₹{formatter.format(10000)}
            </Text>
            <Text numberOfLines={1} variant="titleMedium">
              ₹{formatter.format(10000)}
            </Text>
          </View>
        </View>
      </ScrollView>
      {/* CheckOut */}
      <View style={styleCart.btn_out}>
        <Button buttonColor={color.primary}>
          <Text variant="titleLarge" style={styleCart.btn_text}>
            CHECKOUT
          </Text>
        </Button>
      </View>
    </SafeAreaView>
  );
};

function ProductCard(params: type) {
  const [visible, setVisible] = useState(false);
  return (
    <View style={styleCart.card}>
      {/* img  */}
      <Image source={image} style={styleCart.card_img} />
      {/* title  */}
      <View style={styleCart.card_content}>
        <Text
          numberOfLines={2}
          style={{fontWeight: '500'}}
          variant="titleMedium">
          Wooden Table
        </Text>
        <Text
          numberOfLines={1}
          style={{fontWeight: '800'}}
          variant="titleSmall">
          ₹{formatter.format(10000)}
        </Text>
      </View>
      {/* // action  */}
      <View>
        <MenuList visible={visible} setVisible={setVisible} />
        <View style={styleCart.addButton}>
          <IconButton
            size={10}
            containerColor={color.primary}
            iconColor="white"
            mode="contained"
            icon={'minus'}
          />
          <Text
            numberOfLines={1}
            style={{width: 25, textAlign: 'center'}}
            variant="bodyMedium">
            100
          </Text>
          <IconButton
            size={10}
            containerColor={color.primary}
            iconColor="white"
            mode="contained"
            icon={'plus'}
          />
        </View>
      </View>
      <Divider style={{width: '100%'}} />
      <View style={styleCart.extra}>
        <Text numberOfLines={3} variant="bodyLarge">
          Extras: Polish{' '}
        </Text>
      </View>
    </View>
  );
}

// card menu
function MenuList({visible, setVisible}) {
  const closeMenu = () => setVisible(!visible);

  return (
    <View style={styleCart.dot_menu}>
      <Menu
        contentStyle={{backgroundColor: 'white'}}
        visible={visible}
        onDismiss={closeMenu}
        anchor={
          <IconButton
            size={15}
            style={styleCart.menuDot}
            icon={'dots-vertical'}
            onPress={() => setVisible(!visible)}
          />
        }>
        <Menu.Item
          leadingIcon={'eye'}
          onPress={() => {}}
          title="View product"
        />
        <Menu.Item leadingIcon={'delete'} onPress={() => {}} title="Remove" />
      </Menu>
    </View>
  );
}

export default Cart;
