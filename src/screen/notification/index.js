import React from 'react';
import { View , Text ,TouchableOpacity , Image , ScrollView} from 'react-native';
import { Container, Content } from 'native-base';
import { Row, Col } from 'react-native-easy-grid';


import { AppHeader , Footer } from '../common/'
import styles from './style';

const data = [
        { id: 1,    name: "Mark Doe",   type:'Rfq',         image: "https://bootdey.com/img/Content/avatar/avatar7.png" },
        { id: 2,    name: "Clark Man",  type:'New User',     image: "https://bootdey.com/img/Content/avatar/avatar6.png" },
        { id: 3,    name: "Jaden Boor", type:'Bidding Status',    image: "https://bootdey.com/img/Content/avatar/avatar5.png" },
        { id: 4,    name: "Srick Tree", type:'Bdiing Close',    image: "https://bootdey.com/img/Content/avatar/avatar4.png" },
        { id: 5,    name: "John Doe",   type:'Bidding Open',    image: "https://bootdey.com/img/Content/avatar/avatar3.png" },
        { id: 6,    name: "John Doe",   type:'Personal Laptop',    image: "https://bootdey.com/img/Content/avatar/avatar2.png" },
        { id: 8,    name: "John Doe",   type:'Pheripher Devices',    image: "https://bootdey.com/img/Content/avatar/avatar1.png" },
        { id: 9,    name: "John Doe",   type:'Group Created for RFQ',   image: "https://bootdey.com/img/Content/avatar/avatar4.png" },
        { id: 10,   name: "John Doe",   type:'28 user in bidding',        image: "https://bootdey.com/img/Content/avatar/avatar7.png" },
        { id: 11,   name: "John Doe",   type:'Congratulation, bidding selected',        image: "https://bootdey.com/img/Content/avatar/avatar1.png" },
];
const notification = props => {
    const component = data.map((item,key) =>{
        return(
                <TouchableOpacity
                    key={key}
                >
                    <View style={styles.row}>
                        <Image source={{ uri: item.image }} style={styles.pic} />
                        <View style={styles.nameContainer}>
                            <Text style={styles.nameTxt}>{item.type}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
        );
    });
    return (
        <Container style={styles.container}>
            <AppHeader navigationProps={props.navigation} title={'Notification'} />
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    >
                    {component}
                </ScrollView>
            <Footer navigation={props.navigation} />
        </Container>
    );
};

export default notification;