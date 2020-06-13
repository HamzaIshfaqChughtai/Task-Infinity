import React from 'react';

import { StyleSheet } from 'react-native';
import { Colors } from '../../styles/colors';
import { fonts } from '../../styles/fonts';
import { heightPercentageToDP } from '../../components/React Native Responsive Screen';



export const styles = StyleSheet.create({

  linearGradient: {
    flex: 1,
  },
  SigInText: {
    fontFamily: fonts["Gotham-Rocky-Bold"],
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.white,
    letterSpacing: 0.04,
    justifyContent: 'center',
    alignSelf: 'center'
  },
  InnerBox: {
    marginTop: 20
  },
  BoxStyle: {
    height: heightPercentageToDP('60'),
    backgroundColor: Colors.white,
    margin: 15,
    padding: 10,
    marginTop: 30,
    borderRadius: 20,
    borderBottomLeftRadius: 180,
    elevation: 12,
    shadowColor: 'rgba(0,0,0,0.8)',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.7,
    shadowRadius: 5,
  },
  headerTab: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15
  },
  headerItem: {
    flex: 1,
    borderColor: Colors.textColor,
    height: 34,
  },
  SearchInputStyle: {
    color: Colors.white,
    fontFamily: fonts['Gotham-Book'],
    fontSize: 14,
  },
  InputText: {
    marginTop: 12,
    marginLeft: 15,
    marginBottom: -12,
    color: Colors.textColor,
    fontFamily: fonts['Gotham-Book'],
    fontSize: 12,
  },
  FortgotText: {
    color: Colors.GradientONE,
    fontFamily: fonts['Gotham-Book'],
    fontSize: 12,
    fontWeight: 'bold',
    letterSpacing: 0.04,
    alignSelf: 'flex-end',
    marginRight: 40
  },
  NextView: {
    alignSelf: 'flex-end',
    marginRight: 10,
    height: 50,
    width: 50,
    borderRadius: 40,
  },
  dontaccount: {
    color: Colors.white,
    fontFamily: fonts['Gotham-Book'],
    fontSize: 14,
    fontWeight: '400',
    letterSpacing: 0.04,
  },
  NextArrow: {
    width: 30,
    height: 30,
    alignSelf: 'center',
    marginTop: 10
  },
  BottomText: {
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 10
  }

});
