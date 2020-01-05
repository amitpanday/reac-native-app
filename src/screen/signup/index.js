import React, { Component } from 'react';
import { KeyboardAvoidingView, TouchableOpacity, View,TextInput, Image } from 'react-native';
import { Container, Text, Button} from 'native-base';
// Styles
import styles from './style';
import Logo from '~assets/logo.png';

export default class SignUp extends Component {

    constructor(props){
      super(props);
      this.state = {
        useremail :'',
        userphone :'',
        password  :'',
      }
    }

    login = () => {
                  this.props.navigation.navigate('Dashboard',{
                    credential:{
                            username:this.state.username,
                            password:this.state.password
                    },
                  });
    }

  static navigationOptions = {
    title: 'Login',
  };

  render() {
    return (
      <Container style={styles.container}>
          <View style={styles.logoContainer}>
            <Image 
              resizeMode="contain" 
              source={Logo} 
              style={styles.logo}
            />
          </View>
        <KeyboardAvoidingView 
          behavior="padding" 
          style={styles.formContainer} 
          enabled>
              <Text style={styles.headerText}>Sign Up</Text>
              <View style={styles.cardView}>
                    <TextInput
                          value={this.state.useremail}
                          onChangeText={(useremail) => this.setState({ useremail })}
                          placeholder={'User email'}
                          style={styles.input}
                    />
                    <TextInput
                          value={this.state.userphone}
                          onChangeText={(userphone) => this.setState({ userphone })}
                          placeholder={'Phone'}
                          style={styles.input}
                    />
                    <TextInput
                          value={this.state.password}
                          onChangeText={(password) => this.setState({ password })}
                          placeholder={'Password'}
                          secureTextEntry={true}
                          style={styles.input}
                    />
                    <View>
                        <Button
                            style={styles.button}
                            onPress={() => this.login()}>
                            <Text style={styles.buttonText}>
                              Sign Up
                            </Text>
                        </Button>
                    </View>
                    <View>
                        <TouchableOpacity
                              style={styles.link}
                              onPress={() => {
                                this.props.navigation.navigate('SignIn');
                              }}>
                              <Text style={styles.linkText}
                              >
                                Sing In
                              </Text>
                        </TouchableOpacity>
                    </View>
                </View>
        </KeyboardAvoidingView>
      </Container>
    );
  }
}
