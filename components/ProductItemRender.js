import {View, Text} from 'react-native';
import React from 'react';

import ProductItem from './ProductItem';

const ProductItemRender = ({item}) => {
  //   console.log('===================================\n');
  //   console.log(item.image, '\n', item.title, '\n', item.price);
  //   console.log('===================================\n');
  return (
    <ProductItem image={item.image} price={item.price} title={item.title} />
  );
};

export default ProductItemRender;
