import React                     from 'react';
import { Text }    from 'react-native';
import {Footer, FooterTab, Button, Icon } from 'native-base';
import styles from './style';


       const AppFooter = props =>{
            const {title,navigation} = props;
            const { routeName } = navigation.state;
            return(
                    <Footer>
                        <FooterTab style={styles.container} >
                            <Button 
                                onPress={() =>navigation.navigate('Dashboard')}
                            >
                                <Icon name='md-information-circle' style={styles.menuIcon}/>
                                <Text style={styles.menuTitle}>Dashboard</Text>
                            </Button>
                            <Button
                                onPress={() =>navigation.navigate('Profile')}
                            >
                                <Icon name='person' style={styles.menuIcon}/>
                                <Text style={styles.menuTitle}>Profile</Text>
                            </Button>
                            <Button
                                onPress={() =>navigation.navigate('Home')}
                            >
                                <Icon name='home' style={styles.menuIcon}/>
                                <Text style={styles.menuTitle}>Home</Text>
                            </Button>
                            <Button
                                onPress={() =>navigation.navigate('Profile')}
                            >
                                <Icon name='clock' style={styles.menuIcon}/>
                                <Text style={styles.menuTitle}>RFQ</Text>
                            </Button>
                            <Button
                                onPress={() =>navigation.navigate('Profile')}
                            >
                                <Icon name='apps' style={styles.menuIcon}/>
                                <Text style={styles.menuTitle}>Apps</Text>
                            </Button>
                        </FooterTab>
                    </Footer>
            );
       }
       export default AppFooter;