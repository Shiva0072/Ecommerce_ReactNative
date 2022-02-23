import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

// const p = {
//   id: 1,
//   title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
//   price: 109.95,
//   description:
//     'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
//   category: "men's clothing",
//   image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
//   rating: {
//     rate: 3.9,
//     count: 120,
//   },
// };

Icon.loadFont();
const ProductItem = ({id, title, image, price, onPress}) => {
  return (
    <TouchableOpacity style={styles.itemWrapper} onPress={() => onPress(id)}>
      <View style={styles.left}>
        {/* <Image source={{uri: p.image}} style={styles.img} /> */}
        <Image source={{uri: image}} style={styles.img} />
      </View>
      <View style={styles.right}>
        {/* <Text style={styles.title}>{p.title}</Text> */}
        <Text style={styles.title}>{title}</Text>
        <View style={styles.priceWrapper}>
          {/* <Text style={styles.price}>Price : ${p.price}</Text> */}
          <Text style={styles.price}>Price : ${price}</Text>
          <Icon name="arrow-forward-circle" size={30} color="black" />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemWrapper: {
    flexDirection: 'row',
    marginHorizontal: 5,
    marginVertical: 3,
    backgroundColor: 'pink',
    padding: 5,
    borderRadius: 20,
  },
  left: {
    width: '40%',
    alignSelf: 'center',
    overflow: 'hidden',
  },
  right: {
    width: '60%',
    margin: 5,
    marginLeft: 10,
    justifyContent: 'space-evenly',
  },
  img: {
    width: '100%',
    height: 180,
    alignItems: 'center',
    overflow: 'hidden',
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    padding: 4,
  },
  priceWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  price: {
    fontSize: 18,
    fontWeight: '500',
    lineHeight: 25,
  },
});

export default ProductItem;
