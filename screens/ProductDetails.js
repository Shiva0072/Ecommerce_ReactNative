import {View, Text} from 'react-native';
import React from 'react';
import ProductDetailsComponent from '../components/ProductDetails';
import {productAddedToCart} from '../redux/actions/entities/users';
import {useSelector, useDispatch} from 'react-redux';

const ProductDetails = ({navigation, route}) => {
  const product = useSelector(state => {
    const products = state.entities.products.products;
    const index = products.filter(
      product => product.id == route.params.productId,
    );
    return index[0];
  });

  const dispatch = useDispatch();
  const buyNow = () => {
    dispatch(productAddedToCart(product));
    navigation.push('Cart');
  };

  return (
    <View>
      <ProductDetailsComponent product={product} buyNow={buyNow} />
    </View>
  );
};

export default ProductDetails;
