import React from 'react';
import { StyleSheet, View, Text, Platform, TouchableOpacity, Image } from 'react-native';
import { Colors } from '../../styles/colors';
import { Left, Right, Body } from "native-base";
import LinearGradient from 'react-native-linear-gradient';
import { styles } from './style';

class ActionSecondHeader extends React.Component {
    render() {
        return (
            <LinearGradient
                start={{ x: 0, y: 1, }}
                end={{ x: 1, y: 0, }}
                colors={[Colors.GradientTWO, Colors.GradientONE,]}
                style={styles.linearGradient}>

                <View style={[styles.HeaderSecond, { justifyContent: "flex-end" }]}>

                    <Left style={{ flex: 2.5, }}>
                        <Image
                            style={styles.NextArrow}
                            source={require('../../images/more.png')}
                        />
                    </Left>

                    <Body style={{ flex: 5, justifyContent: 'center', }}>
                        <Text style={[styles.newMessage, { textAlign: "center" }]}>STORE</Text>
                    </Body>

                    <Right style={styles.HeaderThird}>
                        <TouchableOpacity
                            activeOpacity={0.5}
                            onPress={() => this.props.navigation.navigate('UploadPhoto')}
                            style={{ padding: 10 }} >

                            <Image
                                style={styles.NextArrow}
                                source={require('../../images/photo.png')}
                            />
                        </TouchableOpacity>
                    </Right>

                </View >
            </LinearGradient >

        );
    }
}


export default ActionSecondHeader;