import React from 'react';

import { StyleSheet } from 'react-native';
import { fonts } from '../../styles/fonts';
import { Colors } from '../../styles/colors';
export const styles = StyleSheet.create({
    Container: {
        height: 50
    },
    uploadphoto: {
        justifyContent: 'center',
        alignSelf: 'center',
        height: 120,
        width: 120,
        marginTop: '50%'
    },
    BottomRow: {
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row'
    },
    Buttonleft: {
        height: 50,
        borderRightWidth: 1,
        borderColor: Colors.white,
        width: '50%',
        justifyContent: 'center',
        alignSelf: 'center'
    },
    Text: {
        justifyContent: 'center',
        alignSelf: 'center',
        fontSize: 16,
        color: Colors.white,
        fontFamily: fonts['Gotham-Light']
    },
    ButtonRight: {
        height: 50,
        width: '50%',
        justifyContent: 'center',
        alignSelf: 'center'
    }




});
