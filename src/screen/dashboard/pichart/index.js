import React from 'react';
import { View, Text } from 'react-native';
import { Content } from 'native-base';
import { Row, Col } from 'react-native-easy-grid';
import { PieChart } from 'react-native-svg-charts'
import styles from './style';



const pieChart = props => {

    const data = [5, 15, 20, 60];
    const piColor = ['red', 'green', 'yellow', 'blue'];
    const pieData = data
        .filter(value => value > 0)
        .map((value, index) => ({
            value,
            svg: {
                fill: piColor[index],
                onPress: () => console.log('press', index),
            },
            key: `pie-${index}`,
        }));

    const items = [
        { id: 1, title: 'High Risk' },
        { id: 2, title: 'Risky' },
        { id: 3, title: 'Dominic' },
        { id: 4, title: 'Moderate Risk' },
        { id: 5, title: 'Low Risk' },
    ];
    const Item = items.map((title, key) => {
        return (
            <View key={key} style={styles.content}>
                <View style={styles.ulCircle} />
                <Text style={styles.ul}>{title.title}</Text>
            </View>
        );
    });
    
    return (
        <Content>
            <Text style={styles.heading}>WorkFlow</Text>
            <Row style={styles.category}>
                <Col style={styles.pieContainer}>
                    <PieChart
                        style={styles.piChart}
                        data={pieData}
                    />
                </Col>
                <Col style={styles.contentContainer}>
                    <Text style={styles.heading}>WorkFlow</Text>
                    {Item}
                </Col>
            </Row>
        </Content>
    );
}

export default pieChart;