import {
  Text,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import React from 'react';

const CategoryItem = ({category, img, onPress}) => {
  return (
    <TouchableOpacity onPress={() => onPress(category)} style={styles.wrapper}>
      <ImageBackground
        // source={require(img)}
        // source={images[category]}
        resizeMode="contain"
        style={styles.img}>
        <Text style={styles.text}>{category}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'maroon',
    borderRadius: 20,
    paddingTop: 10,
    paddingHorizontal: 8,
    margin: 5,
    paddingBottom: 0,
  },
  img: {
    width: '100%',
    height: 400,
  },
  text: {
    fontSize: 23,
    fontWeight: 'bold',
    alignSelf: 'center',
    justifyContent: 'center',
    textTransform: 'capitalize',
  },
});

export default CategoryItem;
