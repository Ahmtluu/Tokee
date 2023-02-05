import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import {STYLES} from '../assets/constants';

const tagData = [
  {
    key: 'item1',
    title: 'DeFi',
    people: 128,
  },
  {
    key: 'item2',
    title: 'NFT',
    people: 50,
  },
  {
    key: 'item3',
    title: 'sidechain',
    people: 29,
  },
  {
    key: 'item4',
    title: 'sidechain',
    people: 29,
  },
];

const TagItem = ({title, people}) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'column',
        alignItems: 'center',
        width: 100,
        height: 125,
        borderRadius: 10,
        marginBottom: 16,
        marginRight: 8,
        marginLeft: 2,
      }}>
      <View
        style={{
          height: 72,
          width: 72,
          backgroundColor: 'grey',
          borderRadius: 50,
          marginBottom: 8,
        }}></View>
      <Text style={STYLES.tagText}>#{title}</Text>
      <Text>{people} people</Text>
    </TouchableOpacity>
  );
};

const Tags = () => {
  return (
    <View
      style={{
        paddingTop: 48,
        paddingLeft: 16,
      }}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={tagData}
        renderItem={({item}) => (
          <TagItem title={item.title} people={item.people} />
        )}
      />
    </View>
  );
};

export default Tags;
