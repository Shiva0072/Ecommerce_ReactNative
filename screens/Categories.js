import {View, Text, ScrollView, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {categoryFetch} from '../redux/actions/entities/category';
import images from '../assets/data/images';
import CategoryItem from '../components/CategoryItem';
import {userAdded} from '../redux/actions/entities/users';

const Categories = ({navigation, route}) => {
  const categoriesDATA = useSelector(
    state => state.entities.categories.categories,
  );
  const loading = useSelector(state => state.entities.categories.loading);
  const error = useSelector(state => state.entities.categories.error);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userAdded(route.params));
    dispatch(categoryFetch());
  }, []);

  onPress = category => {
    navigation.push('Products', {
      category: category,
    });
  };
  return (
    <View>
      <View>
        {loading && <Text style={styles.info}>Loading...</Text>}
        {!loading && error && <Text style={styles.info}>{error}</Text>}
        <ScrollView>
          {categoriesDATA &&
            categoriesDATA.map(cat => {
              return (
                <CategoryItem key={cat} category={cat} onPress={onPress} />
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

export default Categories;
