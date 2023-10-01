import React from 'react';
import { View, Text, StyleSheet,Image, TouchableOpacity } from 'react-native';
import ButtonBar from './Buttonbar';
import { Button } from 'react-native-web';

function Screen1({ navigation }) {
  const buttons = ['Go back to Screen 1'];

  const handleButtonPress = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <View style={styles.vongtron}>
        <svg width="100%" height="100%" viewBox="0 0 142 142" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="71" cy="71" r="63.5" stroke="black" stroke-width="15"/>
        </svg>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>GROW <br/> YOUR BUSINESS</Text>
      </View>
      <View style={styles.xxxContainer}>
        <Text style={styles.xxx}>
          We will help you to grow your business using online server
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonTitle} >LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonTitle} >SIGN UP</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default Screen1;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#00CCF9',
    alignItems: 'center',
    
  },
  vongtron: {
    width: 160,
    height: 160,
    top : '20%',
  },
  title :{
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
  titleContainer : {
    top : '30%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  xxx : {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  xxxContainer : {
    top : '30%',
    alignItems: 'center',
    justifyContent: 'center',
    height : 'auto',
    width : '80%',
  },
  buttonContainer : {
    top : '40%',
    justifyContent: 'space-around',
    height : '7%',
    width : '80%',
    flexDirection : 'row',
  },
  button : {
    backgroundColor : 'back',
    width : '40%',
    height : '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor : '#E3C000',
    borderRadius : 15,
  },
  buttonTitle : {
    fontSize : 20,
    fontWeight : 'bold',
    color : 'black',
  }
});
