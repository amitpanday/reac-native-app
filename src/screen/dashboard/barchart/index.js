import React from 'react';
import { Grid, BarChart } from 'react-native-svg-charts';
import styles from './style';
import { Row ,Col } from 'react-native-easy-grid';

const fill = 'rgb(134, 65, 244)'
const data   = [ 50, 10, 40, 95, 1, 80,70];

const barchart = props =>{
    return(
        <Row style={styles.container}>
            <Col>
                <BarChart
                    style={styles.barchart}
                    data={data}
                    svg={{fill}}
                    contentInset={{ top: 30, bottom: 30 }}
                >
                    <Grid />
                </BarChart>
            </Col>
        </Row>
    );
};

export default barchart;