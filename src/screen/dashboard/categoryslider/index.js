import React from 'react';
import {
    Text,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import styles from './style';



const CategorySlider = props => {

    const category = [
        { id: 1, title: 'Differentiator1' },
        { id: 2, title: 'Differentiator2' },
        { id: 3, title: 'Differentiator3' },
        { id: 4, title: 'Differentiator4' },
        { id: 5, title: 'Differentiator5' },
        { id: 6, title: 'Differentiator6' },
    ];

    const component = category.map((title, key) => {
        return (
            <Col key={key}>
                <TouchableOpacity
                    style={styles.link}
                >
                    <Text style={styles.heading}>{title.title}</Text>
                </TouchableOpacity>
            </Col>
        );
    });
    return (
        <Grid >
            <Text style={styles.heading}>Differentiator</Text>
            <Row >
                <ScrollView
                    alwaysBounceVertical={false}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                >
                    {component}
                </ScrollView>
            </Row>
        </Grid>
    );
}

export default CategorySlider