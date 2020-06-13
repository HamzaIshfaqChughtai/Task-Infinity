import React, { Component } from 'react'
import {
    Text,
    View,
    TouchableOpacity,
    Image,
} from 'react-native';
import { Container, Item, Input, Button, Icon, Content } from 'native-base';
import ActionPhotoBar from '../../../components/header/ActionPhotoBar'
import { styles } from '../style';
import ImagePicker from 'react-native-image-crop-picker';
import { Colors } from '../../../styles/colors';
import LinearGradient from 'react-native-linear-gradient';

class UploadPhoto extends Component {
    constructor(props) {
        super(props);
        this.state = {
            circleImage: '',
        };
    }

    openGallery = () => {

        ImagePicker.openPicker({
            cropping: true,
            cropperCircleOverlay: true,
            freeStyleCropEnabled: true
        }).then(response => {
            console.log("images: ", response);

            let file = {
                name: new Date() + '.jpg',
                type: 'image/jpeg',
                uri:
                    Platform.OS === 'android'
                        ? response.path
                        : response.path.replace('file://', ''),
            };


            let image = {
                name: new Date() + '.jpg',
                type: 'image/jpeg',
                uri:
                    Platform.OS === 'android'
                        ? response.path
                        : response.path.replace('file://', ''),
            };

            this.setState(
                {
                    circleImage: image.uri
                }
            );
        });
    }


    openCamera = () => {

        ImagePicker.openCamera({
            cropping: true,
            cropperCircleOverlay: true,
            freeStyleCropEnabled: true,
        }).then(response => {
            console.log("images: ", response);

            let file = {
                name: new Date() + '.jpg',
                type: 'image/jpeg',
                uri:
                    Platform.OS === 'android'
                        ? response.path
                        : response.path.replace('file://', ''),
            };


            let image = {
                name: new Date() + '.jpg',
                type: 'image/jpeg',
                uri:
                    Platform.OS === 'android'
                        ? response.path
                        : response.path.replace('file://', ''),
            };

            this.setState(
                {
                    circleImage: image.uri
                }
            );
        });

    }



    render() {
        console.log('hamz', this.state.circleImage)
        return (
            <Container style={{ backgroundColor: Colors.IconBack }} >

                <ActionPhotoBar navigation={this.props.navigation} />


                {this.state.circleImage != "" ?
                    <Image
                        style={styles.uploadphoto}
                        source={{ uri: this.state.circleImage }}
                    />

                    :
                    <Image
                        style={styles.uploadphoto}
                        source={require('../../../images/imageupload.png')}
                    />

                }

                <View style={styles.BottomRow}>
                    <LinearGradient
                        start={{ x: 0, y: 0, }}
                        end={{ x: 0, y: 1, }}
                        colors={[Colors.GradientONE, Colors.GradientTWO,]}
                        style={styles.Buttonleft}>

                        <TouchableOpacity onPress={() => this.openCamera()}>

                            <Text style={styles.Text}>{this.state.circleImage != "" ? "CHANGE IMAGE" : " CAMERA ROOL"}</Text>

                        </TouchableOpacity>
                    </LinearGradient>


                    <LinearGradient
                        start={{ x: 0, y: 0, }}
                        end={{ x: 0, y: 1, }}
                        colors={[Colors.GradientONE, Colors.GradientTWO,]}
                        style={styles.ButtonRight}>

                        <TouchableOpacity onPress={() => { this.state.circleImage != "" ? "" : this.openGallery() }}>

                            <Text style={styles.Text}>{this.state.circleImage != "" ? "CONTINUE" : " UPLOAD PHOTO"}</Text>

                        </TouchableOpacity>
                    </LinearGradient>


                </View>

            </Container>
        )
    }
}

export default UploadPhoto
