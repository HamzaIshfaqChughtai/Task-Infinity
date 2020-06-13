import React from 'react';

import { StyleSheet } from 'react-native';
import { fonts } from '../../styles/fonts';
import { Colors } from '../../styles/colors';
export const styles = StyleSheet.create({
  Container: {
    height: 50
  },
  newMessage: {
    fontFamily: fonts['Gotham-Bold'],
    fontSize: 14,
    letterSpacing: 0.04,
    color: Colors.white,
  },

  HeaderSecond: {
    backgroundColor: Colors.item,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: "center",
    minHeight: 50,
    width: "100%"
  },
  HeaderThird: {
    flex: 2.5,
    justifyContent: "center",
    alignItems: "center",
  },
  NextArrow: {
    width: 30,
    marginLeft: 10,
    height: 30,
  },


});
