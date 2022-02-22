import React from 'react';
import {View, Text, Button} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import {fetchUser} from '../redux/actions/entities/users';

const Home = () => {
  return (
    <View>
      <Text>Users : {users}</Text>
      <Button title="Click to get all users "></Button>
    </View>
  );
};

export default Home;
