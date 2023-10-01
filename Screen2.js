import { View, Text, StyleSheet, Image,Dimensions } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { TouchableOpacity } from 'react-native-web'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Screen2() {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>LOGIN</Text>
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.emailContainer}>
          <TextInput style={styles.input} placeholder='Email' >
            
          </TextInput>
        </View>
        <View style={styles.passwordContainer}>
          <TextInput style={styles.inputPass} placeholder='Password' secureTextEntry='true'>
            
          </TextInput>
          <View style={styles.che}>
          <TouchableOpacity >
          <svg width="40" height="40" viewBox="0 0 38 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.0001 8.09097C16.1414 8.09097 13.8182 10.2919 13.8182 13.0001C13.8182 15.7083 16.1414 17.9091 19.0001 17.9091C21.8587 17.9091 24.1819 15.7083 24.1819 13.0001C24.1819 10.2919 21.8586 8.09097 19.0001 8.09097Z" fill="black"/>
              <path d="M19 0.727325C10.3636 0.727325 2.98821 5.81637 0 13.0001C2.98821 20.1837 10.3636 25.2728 19 25.2728C27.645 25.2728 35.0119 20.1837 38.0001 13.0001C35.0119 5.81637 27.645 0.727325 19 0.727325ZM19 21.1818C14.2328 21.1818 10.3636 17.5164 10.3636 13C10.3636 8.48362 14.2328 4.81821 19 4.81821C23.7673 4.81821 27.6364 8.4837 27.6364 13.0001C27.6364 17.5164 23.7673 21.1818 19 21.1818Z" fill="black"/>
          </svg>
          </TouchableOpacity>
          </View>
        </View>
      </View>
      {/* login */}
      <View style={styles.loginContainer}>
        <TouchableOpacity>
          <Text style={styles.loginTitle}>LOGIN</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.xxx}>
        <Text style={{ textAlign : 'center'}}>When you agree to terms and conditions</Text>
      </View>
      <View style={styles.forgot}>
        <TouchableOpacity>
          <Text style={{color : '#5D25FA'}}>For got your password?</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.xxx}>
        <Text style={{ textAlign : 'center'}}>Or login with</Text>
      </View>
      <View style={styles.loginWith}>
        <View style={styles.f}>
            <Image style={styles.logo} source={require('./img/f.png')}></Image>
        </View>
        <View style={styles.z}>
          <Image style={styles.logo} source={require('./img/z.png')}></Image>
        </View>
        <View style={styles.g}>
          <Image style={styles.logo} source={require('./img/g.png')}></Image>
        </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d8efdf',
    alignItems: 'center',
    width : windowWidth,
    height :windowHeight ,
  },
  titleContainer :{
    marginTop: 20,
    height : 40,
    width : 'auto',
    top : windowHeight * 0.05,
  },
  title : {
    fontSize : 30,
    color : 'Black',
    textAlign : 'center',
    marginTop : 5,
    fontWeight : 'bold',
  },
  inputContainer : {
    width : windowWidth * 0.85,
    height : windowHeight * 0.15,
    top : windowHeight * 0.15,
    justifyContent : 'space-around',
    
  },
  emailContainer : {
    width : '100%',
    height : 40,
    backgroundColor : 'green',
    justifyContent : 'center',
    backgroundColor : '#cae1d1',
    
  },
  passwordContainer : {
    width : '100%',
    height : 40,
    backgroundColor : 'green',
    backgroundColor : '#cae1d1',
    flexDirection : 'row',
  },
  input : {
    paddingLeft : 10,
    width : '100%',
    height : 40,
    
  },
  inputPass : {
    paddingLeft : 10,
    width : '89%',
    height : 40,
  },
  che : {
    width : 40,
    height : 40,
  },
  loginContainer : {
    width : '85%',
    height : windowHeight * 0.07,
    top : windowHeight * 0.2,
    justifyContent : 'center',
    backgroundColor : '#E53935',
    textAlign : 'center',
  },
  loginTitle : {
    fontSize : 20,
    color : '#fff',
    textAlign : 'center',
    marginTop : 5,
    fontWeight : 'bold',
    
  },
  xxx : {
    width : '85%',
    height : windowHeight * 0.05,
    top : windowHeight * 0.27,
  },
  forgot : {
    width : '85%',
    height : windowHeight * 0.05,
    top : windowHeight * 0.27,
    alignItems : 'center',
    textDecorationLine : 'underline',
  },
  loginWith : {
    width : '85%',
    height : '5%',
    top : windowHeight * 0.4,
    backgroundColor : 'red',
    flexDirection : 'row',
  },
  f : {
    width :windowWidth * 0.85 / 3,
    height : '100%',
    backgroundColor : 'red',
  },
  z : {
    width : windowWidth * 0.85 / 3,
    height : '100%',
    backgroundColor : 'green',
  },
  g : {
    width : windowWidth * 0.85 / 3,
    height : '100%',
    backgroundColor : 'blue',
  }, 
  logo : {
    width : '100%',
    height : '100%',
  }
})