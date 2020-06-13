import React, { Component } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native';
import { Container, Item, Input, } from 'native-base';
// not use using xd icon
// import Icons from 'react-native-vector-icons/AntDesign'
import { Colors } from '../../../styles/colors';
import { styles } from '../style';


export default class Home extends Component {


  constructor(props) {
    super(props);
    //setting default state
    this.state = {
      Email: "",
      Password: ""
    }
  }


  EmailValue = text => {
    if (text == '') {
      this.setState({
        Email: ""
      });
    } else {
      this.setState({
        Email: text
      });
    }
  };

  PasswordValue = text => {
    if (text == '') {
      this.setState({
        Password: ""
      });
    } else {
      this.setState({
        Password: text
      });
    }
  };

  render() {
    return (

      <LinearGradient
        start={{ x: 0, y: 1, }}
        end={{ x: 1, y: 0, }}
        colors={[Colors.GradientONE, Colors.GradientTWO, Colors.GradientTWO,]}
        style={styles.linearGradient}>

        <View style={styles.InnerBox}>
          <Text style={styles.SigInText}>
            SIGN IN
          </Text>


          <View style={styles.BoxStyle}>

            <Text style={styles.InputText}>EMAIL</Text>

            <View style={styles.headerTab}>
              <Item style={styles.headerItem}>
                <Image
                  style={{ width: 14, height: 14, }}
                  source={require('../../../images/mail.png')}
                />
                <Input
                  style={styles.InputStyle}
                  value={this.state.Email}
                  onChangeText={text => this.EmailValue(text)}
                  selectionColor={'white'}
                  returnKeyType="go"
                />
              </Item>
            </View>


            <Text style={[styles.InputText, { marginTop: 0 }]}>PASSWORD</Text>

            <View style={styles.headerTab}>
              <Item style={styles.headerItem}>
                <Image
                  style={{ width: 14, height: 14, }}
                  source={require('../../../images/lock.png')}
                />
                <Input
                  style={styles.InputStyle}
                  value={this.state.Password}
                  onChangeText={text => this.PasswordValue(text)}
                  selectionColor={'white'}
                  returnKeyType="go"
                />
              </Item>
            </View>

            <Text style={styles.FortgotText}>Forgot Password?</Text>


            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('store')}
              activeOpacity={0.5} style={{ marginTop: '25%', }}>

              <LinearGradient
                start={{ x: 0, y: 1, }} end={{ x: 1, y: 0, }}
                colors={[Colors.GradientONE, Colors.GradientTWO, Colors.GradientTWO,]}
                style={styles.NextView}>
                <Image
                  style={styles.NextArrow}
                  source={require('../../../images/arrowforword.png')}
                />
              </LinearGradient>
            </TouchableOpacity>

          </View>

          <TouchableOpacity style={styles.BottomText}>
            <Text style={styles.dontaccount}>Don't have an account? click here </Text>
          </TouchableOpacity>

        </View>

      </LinearGradient>
    );
  }
}
