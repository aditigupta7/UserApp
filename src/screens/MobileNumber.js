import React, {useState} from 'react';
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import { widthToDp } from '../common/responsive';

export default function MobileNumber({navigation}) {
        const [mobilephone, setMobilephone] =useState('');

        const enterMobile =() =>{
         if (mobilephone=='')
         {
           alert('Please fill mobile number')
         }
         else{
           navigation.navigate('MobileOTP')
         }
        }
  return (
    <View style={styles.container}>
      <Image style={styles.logo}
        source={require('../images/login-screen-design.png')}
      />
      <View style={{ position: 'absolute' }}>
        <Text style={styles.text1}>Enter Your Mobile Number</Text>
        <Text style={styles.text2}>We will send you one time</Text>
        <Text style={styles.text2}>password(OTP) </Text>
        <TextInput
          placeholder='Enter Mobile Number'
          style={styles.txtInput}
          keyboardType="phone-pad"
          maxLength={10}
          onChange={(text)=>{setMobilephone(text)}}
          Value={mobilephone}
        />
        <TouchableOpacity style={styles.btn}
          // onPress={()=>{navigation.navigate('Second')}}
          onPress={enterMobile}
        >
          <Image
            source={require("../images/Icon-48.png")}
          />
        </TouchableOpacity>
      </View>


    </View>);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  text1: {
    marginTop: widthToDp(40),
    textAlign: 'center',
    fontSize: widthToDp(4),
    fontWeight: '700',
  },
  text2: {
    marginTop: widthToDp(2),
    textAlign: 'center',
    fontSize: widthToDp(4),
    fontWeight: '400'
  },
  txtInput: {
    width: widthToDp(60),
    marginTop: widthToDp(6),
    textAlign: 'center',
    fontSize: widthToDp(4),
    borderColor: '#e3e6e4',
    // padding: 16,
    paddingTop:widthToDp(3),
    paddingBottom:widthToDp(2),
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 5,
  },
  btn: {
    borderWidth: 1,
    width: 60,
    borderRadius: 50,
    padding: 5,
    marginTop: widthToDp(10),
    marginLeft: widthToDp(20)
  }
});
