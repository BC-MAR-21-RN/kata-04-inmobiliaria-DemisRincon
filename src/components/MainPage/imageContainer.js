import React from 'react';
import {Text, View, Image} from 'react-native';
import {stylesImageContainer as styles} from './styles';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const ImageContainer = ({rate, image}) => {
  return (
    <View style={styles.imageContainer}>
      <Image style={styles.image} source={{uri: image}} />
      <View style={styles.rateTextArea}>
        <FontAwesome5 name={'star'} solid style={styles.fontAStar} />
        <Text style={styles.rateText}>{rate}</Text>
      </View>
    </View>
  );
};

export default ImageContainer;
