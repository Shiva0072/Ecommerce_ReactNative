import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableHighlight,
  StyleSheet,
  TextInput,
  ImageBackground,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

Icon.loadFont();
const WelcomeScreen = ({navigation, route}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <SafeAreaView style={{flex: 1}}>
      <ImageBackground
        style={styles.container}
        source={require('../assets/images/shop.jpeg')}
        resizeMode="cover">
        <View style={styles.details}>
          <TextInput
            value={name}
            placeholder="Please Enter your Name"
            style={styles.input}
            onChangeText={setName}
          />
          <TextInput
            value={email}
            placeholder="Please Enter your Email"
            style={styles.input}
            onChangeText={setEmail}
            textContentType="emailAddress"
          />
        </View>
        <View>
          <TouchableHighlight
            onPress={() => {
              navigation.push('Category', {
                name: name,
                email: email,
              });
            }}
            activeOpacity={0.7}
            underlayColor="white"
            style={styles.btnContainer}>
            <View style={styles.button}>
              <Text style={styles.text}>Begin Shopping</Text>
              <Icon name="right" size={30} color="black" />
            </View>
          </TouchableHighlight>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  btnContainer: {
    backgroundColor: 'pink',
    width: 300,
    justifyContent: 'space-around',
    padding: 20,
    borderRadius: 20,
    borderWidth: 5,
    borderColor: '#d86b93',
    marginBottom: 10,
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  details: {
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  input: {
    height: 100,
    width: '80%',
    padding: 10,
    backgroundColor: 'lightgray',
    marginBottom: 12,
    borderRadius: 20,
    borderColor: '#A9A9A9',
    borderWidth: 5,
  },
  text: {
    fontSize: 22,
    fontWeight: '600',
  },
});

export default WelcomeScreen;
