import React,{Component} from 'react';
import {View,StyleSheet,Image} from 'react-native';
import { widthToDp } from '../common/responsive';

export default class CatImage extends Component{
    render(){
        return(
            <View style={{width:widthToDp(80),marginLeft:widthToDp(4)}}>
                <View style={{flex:2}}>
                    <Image source={this.props.imageUrl}
                        style={{borderRadius:20,flex:1,width:null,height:null,resizeMode:'cover'}}
                    />
                </View>

            </View>


        );
    }
}
const styles = StyleSheet.create({
        conatiner:{
            flex:1,
            alignItems:'center',
            justifyContent:'center'
        }
});