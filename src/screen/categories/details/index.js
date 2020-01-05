import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import { Container } from 'native-base';
import { AppHeader, Footer } from '~/screen/common/';
import styles from './style';



const data = [
  { id: 1,    name: "Mark Doe",       image: "https://bootdey.com/img/Content/avatar/avatar7.png" },
  { id: 2,    name: "Clark Man",      image: "https://bootdey.com/img/Content/avatar/avatar6.png" },
  { id: 3,    name: "Jaden Boor",     image: "https://bootdey.com/img/Content/avatar/avatar5.png" },
  { id: 4,    name: "Srick Tree",     image: "https://bootdey.com/img/Content/avatar/avatar4.png" },
  { id: 5,    name: "John Doe",       image: "https://bootdey.com/img/Content/avatar/avatar3.png" },
  { id: 6,    name: "John Doe",       image: "https://bootdey.com/img/Content/avatar/avatar2.png" },
  { id: 8,    name: "John Doe",       image: "https://bootdey.com/img/Content/avatar/avatar1.png" },
  { id: 9,    name: "John Doe",       image: "https://bootdey.com/img/Content/avatar/avatar4.png" },
  { id: 10,   name: "John Doe",       image: "https://bootdey.com/img/Content/avatar/avatar7.png" },
  { id: 11,   name: "John Doe",       image: "https://bootdey.com/img/Content/avatar/avatar1.png" },
];

const details = props => {
  const { navigation } = props;
  const detailsName = navigation.getParam('detailsName');
  const component = data.map((item, key) => {
    return (
      <TouchableOpacity
        key={key}
      >
        <View style={styles.row}>
          <Image source={{ uri: item.image }} style={styles.pic} />
          <View style={styles.nameContainer}>
            <Text style={styles.nameTxt}>{item.name}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  });
  return (
    <Container style={styles.container} >
      <AppHeader navigationProps={props.navigation} title={detailsName} showBackButton='true' />
        <ScrollView
          showsVerticalScrollIndicator={false}
        >
          {component}
        </ScrollView>
      <Footer navigation={props.navigation} />
    </Container>
  );
}

export default details;
