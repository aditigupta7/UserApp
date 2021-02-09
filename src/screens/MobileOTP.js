import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity} from 'react-native';
import { widthToDp } from '../common/responsive';
import OTPInputView from '@twotalltotems/react-native-otp-input';

export default function MobileOTP({navigation}) {

    // const [otp, setOtp] = useState(['-', '-', '-', '-']);
    // const [otpVal, setOtpVal] = useState('');

    return (
        <View style={styles.container}>
            <Image
                style={styles.otpimage}
                source={require('../images/Icon-96.png')}
            />
            <Text style={styles.entCode}>Enter Code</Text>
            <Text style={styles.codeDigit1}>We have send you an SMS on 1234567890</Text>
            <Text style={styles.codeDigit2}>with 4 digit verification code</Text>


                <OTPInputView
                    style={{color:'#000',width: '50%', height: 100}}
                    pinCount={4}
                    autoFocusOnLoad
                    codeInputHighlightStyle={styles.underlineStyleHighLighted}
                    onCodeFilled = {(code => {
                    console.log(`Code is ${code}, you are good to go!`)
    })}
                    />


                        <TouchableOpacity style={styles.btnnext}
                onPress={()=>{navigation.navigate('TabScreen')}}
            >
                        <Image
                            source={require("../images/Icon-48.png")}
                        />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor:'white'
    },
    otpimage: {
        marginVertical: widthToDp(10)
    },
    entCode: {
        fontSize: 24,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    codeDigit1: {
        textAlign: 'center',
        fontSize: 14,
        fontWeight: '700',
        marginTop: widthToDp(4),
    },
    codeDigit2: {
        textAlign: 'center',
        fontSize: 14,
        fontWeight: '700'
    },

    otpBoxesContainer: {
        flexDirection: 'row'
    },
    otpBox: {
        padding: widthToDp(3),
        marginRight: widthToDp(3),
        borderWidth: 1,
        borderColor: '#9c9c9c',
        height: 50,
        width: 50,
        textAlign: 'center',
        color: '#9c9c9c',
        borderRadius:5,
        marginTop:widthToDp(6)
    },
    btnnext:{
        borderRadius:50,
        borderWidth:1,
        marginTop:widthToDp(10),
        padding:widthToDp(2),
        shadowRadius:50,
    },

      underlineStyleHighLighted: {
        borderColor: "#31AAE2",
      },
});
