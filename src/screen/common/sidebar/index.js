import React from 'react'
import { Image, View , Text,  FlatList,TouchableOpacity } from 'react-native';
import { Container ,Footer, Icon} from 'native-base';
import { Row, Col } from 'react-native-easy-grid';
import styles from './style';
import drawerImage from '~/assets/profile.png'



const data =[
  { id:1 ,title: "Home",           route: "Home" ,        icon: "home"},
  { id:2 ,title: "Dashboard",      route: "Dashboard",    icon: "md-information-circle"},
  { id:3 ,title: "Profile",        route: "Profile",      icon: "person"},
  { id:4 ,title: "RFQ",            route: "RFQ",          icon: "clock"},
  { id:5 ,title: "Notification",   route: "Notification", icon: "notifications-outline" },
  { id:6 ,title: "Logout",         route: "Logout",       icon: "md-log-out" },
];


const sideBar = props =>{


  const Item = (item) =>{
    // console.log(item.item.item)
    return(
      <TouchableOpacity
      onPress={() => props.navigation.navigate(item.item.item.route)}
      >
       <Row >
              <Icon name={item.item.item.icon} style={styles.menuicon}/>
               <View style={styles.menuTitle}>
                     <Text style={styles.text}>{item.item.item.title}</Text>
               </View>
       </Row>
      </TouchableOpacity>
    );
 }

  return(
   <Container style={styles.container}>
     <Row size={1} >
       <View style={styles.drawerProfileCover}>
            <Row >
              <Col size={1}>
                  <View style={styles.drawerImage} >
                        <Image  source={drawerImage} style={styles.profileImage}/>
                  </View>
              </Col>
              <Col size={2}>
                    <View style={styles.title}>
                          <Text style={styles.nameText}>Jhon Doe</Text>
                          <Text style={styles.nameText}>JhonDoe@gmail.com</Text>
                    </View>
              </Col>
            </Row>
       </View>
     </Row>
     <Row size={3}>
              <FlatList 
                  data={data}
                  style={styles.menuList}
                  renderItem={(item) => <Item item={item} />}
                  keyExtractor={item => item.id}
              />
     </Row>
     {/* <Footer style={{backgroundColor:'#fff'}}>
            <Row size={1} style={styles.footerText}>
              <Text style={styles.text}>Version 0.002</Text>
            </Row>
     </Footer> */}
   </Container>
  );
}

export default sideBar
