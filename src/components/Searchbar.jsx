import {View, Text, TextInput, StyleSheet, Image} from 'react-native';
import {COLOURS} from '../assets/constants';
import React, {useState} from 'react';

const Searchbar = () => {
  const [search, onchangeSearch] = useState('');
  return (
    <View
      style={{
        position: 'absolute',
        top: 38,
        zIndex: 999,
        height: 64,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View
        style={{
          width: '85%',
          height: '100%',
          borderRadius: 8,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: '#fff',
          shadowColor: 'rgba(0,0,0, .4)',
          shadowOffset: {height: 1, width: 1},
          shadowOpacity: 1,
          shadowRadius: 1,
          elevation: 2,
        }}>
        <TextInput
          ref={this.inputRef}
          style={styles.input}
          onChangeText={onchangeSearch}
          value={search}
          placeholder="Search network"
        />

        <Image
          style={{
            width: 42,
            height: 42,
            borderRadius: 50,
            margin: 8,
          }}
          resizeMode="contain"
          source={{uri: 'https://picsum.photos/200/300'}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: '75%',
    marginLeft: 12,
    padding: 10,
    fontSize: 16,
  },
});

export default Searchbar;
