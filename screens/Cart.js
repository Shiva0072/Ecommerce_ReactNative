import {View, Text} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

const Cart = ({navigation, route}) => {
  const cart = useSelector(state => {
    // console.log(state);
    return state.entities.users.cart;
  });

  return (
    <View>
      <Text style={{fontSize: 18}}> total Items : {cart.length} </Text>
      <Text style={{fontSize: 18}}>Cart Array : {JSON.stringify(cart)}</Text>
    </View>
  );
};

export default Cart;
