import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';
import StarRating from 'react-native-star-rating-widget';
import React from 'react';

const ProductDetails = ({product, buyNow}) => {
  const {id, title, description, image, price, rating, onPress} = product;

  return (
    <View style={styles.wrapper}>
      <Text style={[styles.info, {fontSize: 18}]}>{title}</Text>
      <Image source={{uri: image}} style={styles.img} resizeMode="contain" />
      <Text style={[styles.info, styles.details]}>{description}</Text>
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <StarRating rating={rating.rate} onChange={() => null} />
        <Text style={[styles.info, {fontSize: 14}]}>
          +{rating.count} ratings
        </Text>
      </View>
      <Text style={[styles.info, {fontSize: 18}]}>Price : ${price}</Text>
      <TouchableOpacity style={styles.btn} onPress={buyNow}>
        <Text style={[styles.info, {color: 'white', padding: 1, fontSize: 20}]}>
          Buy Now
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'white',
    padding: 5,
    margin: 5,
  },
  info: {
    alignSelf: 'center',
    margin: 3,
    padding: 5,
    fontWeight: '600',
    fontSize: 15,
  },
  details: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
  },
  img: {
    height: 300,
  },
  btn: {
    borderWidth: 5,
    borderColor: 'gray',
    backgroundColor: 'green',
    borderRadius: 100,
    margin: 14,
    marginHorizontal: 50,
  },
});

export default ProductDetails;
