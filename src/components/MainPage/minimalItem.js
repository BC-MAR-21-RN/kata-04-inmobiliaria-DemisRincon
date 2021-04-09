import React, { useState } from 'react';
import {Text, View, Image} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {stylesMinimalItem as styles} from './styles';
import ImageContainer from './imageContainer';
const MinimalItem = ({
  data: {name, address, rooms, baths, area, price, image, rate, like},
}) => {
  const [isLiked, setIsLiked] = useState(like)
  return (
    <View style={styles.container}>
      <ImageContainer rate={rate} image={image} />
      <View style={styles.dataContainer}>
        <View style={styles.titileContainer}>
          <Text style={styles.title}>{name}</Text>
        </View>
        <View style={styles.content}>
          <View style={styles.rowItem}>
            <Ionicons
              name={'location-outline'}
              size={20}
              solid
              style={styles.fontIcons}
            />
            <Text style={styles.textGray}>{address}</Text>
          </View>

          <View style={styles.rowItem}>
            <Ionicons name={'bed'} size={18} solid style={styles.fontIcons} />
            <Text style={styles.textRow}>{rooms}</Text>
            <FontAwesome5
              name={'bath'}
              size={18}
              solid
              style={styles.fontIcons}
            />
            <Text style={styles.textRow}>{baths}</Text>
            <FontAwesome5
              name={'expand-arrows-alt'}
              solid
              size={18}
              style={styles.fontIcons}
            />
            <Text style={styles.textRow}>{`${area} ft`}<Text style={styles.super}>2</Text></Text>
          </View>
          <View style={{...styles.rowItem ,...styles.rowSpaced}}>
          <Text style={styles.title}>{`$${price}/m`}</Text>
            <Ionicons
              name={'heart-circle'}
              solid
              style={isLiked?styles.fontIconsG:styles.fontIcons}
              size={30}
              onPress={()=>setIsLiked(!isLiked)}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default MinimalItem;
