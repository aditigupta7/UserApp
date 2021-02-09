import React, { useState } from 'react';
import { Image, View, Text, StyleSheet} from 'react-native';
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { widthToDp } from '../common/responsive';

const Wallet = () => {


    const [value, setValue] = useState('');

    return (
        <ScrollView style={{backgroundColor:'white'}}>
            <View style={{padding:18, backgroundColor:'#31AAE2'}}>
                <Text style={{fontSize:24, fontWeight:'700',letterSpacing:1, color:'#fff'}}> My Wallet</Text>
            </View>
            <View style={{ flex: 1, flexDirection: 'row' }}>
                <View style={{ width: "35%", height: 150,justifyContent:'center',alignItems:'center' }}>
                    <Image
                        style={{ width: 80, height:80 }}
                        source={require('../images/Icon-144.png')}
                    />
                </View>
                <View style={{ width: "65%", height: 150, padding: 20 }}>
                    <Text style={{ fontSize: 24, fontFamily: 'bold' }}>ATSNeed Cash</Text>
                    <Text style={{ fontSize: 24, fontFamily: 'bold' }}>Rs 0</Text>
                    <Text style={{ fontSize: 16, color: '#707070' }}>Formelly ATSNeed Credits. Applicable on all services</Text>
                </View>
            </View>
            <View style={{ width: '100%', height: 25, backgroundColor: '#E7EAE9', marginTop: 20, marginBottom: 0 }} />

            <View style={{ flex: 1}}>
                <Text style={{ fontSize: 24, fontWeight: '600', textAlign: 'center', padding: 10 }}>Recharge Wallet</Text>
                <Text style={{ fontSize: 18, fontWeight: '600', textAlign: 'center', color: '#777777' }}>
                    How much would you like to add?
                </Text>

                <TextInput placeholder="|" style={styles.txtadd}> {value}</TextInput>


            </View>

            <View style={{ backgroundColor:'white', flex: 1, flexDirection: 'row', padding: 20, justifyContent: 'space-between' }}>
                <TouchableOpacity
                 onPress={() => setValue('100')}
                >
                <View style={styles.txtruppe}>
                    <Text style={styles.txtrup}>100</Text>
                </View>
                </TouchableOpacity>

                <TouchableOpacity
                 onPress={() => setValue('200')}
                >
                <View style={styles.txtruppe}>
                    <Text style={styles.txtrup}>200</Text>
                </View>
                </TouchableOpacity>

                <TouchableOpacity
                 onPress={() => setValue('500')}
                >
                <View style={styles.txtruppe}>
                    <Text style={styles.txtrup}>500</Text>
                </View>
                </TouchableOpacity>
            </View>

            <View style={{ flex: 1, flexDirection: 'row', padding: 20, justifyContent: 'space-between' }}>
            <TouchableOpacity
                 onPress={() => setValue('1000')}
                >
                <View style={styles.txtruppe}>
                    <Text style={styles.txtrup}>1000</Text>
                </View>
                </TouchableOpacity>

                <TouchableOpacity
                 onPress={() => setValue('2000')}
                >
                <View style={styles.txtruppe}>
                    <Text style={styles.txtrup}>2000</Text>
                </View>
                </TouchableOpacity>

                <TouchableOpacity
                 onPress={() => setValue('4000')}
                >
                <View style={styles.txtruppe}>
                    <Text style={styles.txtrup}>4000</Text>
                </View>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={{ marginTop: 40 }}>
                <Text style={styles.paybtn} onPress={() => { alert('pay') }}>Proceed to Pay</Text>
            </TouchableOpacity>

        </ScrollView>
    );
}
const styles = StyleSheet.create({
    txtruppe: {
        borderWidth: 1,
        borderRadius: 7,
        width: widthToDp(28),
        height: 55,
    },
    txtrup: {
        fontSize: 20,
        padding: widthToDp(2),
        textAlign: 'center'
    },
    paybtn: {
        textAlign: 'center',
        backgroundColor: '#31AAE2',
        borderRadius: 10,
        height: 50,
        width: '70%',
        alignSelf: 'center',
        padding: widthToDp(2),
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
    },
    txtadd: {
        fontSize: 26,
        marginLeft: 90,
        borderBottomWidth: 1,
        width: 200,
        borderBottomColor: '#A4A4A4',
        textAlign:'center'

    }
})
export default Wallet;