import React, { useState } from 'react';
import { Image, View, Text, StyleSheet, Modal,TouchableOpacity } from 'react-native';
import { ScrollView, TextInput, TouchableHighlight } from 'react-native-gesture-handler';
import { Content, List, ListItem, Left, Body, Right, Thumbnail } from 'native-base';
import { Icon } from 'react-native-elements';
import { widthToDp,heightToDp } from '../common/responsive';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import CustomRatingBar from '../components/CustomRatingBar';

const ServiceAndRepair = ({navigation}) => {

    const [modalVisible, setModalVisible] = useState(false);
    const [comment,setComment] = useState('');

    const handleComment = ()=>{
        if(comment.length)
        {
            alert('Your Comment is ' + comment);
        }else{
            alert('No Comment');
        }

        setModalVisible(!modalVisible);
        setComment('');
    }

    return (
    <View>
        <ScrollView>
            <View style={{ flex: 1, backgroundColor: '#31AAE2', height: 70 }}>
                <Text style={styles.txtheading}>AC Service and Repair</Text>
            </View>

            <View style={{ flex: 1 }}>
                <Text style={styles.txthead}>What are you looking for ?</Text>
            </View>

            <View style={styles.maincontainer}>
            <View style={styles.accontainer}>
                <View style={{ width: "100%", height: 80 }}>

                    <View style={{ flex: 1, flexDirection: 'row', padding: 16,justifyContent:'space-between' }}>
                        <View >
                            <Text style={styles.txtservice}>AC Service</Text>
                            <Text style={styles.txtservice2}>30% off on 2nd AC service</Text>
                        </View>
                        <View style={{ marginLeft: 65 }}>

                            <Icon name="arrow-right" size={50} color="black"
                                onPress={() => navigation.navigate('AddService')} />

                        </View>
                    </View>

                </View>
           </View>


           <View style={styles.accontainer}>
                <View style={{ width: "100%", height: 80 }}>

                    <View style={{ flex: 1, flexDirection: 'row', padding:16,justifyContent:'space-between' }}>
                        <View style={{width:300}}>
                            <Text style={styles.txtservice}>AC Repair</Text>
                            <Text style={styles.txtservice2}>(Less Cooling, no cooling, water leakage etc.)</Text>
                        </View>
                        <View >

                            <Icon name="arrow-right" size={50} color="black"
                                onPress={() => navigation.navigate('AddService')} />

                        </View>
                    </View>

                </View>
           </View>



           <View style={styles.accontainer}>
                <View style={{ width: "100%", height: 80 }}>

                    <View style={{ flex: 1, flexDirection: 'row', padding: 16,justifyContent:'space-between' }}>
                        <View>
                            <Text style={styles.txtservice}>Installation / Un-Installation</Text>
                            <Text style={styles.txtservice2}>20% off</Text>
                        </View>
                        <View>

                            <Icon name="arrow-right" size={50} color="black"
                                onPress={() => navigation.navigate('AddService')} />

                        </View>
                    </View>

                </View>
           </View>
           </View>

            <View style={{ backgroundColor: '#88C4D6', paddingLeft: widthToDp(5) }}>
                <Image
                    source={require('../images/Icon-97.png')} />
                <Text style={{ marginBottom: 14, fontSize: 15 }}>~ No Questions Asked 90 Day Revisit Policy</Text>
                <Text style={{ marginBottom: 14, fontSize: 15 }}>~ No Questions Asked 90 Day Revisit Policy</Text>
                <Text style={{ marginBottom: 14, fontSize: 15 }}>~ No Questions Asked 90 Day Revisit Policy</Text>
                <Text style={{ marginBottom: 14, fontSize: 15 }}>~ No Questions Asked 90 Day Revisit Policy</Text>
            </View>

            <View style={{ flex: 1 }}>
                <Text style={styles.txthead}>What are our customer says ?</Text>
            </View>


            <Content style={{marginBottom:20}}>
                <List>
                    <ListItem avatar>
                        <Left>
                            <Thumbnail source={require('../images/Icon-38.png')} />
                        </Left>
                        <Body style={{ borderBottomWidth: 1 }}>
                            <Text style={{ fontSize: 20, fontWeight: '700', letterSpacing: 1 }}>Saurabh</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ color: '#9E9E9E', fontSize: 17, marginRight: 10 }}>New Delhi</Text>
                                <Text style={{ color: '#9E9E9E', fontSize: 14 }}>.2 March 2021</Text>
                            </View>
                            <Text style={{ fontSize: 16, fontWeight: '500', marginTop:13}}>He is very Profesional in his work, I like his service</Text>
                        </Body>
                        <Right>
                        <TouchableHighlight>
                            <Text style={{color:'green', fontWeight:'bold'}}>
                            <Icon name="star" size={20} color={'green'}/> 5.0
                            </Text>
                            </TouchableHighlight>
                        </Right>
                    </ListItem>


                    <ListItem avatar>
                        <Left>
                            <Thumbnail source={require('../images/Icon-38.png')} />
                        </Left>
                        <Body style={{ borderBottomWidth: 1 }}>
                            <Text style={{ fontSize: 20, fontWeight: '700', letterSpacing: 1 }}>Saurabh</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ color: '#9E9E9E', fontSize: 17, marginRight: 10 }}>New Delhi</Text>
                                <Text style={{ color: '#9E9E9E', fontSize: 14 }}>.2 March 2021</Text>
                            </View>
                            <Text style={{ fontSize: 16, fontWeight: '500', marginTop:13}}>He is very Profesional in his work, I like his service</Text>
                        </Body>
                        <Right>
                        <TouchableHighlight


                            >
                            <Text style={{color:'green', fontWeight:'bold'}}>
                            <Icon name="star" size={20} color={'green'}/> 5.0
                            </Text>
                            </TouchableHighlight>
                        </Right>
                    </ListItem>
                </List>
            </Content>


            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    alert("Modal has been closed.");
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                    <View style={{ flexDirection: 'column' }}>

                    <CustomRatingBar />


                            <TextInput
                                style={styles.textInputstar}
                                placeholder="Write a comment"
                                onChangeText= {(text)=>setComment(text)}
                                value={comment}
                                />
                            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                            <TouchableOpacity style={styles.btnstarbody}
                             onPress={()=> handleComment()}
                        >
                    <Text style={styles.btnstar}>Submit</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnstarbody}
                         onPress={() =>{
                            setModalVisible(!modalVisible)}}>
                    <Text style={styles.btnstar}>Ignore</Text>
                </TouchableOpacity>
            </View>
        </View>

                        {/* <TouchableHighlight
                            style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                            onPress={() => {
                                setModalVisible(!modalVisible);
                            }}
                        >
                            <Text style={styles.textStyle}>Hide Modal</Text>
                        </TouchableHighlight> */}
                    </View>
                </View>
            </Modal>



        </ScrollView>

                <TouchableOpacity style={styles.commentBox} onPress={()=> setModalVisible(true)}>
                        <FontAwesome
                            name="comment"
                            color="#31AAE2"
                            size={40}/>
                </TouchableOpacity>


    </View>
    );
}
const styles = StyleSheet.create({
    txtheading: {
        textAlign: 'center',
        fontSize: 25,
        padding: widthToDp(4),
        color: '#fff',
        fontWeight: 'bold'
    },
    txthead: {
        fontSize: 20,
        fontWeight: '700',
        padding: widthToDp(3),
        textAlign: 'center'
    },
    maincontainer:{
        borderWidth: 1,
        borderRadius: 13,
        margin: 15,
        borderColor: '#c4c8cf',
        shadowColor: '#c4c8cf'
    },
    accontainer: {
        flex: 1,
        flexDirection: 'column',
        borderBottomWidth:1,
        borderRadius: 13,
        borderColor: '#c4c8cf',
    },
    txtservice: {
        fontSize: 17,
        fontWeight: 'bold'
    },
    txtservice2: {
        fontSize: 13,
        fontWeight: 'bold',
        color: '#C9C9C9',
    },
    paybtn: {
        textAlign: 'center',
        backgroundColor: '#31AAE2',
        borderRadius: 10,
        height: 50,
        width: '70%',
        alignSelf: 'center',
        padding: widthToDp(1),
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      },
      textInputstar:{
        borderWidth:2,
        borderRadius:10,
        borderColor:'#E3E3E3',
        height:heightToDp(10),
        marginTop:widthToDp(6),
        marginBottom:widthToDp(4),
        marginHorizontal:widthToDp(4),
        fontSize:widthToDp(5),
        paddingLeft:widthToDp(4)
    },
    btnstarbody:{
        backgroundColor:'#31AAE2',
        margin:widthToDp(3),
        borderRadius:12,
        width:widthToDp(30)
    },
    btnstar:{
        fontSize:18,
        fontWeight:'700',
        padding:widthToDp(4),
        color:'#fff',
        letterSpacing:0.5,
        textAlign:'center'
    },
    commentBox:{
        flex:1,
        justifyContent:'center',
        alignContent:'center',
        position:'absolute',
        width:widthToDp(15),
        height:heightToDp(5),
        alignContent:'center',
        justifyContent:'center',
        right:0,
        bottom:widthToDp(6)
    },

    touchStyle:{
    },


})
export default ServiceAndRepair;