import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider} from 'react-redux';

import store from './redux/store';
import Home from './screens/Home';
import CartItem from './components/CartItem';
import ProductItem from './components/ProductItem';

import Products from './screens/Products.js';
import Categories from './screens/Categories';
import CategoryItem from './components/CategoryItem';
import ProductDetails from './screens/ProductDetails';
import Cart from './screens/Cart';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Category" component={Categories} />
          <Stack.Screen name="Products" component={Products} />
          <Stack.Screen name="ProductDetails" component={ProductDetails} />
          <Stack.Screen name="Cart" component={Cart} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
