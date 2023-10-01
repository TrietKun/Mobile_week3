import React from 'react';
import { View, Text, Button } from 'react-native';

function SettingsScreen({ navigation }) {
  return (
    <View>
      <Text>Settings Screen</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go to Login" onPress={() => navigation.navigate('Login')} />
      <Button title="Go to Intro" onPress={() => navigation.navigate('Intro')} />
    </View>
  );
}

export default SettingsScreen;
