import React from 'react';
import { Text, View, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native';
import { heightToDp, widthToDp } from '../common/responsive';

export default function Profile({navigation}) {
    return (
        <View style={styles.container}>
            <Image style={styles.logo}
                source={require('../images/profile-bg.jpg')}
            />
            <View style={styles.centerView}>
                <View style={{marginLeft:20,justifyContent:'center',alignContent:'center'}}>
                <Text style={styles.text1}>Profile</Text>
                <TextInput
                    placeholder=' | First Name'
                    style={styles.txtInput}
                />
                <TextInput
                    placeholder=' | Last Name'
                    style={styles.txtInput}
                />
                <TextInput
                    placeholder=' | Contact Number'
                    style={styles.txtInput}
                />
                <TextInput
                    placeholder=' | Email Address'
                    style={styles.txtInput}
                />
                <TextInput
                    placeholder=' | Address'
                    style={styles.txtInput}
                />


            </View>

            <TouchableOpacity style={styles.btn}
                onPress={()=>{alert('submit')}}
            >
                <Text style={styles.btntxt}>Submit</Text>
            </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'

    },
    logo: {
        flex: 1,
        width: "100%",
        height: "100%",
    },
    text1: {
        marginTop: 10,
        textAlign: 'center',
        fontSize: widthToDp(6),
        fontWeight: '700',
    },
    txtInput: {
        width: widthToDp(80),
        height:heightToDp(6),
        marginTop: widthToDp(5),
        // textAlign: 'auto',
        fontSize: widthToDp(5),
        borderWidth: 1,
        borderColor: '#c7bfbf',
        borderRadius: 5,
        shadowColor: "#000",
        padding:widthToDp(1),
        letterSpacing:2
    },
    btn: {
        marginTop: widthToDp(10),
        backgroundColor: '#31AAE2',
        padding: widthToDp(2),
        width: widthToDp(60),
        borderRadius: 10,
        alignSelf:'center'
    },
    btntxt: {
        color: '#fff',
        fontSize: widthToDp(5),
        textAlign: 'center',
        fontWeight: '700',
        letterSpacing: 1,
    },
    centerView:{
        borderRadius:20,
        marginTop:40,
        position: 'absolute',
        backgroundColor:'white',
        height:500,
        width:380,
        justifyContent:'center',
        alignContent:'center',
        shadowColor: "#000",
        shadowOffset: {
           width: 0,
           height: 2
         },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,

    }
});
