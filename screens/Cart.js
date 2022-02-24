import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import CartItem from '../components/CartItem';
import {
  productAddedToCart,
  removeFromCart,
  deleteFromCart,
} from '../redux/actions/entities/users';

const Cart = ({navigation, route}) => {
  const cart = useSelector(state => {
    return state.entities.users.cart;
  });

  let total = 0;
  if (cart.size) {
    for (let items of cart.values()) {
      total += items[0].price * items[1];
    }
  }

  const dispatch = useDispatch();

  const increase = id => {
    dispatch(productAddedToCart(id));
  };
  const decrease = id => {
    dispatch(removeFromCart(id));
  };
  const removeItem = id => {
    dispatch(deleteFromCart(id));
  };

  return (
    <View>
      <ScrollView>
        {cart &&
          [...cart.values()].map(i => {
            const item = i[0];
            const qty = i[1];
            return (
              <CartItem
                key={item.id}
                id={item.id}
                title={item.title}
                price={item.price}
                image={item.image}
                quantity={qty}
                increase={increase}
                decrease={decrease}
                remove={removeItem}
              />
            );
          })}
      </ScrollView>
      <Text style={styles.info}>Total : ${total}</Text>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.info}>Place Order</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    borderWidth: 5,
    borderColor: 'gray',
    backgroundColor: 'green',
    borderRadius: 100,
    margin: 14,
    marginHorizontal: 50,
  },
  info: {
    alignSelf: 'center',
    margin: 3,
    padding: 5,
    fontWeight: '600',
    fontSize: 22,
  },
});

export default Cart;
