import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { KeyboardAvoidingView, TouchableOpacity, View,TextInput, Image } from 'react-native';
import { Container, Text, Button} from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";
// Styles
import styles from './styles';

import Logo from '~assets/logo.png';

class Login extends Component {

    constructor(props){
      super(props);
      this.state = {
        username :'',
        password  :'',
      }
    }

    componentDidMount() {
      fetch("https://api.myjson.com/bins/w003o")
      .then((data1) =>data1.json())
      .then((data1) => console.log(data1))
      .catch(error => console.log(error));
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
              <Text style={styles.headerText}>Sign In</Text>
              <View style={styles.cardView}>
                    <TextInput
                          value={this.state.username}
                          onChangeText={(username) => this.setState({ username })}
                          placeholder={'Username'}
                          style={styles.input}
                    />
                    <TextInput
                          value={this.state.password}
                          onChangeText={(password) => this.setState({ password })}
                          placeholder={'Password'}
                          secureTextEntry={true}
                          // keyboardType ={"number-pad"}
                          style={styles.input}
                    />
                    <View>
                        <Button
                            style={styles.button}
                            onPress={() => this.login()}>
                            <Text style={styles.buttonText}>
                              Sign In
                            </Text>
                        </Button>
                    </View>
                    <View>
                        <TouchableOpacity
                              style={styles.link}
                              onPress={() => {
                                this.props.navigation.navigate('SignUp');
                              }}>
                              <Text style={styles.linkText}
                              >
                                Register
                              </Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity
                              style={styles.linkTextButton}
                              onPress={() => {
                                this.props.navigation.navigate('ForgotPassword');
                              }}
                          >
                              <Text style={styles.linkText}>
                                Forgot Password?
                              </Text>
                        </TouchableOpacity>
                    </View>
                </View>
        </KeyboardAvoidingView>
      </Container>
    );
  }
}

export default Login

