import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { widthToDp } from '../common/responsive';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Icon from "react-native-vector-icons/MaterialIcons";
import { TouchableOpacity } from 'react-native';

const Pay = ({navigation}) =>{
    return (
        <View style={{backgroundColor:'#fff'}}>


        <View style={{flexDirection:'column',height:690}}>

            <View style={styles.headerView}>
                <Icon name="arrow-back" color="#fff" size={32} onPress={()=> navigation.goBack()}/>
                <Text style={styles.txtheading}>AC Service and Repair</Text>
            </View>

            <ScrollView>

            <View style={styles.container1}>

                <Text style={styles.container1txt}>AC SERVICE [+]</Text>
                <Text style={styles.container1txt}>RS 500</Text>
            </View>

            <View style={styles.container1}>
                <Text style={styles.container2txt}>Total</Text>
                <Text style={styles.container2txt}>RS 500</Text>
            </View>

            <View style={{height:20, backgroundColor:'#E5E4EB'}}/>

            <View style={{borderBottomWidth:1, borderBottomColor:'#DBDBDB'}}>
                <Text style={styles.containertxt}>Address</Text>
                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                <Text style={styles.addtxt}>DWARKA SECTOR-21, Near OHP, New Delhi</Text>
                <Text style={styles.btntxt}>CHANGE</Text>
                </View>
            </View>

            <View >
                <Text style={{marginTop:20,fontSize:20, fontWeight:'bold',textAlign:'center'}}>
                    When do you want us to come ? </Text>
                <ScrollView horizontal={true}
                    showsHorizontalScrollIndicator={false}
                >
                    <View style={{flexDirection:'row',marginHorizontal:20}}>
                    <View style={[styles.daybox,{backgroundColor:'#B7E2FC'}]}>

                            <Text style={styles.daytxt}>Thu</Text>
                            <Text style={styles.daytxt}>05</Text>

                    </View>
                    <View style={styles.daybox}>
                            <Text style={styles.daytxt}>Fri</Text>
                            <Text style={styles.daytxt}>05</Text>
                    </View>
                    <View style={[styles.daybox,{backgroundColor:'#E7728F'}]}>
                    <View style={styles.lockStyle}>
                            <FontAwesome name="lock" size={25} color="white"/>
                        </View>
                            <Text style={styles.daytxt}>Sat</Text>
                            <Text style={styles.daytxt}>05</Text>
                    </View>
                    <View style={[styles.daybox,{backgroundColor:'#E7728F'}]}>
                    <View style={styles.lockStyle}>
                            <FontAwesome name="lock" size={25} color="white"/>
                        </View>
                            <Text style={styles.daytxt}>Sun</Text>
                            <Text style={styles.daytxt}>05</Text>
                    </View>
                    </View>
                </ScrollView>
            </View>

            <View style={{marginVertical:30}}>
                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                    <View style={styles.timingbox}>
                        <Text style={styles.timingtxt}>9:00</Text>
                    </View>
                    <View style={styles.timingbox}>
                        <Text style={styles.timingtxt}>9:30</Text>
                    </View>
                </View>

                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                    <View style={styles.timingbox}>
                        <Text style={styles.timingtxt}>9:00</Text>
                    </View>
                    <View style={styles.timingbox}>
                        <Text style={styles.timingtxt}>9:30</Text>
                    </View>
                </View>

                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                    <View style={styles.timingbox}>
                        <Text style={styles.timingtxt}>9:00</Text>
                    </View>
                    <View style={styles.timingbox}>
                        <Text style={styles.timingtxt}>9:30</Text>
                    </View>
                </View>
            </View>
            </ScrollView>
        </View>
        <View style={styles.payView}>
            <TouchableOpacity style={styles.payBtn}>
                <Text style={{fontSize:20,color:'#fff',fontWeight:'bold'}}>Pay</Text>
            </TouchableOpacity>
        </View>

        </View>

    )
}
const styles  = StyleSheet.create({
    headerView:{
        backgroundColor: '#31AAE2',
        height: 90,
        flexDirection:'row',
        padding: widthToDp(5),
    },
    txtheading: {
        textAlign: 'center',
        fontSize: 24,
        marginLeft:20,
        color: '#fff',
        fontWeight: 'bold'
    },

        container1:{
            flexDirection:'row',
            justifyContent:'space-between',
            borderBottomWidth:1,
            borderBottomColor:'#DBDBDB'
        },
        container1txt:{
            fontSize:20,
            fontWeight:'600',
            letterSpacing:0.4,
            padding:widthToDp(4)
        },
        container2txt:{
            fontSize:20,
            fontWeight:'700',
            letterSpacing:0.4,
            padding:widthToDp(4)
        },
        containertxt:{
            fontSize:20,
            fontWeight:'600',
            color:'#A5A5A5',
            padding:widthToDp(3)
        },
        addtxt:{
            fontSize:16,
            padding:10,
            width:"70%",
            letterSpacing:0.5
        },
        btntxt:{
            color:'#3DA4DF',
            fontSize:20,
            fontWeight:'bold',
            paddingRight:widthToDp(6),
            paddingTop:widthToDp(4)
        },
        daybox:{
            marginVertical:widthToDp(7),
            borderWidth:0.5,
            borderRadius:12,
            height:110,
            width:widthToDp(30),
            marginHorizontal:widthToDp(2)
        },
        daytxt:{
            textAlign:'center',
            paddingTop:widthToDp(3),
            fontSize:18,
            fontWeight:'600'
        },
        timingtxt:{
            fontSize:widthToDp(4),
            fontWeight:'700',
            letterSpacing:1,
            textAlign:'center'
        },
        timingbox:{
            borderWidth:2,
            borderColor:'#DDDDDD',
            borderRadius:13,
            margin:widthToDp(4),
            padding:widthToDp(3),
            width:170,
        },
        lockStyle:{
            position:'absolute',
            height:35,
            width:35,
            borderRadius:20,
            backgroundColor:'#B22222',
            top:-10,
            right:-15,
            bottom:15,
            zIndex:2000,
            borderWidth:1,
            alignItems:'center',
            justifyContent:'center'
        },
        payBtn:{
            marginVertical:20,
            backgroundColor:'#31AAE2',
            height:60,
            width:380,
            borderRadius:10,
            marginHorizontal:15,
            justifyContent:'center',
            alignItems:'center',
            shadowColor: "#000",
            shadowOffset: {
                 width: 0,
                 height: 2
               },
            shadowOpacity: 0.25,
            shadowRadius: .84,
            elevation: 5,
        },
        payView:{
            borderTopWidth:1,
            borderTopColor:'#E5E4EB'
        }

})

export default Pay;