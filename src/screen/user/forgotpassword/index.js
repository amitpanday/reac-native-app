import React, { Component } from 'react';
import { KeyboardAvoidingView, TouchableOpacity, View,TextInput, Image } from 'react-native';
import { Container, Text, Button} from 'native-base';

// Styles
import styles from './style';
import Logo from '~assets/logo.png';

class Login extends Component {

    constructor(props){
      super(props);
      this.state = {
        useremail :'',
      }
    }

    login = () => {
                //   this.props.navigation.navigate('Profile',{
                //     credential:{
                //             useremail:this.state.useremail,
                //     },
                //   });
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
              <Text style={styles.headerText}>Forgot Password</Text>
              <View style={styles.cardView}>
                    <TextInput
                          value={this.state.useremail}
                          onChangeText={(useremail) => this.setState({ useremail })}
                          placeholder={'Email'}
                          style={styles.input}
                    />
                    <View>
                        <Button
                            style={styles.button}
                            onPress={() => this.login()}>
                            <Text style={styles.buttonText}>
                              Reset Link
                            </Text>
                        </Button>
                    </View>
                    <View>
                        <TouchableOpacity
                              style={styles.linkTextButton}
                              onPress={() => {
                                this.props.navigation.navigate('SignIn');
                              }}
                        >
                              <Text style={styles.linkText}>
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

export default Login
