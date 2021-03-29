import React from 'react'
import { Text, View, Image } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import { stylesMinimalItem as styles } from './styles'
const MinimalItem = ({
    data: {
        name,
        address,
        rooms,
        baths,
        area,
        price,
        image,
        rate,
        like

    }
}) => {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={{uri:image}}/>
                   <View style={styles.rateText}>
                   <FontAwesome5 name={'star'} solid color={'#EEBA00'}  />
                       <Text >{rate}</Text>
                   </View>
                  
            </View>
            <View style={styles.dataContainer} >
                <Text>{name}</Text>
                <Text>{address}</Text>
                <View>
                    <Text>{rooms}</Text>
                    <Text>{baths}</Text>
                    <Text>{area}</Text>
                </View>
                <View>
                    <Text>{price}</Text>
                </View>
            </View>
        </View>
    )
}

export default MinimalItem
