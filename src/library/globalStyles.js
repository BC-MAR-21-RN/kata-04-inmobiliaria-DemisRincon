import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
const globalStyles = {
  borderRadius: 10,
};
const colors = {
  mustard: '#FBEDB7',
  lightBlue: '#F5FDFF',
  lightBrown: '#9D884F',
};
const sizes = {
  // global sizes
  base: 8,
  font: 14,
  radius: 10,
  padding: 10,
  padding2: 12,

  // font sizes
  largeTitle: 50,
  h1: 30,
  h2: 24,
  h3: 20,
  h4: 18,
  body1: 24,
  body2: 20,
  body3: 16,
  body4: 14,
  body5: 12,

  // app dimensions
  width,
  height,
};
const fonts = {
  largeTitle: {fontSize: sizes.largeTitle, lineHeight: 55},
  h1: {fontSize: sizes.h1, lineHeight: 36},
  h2: {fontSize: sizes.h2, lineHeight: 30},
  h3: {fontSize: sizes.h3, lineHeight: 22},
  h4: {fontSize: sizes.h4, lineHeight: 22},
  body1: {fontSize: sizes.body1, lineHeight: 36},
  body2: {fontSize: sizes.body2, lineHeight: 24},
  body3: {fontSize: sizes.body3, lineHeight: 22},
  body4: {fontSize: sizes.body4, lineHeight: 22},
  body5: {fontSize: sizes.body5, lineHeight: 22},
};
export {globalStyles, colors, sizes, fonts};
