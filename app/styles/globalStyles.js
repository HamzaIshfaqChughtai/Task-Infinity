import { Colors } from './colors';
import { fonts } from './fonts';
import { Platform } from 'react-native';

export const globalStyles = {
  header2: {
    fontFamily: fonts['Rocky-Regular'],
    fontSize: 32,
    color: Colors.white,
    textAlign: 'center',
    letterSpacing: 0.67,
    lineHeight: 38,
    textTransform: "capitalize",
  },
  iconSize: {
    color: Colors.Draft,
    fontSize: 18,
    marginTop: 1
  },
  placeholderTextColor: {
    placeholderTextColor: Colors.black,
    fontFamily: fonts['Gotham-Book']
  },

};
