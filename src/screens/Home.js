import React,{useState} from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Icon} from 'react-native-elements';
import { Col, Grid } from "react-native-easy-grid";
import { ScrollView,TouchableOpacity } from 'react-native-gesture-handler';
import SearchBar from './SearchBar';
import CatImage from '../components/CatImage';
import { heightToDp, widthToDp } from '../common/responsive';

export default function Home({navigation}) {
    const [text, setText] = useState('');
    return (
            <View style={styles.container}>

                <View style={styles.txtmap}>
                <View style={{flexDirection:'row'}}>
                <Icon
                            name='navigation'
                            // type='font-awesome'
                            type="Ionicon"
                            color='#fff'
                            onPress={() => console.log('hello')} />
                    <Text style={{ fontSize: 20, paddingLeft: 20, color: '#fff', fontWeight: '600',
                                    marginBottom:10 }}>

                 143, Block A, Sector 132, Noida
                </Text>
                </View>
                <View>
                <SearchBar
                        style={{ backgroundColor: 'white', borderWidth:1 }}
                        containerStyle={{ backgroundColor: 'white' }}
                        placeholder={'Search for a services'}
                        onChangeText={text => setText(text)}
                        value={text}
                    />
                    </View>
                </View>



            <ScrollView>

                <View style={styles.slider1}>

                <ScrollView horizontal={true}
                showsHorizontalScrollIndicator={false}
                >
                    <CatImage imageUrl={require('../images/Slider.png')}/>
                    <CatImage imageUrl={require('../images/Slider.png')}/>
                    <CatImage imageUrl={require('../images/Slider.png')}/>
                    <CatImage imageUrl={require('../images/Slider.png')}/>
                    <CatImage imageUrl={require('../images/Slider.png')}/>
                </ScrollView>
                </View>

        <View style={{marginVertical:40}}>
                <Grid>
                    <Col style={styles.colmn}>
                        <TouchableOpacity
                            onPress={()=>navigation.navigate('ServiceAndRepair')}
                        >
                        <Image source={require('../images/Icon-96.png')}
                            style={{ width: '100%' }}
                        />
                        <Text style={styles.gridtxt}>This is a sallon</Text>
                        </TouchableOpacity>
                    </Col>

                    <Col style={styles.colmn}>
                        <Image source={require('../images/Icon-96.png')}
                            style={{ width: '100%' }}
                        />
                        <Text style={styles.gridtxt}>This is a sallon</Text>
                    </Col>

                    <Col style={styles.colmn}>
                        <Image source={require('../images/Icon-96.png')}
                            style={{ width: '100%' }}
                        />
                        <Text style={styles.gridtxt}>This is a sallon</Text>
                    </Col>

                    <Col style={styles.colmn}>
                        <Image source={require('../images/Icon-96.png')}
                            style={{ width: '100%' }}
                        />
                        <Text style={styles.gridtxt}>This is a sallon</Text>
                    </Col>
                </Grid>

                <Grid>
                    <Col style={styles.colmn}>
                        <Image source={require('../images/Icon-96.png')}
                            style={{ width: '100%' }}
                        />
                        <Text style={styles.gridtxt}>This is a sallon</Text>
                    </Col>

                    <Col style={styles.colmn}>
                        <Image source={require('../images/Icon-96.png')}
                            style={{ width: '100%' }}
                        />
                        <Text style={styles.gridtxt}>This is a sallon</Text>
                    </Col>

                    <Col style={styles.colmn}>
                        <Image source={require('../images/Icon-96.png')}
                            style={{ width: '100%' }}
                        />
                        <Text style={styles.gridtxt}>This is a sallon</Text>
                    </Col>

                    <Col style={styles.colmn}>
                        <Image source={require('../images/Icon-96.png')}
                            style={{ width: '100%' }}
                        />
                        <Text style={styles.gridtxt}>This is a sallon</Text>
                    </Col>
                </Grid>
            </View>


                <View style={{backgroundColor:'#fff'}}>
                    <Text style={styles.promotionsText}>Promotions</Text>


                    <View style={styles.slider2}>

                        <ScrollView horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        >
                            <CatImage imageUrl={require('../images/Slider.png')}/>
                            <CatImage imageUrl={require('../images/Slider.png')}/>
                            <CatImage imageUrl={require('../images/Slider.png')}/>
                            <CatImage imageUrl={require('../images/Slider.png')}/>
                            <CatImage imageUrl={require('../images/Slider.png')}/>
                        </ScrollView>
                        </View>
                </View>

                </ScrollView>
            </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    txtmap: {
        padding: widthToDp(3),
        backgroundColor: '#31AAE2',
        width: '100%',
        height: heightToDp(16),
        flexDirection:'column'
    },
    colmn: {
        borderWidth: 0.5,
        borderColor: '#D2D2D2',
        padding: widthToDp(3),
        backgroundColor:'#fff'

    },
    gridtxt: {
        width: '100%',
        textAlign: 'center',
        fontWeight: '700'
    },
    slider1:{
        height:200,
        backgroundColor:'#fff',
        paddingVertical:20
    },
    slider2:{
        height:240,
        backgroundColor:'#fff',
        paddingVertical:20
    },

    promotionsText:{
        padding:10,
        fontSize:24,
        fontWeight:'700',
        letterSpacing:1,
        marginLeft:10
    }

});
