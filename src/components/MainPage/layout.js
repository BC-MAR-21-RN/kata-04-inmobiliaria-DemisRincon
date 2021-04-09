import React from 'react';
import {FlatList, View} from 'react-native';
import MinimalItem from './minimalItem';
import {stylesMainLayout} from './styles';
import data from './data.json';
const Layout = () => {
  return (
    <View style={stylesMainLayout.main}>
      <FlatList
        data={data}
        vertical
        keyExtractor={item => item.name}
        renderItem={({item, index}) => <MinimalItem key={index} data={item} />}
      />
    </View>
  );
};

export default Layout;
