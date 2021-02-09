import React from 'react';
import {View, Text, Image} from 'react-native';

export default function SplashScreen (){
        return(
            <View style={{flex:1,alignContent:'center',justifyContent:'center',alignItems:'center',backgroundColor:'#e08e12'}}>
                <Image
                    source={require("../images/splash.png")}
                    style={{
                        height: '100%',
                        width:'100%',
                      }}
                />
            </View>
        )
    }
