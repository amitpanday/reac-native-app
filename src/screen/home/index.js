import React, { Component } from 'react';
import {
    Text,
    View,
} from 'react-native';
import { Container, Content } from 'native-base'
import { Row, Col } from 'react-native-easy-grid';
import { AppHeader, Footer } from '../common/index'
import styles from './style';
import Slider from '~/screen/dashboard/slider/';
import CategorySlider from '~/screen/dashboard/categoryslider/';


export default class Index extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container style={styles.container}>
                <AppHeader navigationProps={this.props.navigation} title='Home' />
                <Content>
                    <Slider />
                    <CategorySlider />
                    <Row >
                        <Col>
                            <View>
                                <Text>Testing Home Screen</Text>
                            </View>
                        </Col>
                        <Col>
                            <View>
                                <Text>Testing Home Screen</Text>
                            </View>
                        </Col>
                    </Row>
                </Content>
                <Footer navigation={this.props.navigation} />
            </Container>
        );
    }
}
