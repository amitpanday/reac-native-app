import React, { Component } from 'react';
import {
    Text,
    View,
    SafeAreaView, 
    ScrollView,
} from 'react-native';
import { Col, Row} from "react-native-easy-grid";
import { Container , Content}  from 'native-base';
import styles from './style';
import { AppHeader , Footer} from '../common/';
import Slider from './slider';
import CatSlider from './categoryslider';
import PieChart from './pichart';
import BarChart from './barchart';


export default class Index extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container>
                <SafeAreaView style={styles.container}>
                    <AppHeader navigationProps={this.props.navigation} title='Dashboard'/>
                    <ScrollView 
                        style={styles.scrollView}
                        showsVerticalScrollIndicator={false}
                    >
                        <Slider />
                        <PieChart />
                        <CatSlider />                                 
                        <BarChart />
                        <View style={{padding:10}}></View>
                    </ScrollView>
                </SafeAreaView>
                <Footer navigation={this.props.navigation}/>
            </Container>
        );
    }
}
