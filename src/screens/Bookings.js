import React from 'react';
import { Text, View, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Container, Header, ScrollableTab, Tab, Tabs } from 'native-base';
import Ongoing from './Ongoing';
import History from './History';
import { widthToDp } from '../common/responsive';

export default function Bookings({navigation}) {
    return (
        <Container>
            <View style={{ padding: widthToDp(3), backgroundColor: '#31AAE2' }}>
                <Text style={{ fontSize: 24, fontWeight: '700', letterSpacing: 1, color: '#fff' }}>My Bookings</Text>
            </View>
            <Tabs tabBarUnderlineStyle={{ borderBottomWidth: 0, backgroundColor: '#31AAE2' }}>
                <Tab heading="Ongoing"
                    activeTabStyle={{ backgroundColor: '#31AAE2', borderWidth: 2, borderColor: '#B5B7B6' }}
                    tabStyle={{ backgroundColor: '#fff', borderWidth: 1, borderColor: '#B5B7B6' }}
                >
                    <Ongoing />
                </Tab>
                <Tab heading="History"
                    activeTabStyle={{ backgroundColor: '#31AAE2', borderWidth: 1, borderColor: '#B5B7B6' }}
                    tabStyle={{ backgroundColor: '#fff', borderWidth: 1, borderColor: '#B5B7B6' }}
                >
                    <History />
                </Tab>
            </Tabs>
        </Container>
    );
}

const styles = StyleSheet.create({

});
