import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

Icon.loadFont();
const CartItem = ({
  id,
  title,
  price,
  quantity,
  image,
  increase,
  decrease,
  remove,
}) => {
  console.log(title);
  return (
    <TouchableOpacity style={styles.itemWrapper}>
      <View style={styles.left}>
        <Image source={{uri: image}} style={styles.img} />
      </View>
      <View style={styles.right}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.info}>quantity : {quantity}</Text>
        <Text style={styles.info}>rate : ${price}</Text>
        <Text style={[styles.info, {fontWeight: 'bold'}]}>
          amount : ${price * quantity}
        </Text>
        <View style={styles.actionsWrapper}>
          <View>
            <Icon.Button
              style={styles.actions}
              name="plussquare"
              size={30}
              color="black"
              onPress={() => increase(id)}
            />
          </View>
          <Icon.Button
            style={styles.actions}
            name="minussquare"
            size={30}
            color="black"
            onPress={() => decrease(id)}
          />
          <Icon.Button
            style={styles.actions}
            name="delete"
            size={30}
            color="black"
            onPress={() => remove(id)}
          />
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
  actionsWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginVertical: 10,
  },
  actions: {
    margin: 2,
    padding: 4,
  },
});

export default CartItem;
