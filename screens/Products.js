import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {productFetch} from '../redux/actions/entities/products';

const Products = ({navigation, route}) => {
  const products = useSelector(state => state.entities.products.products);
  const loading = useSelector(state => state.entities.products.loading);
  const error = useSelector(state => state.entities.products.error);

  const dispatch = useDispatch();
  const category = route.params.category;
  useEffect(() => {
    dispatch(productFetch(category));
  }, []);

  return (
    <View>
      <View>
        {loading && <Text style={styles.info}>Loading...</Text>}
        {!loading && error && <Text style={styles.info}>{error}</Text>}
        <Text>{JSON.stringify(products)}</Text>
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
