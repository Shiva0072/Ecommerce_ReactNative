import {View, Text, StyleSheet, FlatList, ScrollView} from 'react-native';
import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {productFetch} from '../redux/actions/entities/products';
import ProductItemRender from '../components/ProductItemRender';
import ProductItem from '../components/ProductItem';

const Products = ({navigation, route}) => {
  const productsDATA = useSelector(state => state.entities.products.products);
  const loading = useSelector(state => state.entities.products.loading);
  const error = useSelector(state => state.entities.products.error);

  const dispatch = useDispatch();
  const category = route.params.category;
  useEffect(() => {
    dispatch(productFetch(category));
  }, []);

  const onPress = product => {
    // console.log('this product  = ', product);
    navigation.push('ProductDetails', {
      productId: product,
    });
  };

  return (
    <View>
      <View>
        {loading && <Text style={styles.info}>Loading...</Text>}
        {!loading && error && <Text style={styles.info}>{error}</Text>}
        <ScrollView>
          {productsDATA &&
            productsDATA.map(item => {
              return (
                <ProductItem
                  key={item.id}
                  id={item.id}
                  image={item.image}
                  price={item.price}
                  title={item.title}
                  onPress={onPress}
                />
              );
            })}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  info: {
    fontSize: 23,
    fontWeight: 'bold',
    alignSelf: 'center',
    justifyContent: 'center',
    textTransform: 'capitalize',
  },
});

export default Products;

{
  /* <FlatList
  data={productsDATA}
  renderItem={ProductItemRender}
  keyExtractor={item => item.id}
/> */
}
