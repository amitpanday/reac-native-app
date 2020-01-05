import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import { Container, Icon } from 'native-base'
import styles from './style';
import { AppHeader ,Footer } from '~/screen/common/';
import { Col, Row } from 'react-native-easy-grid';
import { ScrollView } from 'react-native-gesture-handler';


const data = [
  { id: 1, rfqId: 'RFQ123456789', rfqTitle: "Peripheral>Mouse 10(),Keyboard 10()>Kochi", biddingStatus: 'Open', actionFlag: 'Finalize', image: "https://img.icons8.com/clouds/100/000000/groups.png", },
  { id: 2, rfqId: 'RFQ123456789', rfqTitle: "InputOut Devices>Mouse 10(),Keyboard 10()>Kochi", biddingStatus: 'Open', actionFlag: '', image: "https://img.icons8.com/color/100/000000/real-estate.png", },
  { id: 3, rfqId: 'RFQ123456789', rfqTitle: "PersonalLaptop>Mouse 10(),Keyboard 10()>Kochi", biddingStatus: 'Open', actionFlag: 'Pending', image: "https://img.icons8.com/color/100/000000/find-matching-job.png", },
  { id: 4, rfqId: 'RFQ123456789', rfqTitle: "LaptopAccessories>Mouse 10(),Keyboard 10()>Kochi", biddingStatus: 'Open', actionFlag: '', image: "https://img.icons8.com/clouds/100/000000/employee-card.png", },
  { id: 5, rfqId: 'RFQ123456789', rfqTitle: "Marketing>Mouse 10(),Keyboard 10()>Kochi", biddingStatus: 'Open', actionFlag: 'Finalize', image: "https://img.icons8.com/color/100/000000/land-sales.png", },
  { id: 6, rfqId: 'RFQ123456789', rfqTitle: "LaptopAccessories>Mouse 10(),Keyboard 10()>Kochi", biddingStatus: 'Open', actionFlag: '', image: "https://img.icons8.com/color/100/000000/land-sales.png", },
  { id: 7, rfqId: 'RFQ123456789', rfqTitle: "PersonalComputer>Mouse 10(),Keyboard 10()>Kochi", biddingStatus: 'Close', actionFlag: '', image: "https://img.icons8.com/color/100/000000/land-sales.png", },
  { id: 8, rfqId: 'RFQ123456789', rfqTitle: "PersonalComputer>Mouse 10(),Keyboard 10()>Kochi", biddingStatus: 'Close', actionFlag: '', image: "https://img.icons8.com/color/100/000000/land-sales.png", },
  { id: 9, rfqId: 'RFQ123456789', rfqTitle: "PersonalComputer>Mouse 10(),Keyboard 10()>Kochi", biddingStatus: 'Close', actionFlag: '', image: "https://img.icons8.com/color/100/000000/land-sales.png", },
  { id: 10, rfqId: 'RFQ123456789', rfqTitle: "PersonalComputer>Mouse 10(),Keyboard 10()>Kochi", biddingStatus: 'Close', actionFlag: '', image: "https://img.icons8.com/color/100/000000/land-sales.png", },
  { id: 11, rfqId: 'RFQ123456789', rfqTitle: "PersonalComputer>Mouse 10(),Keyboard 10()>Kochi", biddingStatus: 'Close', actionFlag: '', image: "https://img.icons8.com/color/100/000000/land-sales.png", },
  { id: 12, rfqId: 'RFQ123456789', rfqTitle: "PersonalComputer>Mouse 10(),Keyboard 10()>Kochi", biddingStatus: 'Close', actionFlag: '', image: "https://img.icons8.com/color/100/000000/land-sales.png", },
];

const Category = props => {
  const { navigation } = props;
  const categoryname = navigation.getParam('category');
  const component = data.map((item, key) => {
    return (
      <TouchableOpacity
        key={key} 
        onPress={() => {
            props.navigation.navigate('Details',
            {
              detailsName: item.rfqTitle
            })
        }}
      >
            <Row style={styles.card}>
                <Col size={20}>
                  <Image style={styles.image} source={{ uri: item.image }} /> 
                </Col>
                <Col size={55}>
                  <Row>
                    <Text style={styles.name}>{item.rfqTitle.substring(0, 33)}...</Text>
                  </Row>
                  <Row>
                    <Text style={styles.rfqId}>{item.rfqId}</Text>
                  </Row>
                </Col>
                <Col size={25}>
                  <Row>
                    <Icon name="lock" style={styles.Icon} />
                    <Text style={styles.biddingStatus}>{item.biddingStatus}</Text>
                  </Row>
                  {
                    item.actionFlag === '' ?
                      <View></View>
                      :
                      <Row>
                        <Icon name="eye" style={styles.Icon} />
                        <Text style={styles.actionFlag}>{item.actionFlag}</Text>
                      </Row>
                  }
                </Col>
            </Row>
      </TouchableOpacity>
    );
  });

  return (
    <Container style={styles.container}>
      <AppHeader navigationProps={props.navigation} title={categoryname} showBackButton='true' />
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
          {component}
      </ScrollView>
      <Footer navigation={props.navigation}/>
    </Container>
  );
}

export default Category;
