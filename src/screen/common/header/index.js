import React from 'react'
import { Image, View, } from 'react-native'
import { Header, Title, Button, Icon, Left, Right, Body } from 'native-base'

import styles from './styles'

import Logo from '~/assets/logo.png'


const AppHeader = props => {


    const { 
      title,
      children,
      showBackButton,
      navigation,
    } = props;


    let headerStyle = styles.header;

    if (children === undefined) {
        headerStyle = { ...headerStyle, ...styles.defaultHeader }
    }

    if (navigation.title) {
      headerStyle = { ...headerStyle, ...styles.contextHeader }
    }
    
    return (
        <Header style={headerStyle}>
            <View style={{...styles.headerRow, ...styles.headerTopRow}}>
                <Left>
                  {
                    navigation.showBackButton === undefined ?
                    <Button
                        transparent
                        onPress={() => navigation.navigationProps.toggleDrawer()}
                    >
                    <Icon name="menu" style={styles.menuIcon}/>
                    </Button>
                    :
                    <Button
                        transparent
                        onPress={() => navigation.navigationProps.goBack()}
                    >
                    <Icon name="arrow-back" style={styles.menuIcon}/>
                    </Button>
                  }
                </Left>
                <Body>
                  {
                    title === null ?
                      <Image source={Logo} style={styles.logo}/>
                    :
                      <Title style={styles.title}>{navigation.title}</Title>
                  }
                </Body>
                <Right>
                      <Button
                              transparent
                              onPress={() => navigation.navigationProps.navigate('Notification')}
                      >
                            <Icon name="notifications-outline" style={styles.cartIcon}/>
                      </Button>
                </Right>
            </View>
        </Header>
    )
}

class NavigationDrawerStructure extends React.Component {

  render() {
    return (
      <AppHeader navigation={this.props} />
    );
  }
}

export default NavigationDrawerStructure;
