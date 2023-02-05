import {View, Text} from 'react-native';
import {COLOURS} from '../assets/constants';
import React from 'react';

const Searchbar = () => {
  return (
    <View
      style={{
        position: 'absolute',
        top: '7%',
        zIndex: 999,
        height: '12%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View
        style={{
          width: '86%',
          height: '100%',
          backgroundColor: COLOURS.graphicGreen,
          borderRadius: 8,
          justifyContent: 'center',
          alignItems: 'center',
        }}></View>
    </View>
  );
};

export default Searchbar;
