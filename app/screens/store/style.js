import React from 'react';

import { StyleSheet } from 'react-native';
import { Colors } from '../../styles/colors';
import { fonts } from '../../styles/fonts';
import { heightPercentageToDP } from '../../components/React Native Responsive Screen';



export const styles = StyleSheet.create({

    linearGradient: {
        flex: 1,
    },
    BoxStyle: {
        height: heightPercentageToDP('28'),
        backgroundColor: Colors.white,
        elevation: 12,
        padding: 20,
        shadowColor: 'rgba(0,0,0,0.8)',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.7,
        shadowRadius: 5,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40
    },
    CategoriesPic: {
        height: 34,
        width: 34,
        justifyContent: 'center',
        alignSelf: 'center',
    },
    openPic: {
        height: 24,
        marginTop: 12,
        width: 30,
        justifyContent: 'center',
        alignSelf: 'center',
    },
    ItemClick: {
        justifyContent: 'space-between',
        flex: 1,
        alignItems: 'center',
        shadowColor: 'rgba(0,0,0,0.8)',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.7,
        shadowRadius: 5,
    },
    IconBack: {
        height: 60,
        width: 60,
        backgroundColor: Colors.IconBack,
        borderRadius: 40,
        justifyContent: 'center',
        alignSelf: 'center',
    },
    featuredproduct: {
        height: 164,
        borderRadius: 6,
        width: 140,
        backgroundColor: Colors.white,
    },
    CategoriesText: {
        fontFamily: fonts["Gotham-Rocky-Bold"],
        fontSize: 12,
        marginTop: 12,
        fontWeight: 'bold',
        color: Colors.textColor,
        letterSpacing: 0.04,
    },
    Allcategorieshead: {
        fontFamily: fonts["Gotham-Rocky-Bold"],
        fontSize: 14,
        fontWeight: 'bold',
        color: Colors.black,
        letterSpacing: 0.04,

    },
    FeaturedBox: {
        justifyContent: 'space-between',
        margin: 6,
        marginLeft: 15,
        shadowColor: 'rgba(0,0,0,0.8)',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.7,
        shadowRadius: 5,

    },
    FeaturedFirstROW: {
        padding: 10,
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    kgView: {
        borderRadius: 4,
        padding: 4,
        backgroundColor: Colors.GradientTHREE
    },
    kgtext: {
        color: Colors.white,
        fontSize: 10
    },
    Item: {
        height: 20,
        width: 20
    },
    SelectedItem: {
        height: 50,
        width: 70,
        justifyContent: 'center',
        alignSelf: 'center'
    },
    itemType: {
        color: Colors.textColor,
        fontSize: 14,
        marginTop: 10,
        marginLeft: 10

    },
    itemRs: {
        color: Colors.GradientTHREE,
        fontSize: 14,
        fontWeight: '800',
        marginTop: 4,
        marginLeft: 10
    },
    ViewAll: {
        marginRight: 15,
        color: Colors.textColor,
        fontSize: 12,
        fontWeight: 'bold'
    }



});
