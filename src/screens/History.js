import React from 'react';
import {View} from 'react-native';
import { Card, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';
import { widthToDp } from '../common/responsive';

export default function History(){
    return(
        <View style={{margin:widthToDp(3)}}>
              <Card style={{borderRadius:20}}>
        <List>
          <ListItem avatar>
            <Left>
              <Thumbnail source={require('../images/lady.jpg')} />
            </Left>
            <Body style={{ marginLeft: widthToDp(6) }}>
              <Text style={{ fontSize: 20, fontWeight: 'bold', letterSpacing: 1 }}>Mrs. Shreya Goyal</Text>
              <Text style={{ letterSpacing: 1 }}>Hair Styling</Text>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ fontWeight: 'bold', letterSpacing: 1 }}>Date :</Text>
                <Text>07-03-20</Text>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ fontWeight: 'bold', letterSpacing: 1 }}>Amount :</Text>
                <Text>R. 2000</Text>
              </View>
            </Body>
          </ListItem>
        </List>
      </Card>
      <Card style={{borderRadius:20}}>
        <List>
          <ListItem avatar>
            <Left>
              <Thumbnail source={require('../images/lady.jpg')} />
            </Left>
            <Body style={{ marginLeft: widthToDp(6) }}>
              <Text style={{ fontSize: 20, fontWeight: 'bold', letterSpacing: 1 }}>Mr. Prakash Sinha</Text>
              <Text style={{ letterSpacing: 1 }}>Hair Styling</Text>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ fontWeight: 'bold', letterSpacing: 1 }}>Date :</Text>
                <Text>07-03-20</Text>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ fontWeight: 'bold', letterSpacing: 1 }}>Amount :</Text>
                <Text>R. 2000</Text>
              </View>
            </Body>
          </ListItem>
        </List>
      </Card>
      </View>
    )
}