import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {COLOURS, STYLES} from '../assets/constants';

const tokenData = [
  {title: 'USDT', key: 'item1', mount: '128.50K'},
  {title: 'BUSD', key: 'item2', mount: '18.50K'},
  {title: 'CAKE', key: 'item3', mount: '8.50K'},
];

const TokenItem = ({title, mount}) => {
  return (
    <TouchableOpacity style={styles.touchContainer}>
      <View style={styles.imageCharContainer}>
        <Image
          objectFit="contain"
          borderRadius={8}
          width={48}
          height={48}
          source={{uri: 'https://picsum.photos/200/300'}}
        />
        {/* Chart Graphic */}
        <View
          style={{
            width: 48,
            height: 48,
            borderRadius: 8,
            backgroundColor: COLOURS.grey,
          }}></View>
      </View>
      <View
        style={{
          paddingLeft: 8,
          paddingTop: 8,
        }}>
        <Text style={STYLES.headerText}>{title}</Text>
        <Text>{mount}</Text>
      </View>
    </TouchableOpacity>
  );
};

const TopTokens = () => {
  return (
    <View
      style={{
        paddingHorizontal: 16,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingBottom: 8,
        }}>
        <Text style={STYLES.categoryText}>Top Tokens</Text>
        <Text style={STYLES.linkText}> Active Holders</Text>
      </View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        nestedScrollEnabled
        data={tokenData}
        renderItem={({item}) => (
          <TokenItem title={item.title} mount={item.mount} />
        )}
        keyExtractor={item => item.key}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  touchContainer: {
    width: 135,
    height: 125,
    borderRadius: 10,
    paddingTop: 8,
    marginBottom: 8,
    marginRight: 8,
    marginLeft: 2,
    backgroundColor: COLOURS.backgroundColour,
    shadowColor: 'rgba(0,0,0, .4)',
    shadowOffset: {height: 1, width: 1},
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: 2,
  },

  imageCharContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default TopTokens;
