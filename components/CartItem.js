import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

const p = {
  id: 1,
  title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
  price: 109.95,
  description:
    'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
  category: "men's clothing",
  image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
  rating: {
    rate: 3.9,
    count: 120,
  },
};

// const fet = async () => {
//   try {
//     const res = await (
//       await fetch('https://fakestoreapi.com/products/category/jewelery')
//     ).json();
//     console.log(res);
//   } catch (err) {}
// };
const CartItem = ({title, price, description, category, image}) => {
  //   fet();
  return (
    <TouchableOpacity style={styles.itemWrapper}>
      <View style={styles.left}>
        <Image source={{uri: p.image}} style={styles.img} />
      </View>
      <View style={styles.right}>
        <Text style={styles.title}>{p.title}</Text>
        <Text style={styles.info}>quantity : {10}</Text>
        <Text style={styles.info}>rate : {p.price}</Text>
        <Text style={styles.info}>amount : {p.price * 10}</Text>
        <View style={styles.actions}>
          <Icon name="plussquare" size={30} color="black" />
          <Icon name="minussquare" size={30} color="black" />
          <Icon name="delete" size={30} color="black" />
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
  },
  info: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 25,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginVertical: 10,
  },
});

export default CartItem;
