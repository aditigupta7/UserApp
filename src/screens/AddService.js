import React, { useState } from 'react';
import { Image, View, Text, StyleSheet,FlatList } from 'react-native';
import { ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {widthToDp,heightToDp} from '../common/responsive';

var ACs = [

{
	id:1,
	title:'Split AC',
	price:599,
	nextPrice:499,
    count:0,
    totalPrice:0
},

{
	id:2,
	title:'Window AC',
	price:499,
	nextPrice:399,
    count:0,
    totalPrice:0
},

{
	id:3,
	title:'Central AC',
	price:999,
	nextPrice:899,
    count:0,
    totalPrice:0
},

{
	id:4,
	title:'Smart AC',
	price:999,
	nextPrice:899,
    count:0,
    totalPrice:0
},


{
	id:5,
	title:'Dual Fuel AC',
	price:999,
	nextPrice:899,
    count:0,
    totalPrice:0
},

{
	id:6,
	title:'Geothermal AC',
	price:1299,
	nextPrice:999,
    count:0,
    totalPrice:0
},

{
	id:7,
	title:'Simple AC',
	price:1299,
	nextPrice:999,
    count:0,
    totalPrice:0
},

];

const AddService = ({navigation}) => {
    const [flatListData,setFlatListData]=useState(ACs);
    const[subTotal,setSubTotal] = useState(0);

    const increaseQty = (id)=>{

        let temp = flatListData.map(e => {
            if(e.id === id){
                let temp1 = {...e,... {count:Number(e.count)+1, totalPrice:(Number(e.count)+1)* Number(e.price) }}
                console.log(temp1);
                return temp1

            }
            return e
        });
            setFlatListData(temp)
    }

    const decreaseQty = (id) =>{

        let temp = flatListData.map(e => {
            if(e.id === id){
                let temp1 = {...e,... {count:Number(e.count)-1, totalPrice:(Number(e.count)-1)* Number(e.price) }}
                console.log(temp1);
                return temp1

            }
            return e

        });
            setFlatListData(temp)
        }

        const handleSubTotal =()=>{
            let temp = 0;
            flatListData.forEach(e => {
               // temp = Number(e.price) * Number(e.count)
               temp += Number(e.totalPrice);
            });

           // setSubTotal(temp)
           return temp;
        }


const ProductItem = ({totalPrice,count,id,title,price,nextPrice}) => {
    return(
	<View style={styles.productView}>
                <View>
                    <Text style={{fontSize:20, fontWeight:'600'}}>{title} Service</Text>
                    <View style={styles.priceView}>
                        <Text style={styles.priceText}>RS {price}</Text>
                        <Text style={styles.nextPriceText}>
                            Next AC at RS {nextPrice}</Text>
                </View>
                </View>
				{count === 0 ?

				( <View style={styles.btnView}>
                    <TouchableOpacity style={styles.firstAddBtn}>
                        <Text style={styles.firstAddBtnText}>ADD</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.firstPlus}
                    onPress={() => increaseQty(id)}>
                        <Text style={styles.firstPlusText}>+</Text>
                    </TouchableOpacity>
                </View>)
                :

				(<View style={styles.btnView}>
				   <TouchableOpacity style={styles.secondSubBtn}
                    onPress={() => decreaseQty(id)}>
                        <Text style={styles.secondSubBtnText}>-</Text>
                    </TouchableOpacity>


                    <TouchableOpacity style={styles.countBtn}>
                        <Text style={styles.countText}>{count}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.secondAddBtn}
                    onPress={() => increaseQty(id)} >
                        <Text style={styles.secondAddBtnText}>+</Text>
                    </TouchableOpacity>
                </View>)



				}

            </View>
);
}

	const renderItem = ({item}) => (
		<ProductItem
            totalPrice={item.totalPrice}
            id={item.id}
            count={item.count}
			title={item.title}
			price={item.price}
			nextPrice={item.nextPrice}

		/>
	);


    return (
    <View style={{backgroundColor:'white'}}>
        <ScrollView>
            <View style={styles.headerView}>
                <Text style={styles.txtheading}>Add AC(s) For Service</Text>
            </View>

            <View style={styles.img}>
                <View style={styles.imgView}>
                    <Image source={require('../images/Icon-49.png')} />
                </View>
                <View style={styles.upperView}>
                    <Text style={styles.firstText}>Get 30% off 2nd AC Onwards</Text>
                    <Text style={styles.secondText}>* Valid on same booking</Text>
                </View>
            </View>
            <View style={{marginBottom:100}}>

			<FlatList
				data={flatListData}
				renderItem={renderItem}
                extraData={flatListData}
                keyExtractor={item => String(item.id)}
            />
            </View>

         </ScrollView>

        <View style={{position:'absolute',bottom:0,width:'100%',backgroundColor:'white'}} >
            <TouchableOpacity style={{marginBottom:5}} onPress={()=> navigation.navigate('Pay')}>
                <Text style={styles.paybtn} >
                    Pay Now : Rs { handleSubTotal() }
                {/* <Icon name='arrow-forward' color={'#000'}/> */}
                </Text>

            </TouchableOpacity>
        </View>


    </View>
    );
}
const styles = StyleSheet.create({
    headerView:{
        flex: 1,
        backgroundColor: '#31AAE2',
        height: 70
    },
    txtheading: {
        textAlign: 'center',
        fontSize: 24,
        padding: widthToDp(4),
        color: '#fff',
        fontWeight: 'bold'
    },
    upperView:{
        paddingLeft:10,
        paddingTop:30
    },
    firstText:{
        fontSize:16,
        fontWeight:'700',
        color:'#258B32'
    },
    secondText:{
        fontSize:16,
        fontWeight:'700',
        color:'#258B32'

    },
    img:{
        flex: 1,
        flexDirection: 'row'
    },
    imgView:{
        paddingLeft:40,
        paddingTop:30
    },
    paybtn: {
        marginTop:10,
        textAlign: 'center',
        backgroundColor: '#31AAE2',
        borderRadius: 10,
        height: 70,
        width: '98%',
        alignSelf: 'center',
        paddingTop: widthToDp(4),
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        textAlign:'left',
        paddingLeft:widthToDp(4)
    },
    priceText:{
        fontSize:14,
        fontWeight:'bold',
        padding:3
    },
    nextPriceText:{
        fontSize:14,
        fontWeight:'bold',
        padding:3,
        marginLeft:15,
        color:'#07821E'
    },
    priceView:{
        flex: 1,
        flexDirection: 'row',
        justifyContent:'space-between'
    },
    productView:{
        flex:1,
        flexDirection:'row',
        marginVertical:1,
        justifyContent:'space-around',
        paddingVertical:30,
        borderBottomWidth:0.5
    },
    firstAddBtn:{
        width:60,height:40,
        borderWidth:1,
        borderTopLeftRadius:8,
        borderBottomLeftRadius:8
    },
    firstAddBtnText:{
        color:'#000',
        fontSize:22,
        fontWeight:'200',
        textAlign:'center'
    },
    firstPlus:{
        width:40,
        height:40,
        borderWidth:1,
        borderTopRightRadius:8,
        borderBottomRightRadius:8,
        paddingBottom:10
    },
    firstPlusText:{
        color:'#000',
        fontSize:22,
        fontWeight:'400',
        textAlign:'center'
    },
    btnView:{
        flexDirection: 'row',
        justifyContent:'flex-end',
        paddingLeft:20,
        paddingTop:5
    },
    secondSubBtn:{
        width:30,
        height:40,
        borderWidth:1,
        borderTopLeftRadius:8,
        borderBottomLeftRadius:8,
        backgroundColor:'#000'
    },
    secondSubBtnText:{
        color:'#fff',
        fontSize:22,
        fontWeight:'400',
        textAlign:'center'
    },
    countText:{
        color:'#000',
        fontSize:22,
        fontWeight:'400',
        textAlign:'center'

    },
    secondAddBtn:{
        width:30,
        height:40,
        borderWidth:1,
        borderTopRightRadius:8,
        borderBottomRightRadius:8,
        backgroundColor:'#000',
    },
    secondAddBtnText:{
        color:'#fff',
        fontSize:22,
        fontWeight:'400',
        textAlign:'center'
    },
    countBtn:{
        width:40,
        height:40,
        borderWidth:1
    }

})
export default AddService;