import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import { Container } from 'native-base';
import { Row } from 'react-native-easy-grid';
import styles from './styles';
import { AppHeader , Footer} from '~/screen/common/';

export default class Profile extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      username :'Jhon Doe',
    }
  }


  render() {
    return (
      <Container style={styles.container}>
          <AppHeader navigationProps={this.props.navigation} title='User Profile' />
          <Row size={1}>
              <View style={styles.header}>
                <View style={styles.headerContent}>
                    <Image 
                      style={styles.avatar}
                      source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}
                    />
                    <Text style={styles.name}>
                      {this.state.username}
                    </Text>
                </View>
              </View>
          </Row>
          <Row size={3} >
                <View style={styles.body}>
                  <View style={styles.bodyContent}>
                      <TouchableOpacity 
                                onPress={() => {
                                                this.props.navigation.navigate('Category',
                                                { category:'Approval Workflow'});
                                              }}
                      >
                                              <View style={styles.menuBox}>
                                                    <Image style={styles.icon} source={{uri: 'https://png.icons8.com/facebook-like/'}}/>
                                                    <Text style={styles.info}>Approval Workflow</Text>
                                              </View>
                      </TouchableOpacity>
                      <TouchableOpacity 
                                onPress={() => {
                                              this.props.navigation.navigate('Category',
                                                { category:'Request for Quotation'});
                                            }}
                      >
                                              <View style={styles.menuBox}>
                                                <Image style={styles.icon} source={{uri: 'https://png.icons8.com/heart/office/40/2ecc71'}}/>
                                                <Text style={styles.info}>Request for Quotation</Text>
                                              </View>
                      </TouchableOpacity>
                      <TouchableOpacity 
                                onPress={() => {
                                              this.props.navigation.navigate('Category',
                                                { category:'Purchase Order'});
                                            }}
                      >
                                              <View style={styles.menuBox}>
                                                <Image style={styles.icon} source={{uri: 'https://png.icons8.com/bar-chart'}}/>
                                                <Text style={styles.info}>Purchase Order</Text>
                                              </View>
                      </TouchableOpacity>
                      <TouchableOpacity 
                                onPress={() => {
                                              this.props.navigation.navigate('Category',
                                                { category:'Dashboard'});
                                            }}
                      >
                                              <View style={styles.menuBox}>
                                                <Image style={styles.icon} source={{uri: 'https://png.icons8.com/shopping-cart'}}/>
                                                <Text style={styles.info}>Dashboard</Text>
                                              </View>
                      </TouchableOpacity>
                      <TouchableOpacity 
                                onPress={() => {
                                              this.props.navigation.navigate('Category',
                                                { category:'Descriptive Analytics'});
                                            }}
                      >
                                              <View style={styles.menuBox}>
                                                <Image style={styles.icon} source={{uri: 'https://png.icons8.com/product'}}/>
                                                <Text style={styles.info}>Descriptive Analytics</Text>
                                              </View>
                      </TouchableOpacity>
                      <TouchableOpacity 
                                onPress={() => {
                                              this.props.navigation.navigate('Category',
                                                { category:'Unified Analytics'});
                                            }}
                      >
                                              <View style={styles.menuBox}>
                                                <Image style={styles.icon} source={{uri: 'https://png.icons8.com/shopping-basket'}}/>
                                                <Text style={styles.info}>Unified Analytics</Text>
                                              </View>
                      </TouchableOpacity>
                      <TouchableOpacity 
                                onPress={() => {
                                              this.props.navigation.navigate('Category',
                                                { category:'Key Performance Indicatores'});
                                            }}
                      >
                                              <View style={styles.menuBox}>
                                                <Image style={styles.icon} source={{uri: 'https://png.icons8.com/notification'}}/>
                                                <Text style={styles.info}>Key Performance Indicatores</Text>
                                              </View>
                      </TouchableOpacity>
                      <TouchableOpacity 
                                onPress={() => {
                                              this.props.navigation.navigate('Category',
                                                { category:'Financial Info'});
                                            }}
                      >
                                            <View style={styles.menuBox}>
                                              <Image style={styles.icon} source={{uri: 'https://png.icons8.com/profile'}}/>
                                              <Text style={styles.info}>Financial Info</Text>
                                            </View>
                      </TouchableOpacity>
                      <TouchableOpacity 
                                onPress={() => {
                                              this.props.navigation.navigate('Category',
                                                { category:'Other Info'});
                                            }}
                      >
                                            <View style={styles.menuBox}>
                                              <Image style={styles.icon} source={{uri: 'https://png.icons8.com/friends'}}/>
                                              <Text style={styles.info}>Other Info</Text>
                                            </View>
                      </TouchableOpacity>
                  </View>
              </View>
          </Row>
        <Footer navigation={this.props.navigation}/>
      </Container>
    );
  }
}
