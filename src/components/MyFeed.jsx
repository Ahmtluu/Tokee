import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {COLOURS, Divider} from '../assets/constants';
import {STYLES} from '../assets/constants';

const MyFeed = () => {
  const renderList = () => {
    return (
      <TouchableOpacity
        style={{
          paddingTop: 8,
          paddingHorizontal: 18,
        }}>
        <View style={styles.tabContainer}>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.imageContainer}>
              <Image
                objectFit="contain"
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: 8,
                }}
                source={{
                  uri: 'https://picsum.photos/200/300',
                }}
              />
            </View>
            <View
              style={{
                justifyContent: 'center',
                paddingLeft: 8,
              }}>
              <Text style={STYLES.headerText}>BiBox</Text>
              <Text>BNB Chain</Text>
            </View>
          </View>
          <View style={styles.priceMount}>
            <Text style={STYLES.headerText}>13.6K</Text>
            <Text>113.9%</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{backgroundColor: COLOURS.backgroundColour}}>
      <FlatList
        scrollEnabled={false}
        ItemSeparatorComponent={() => {
          return <Divider />;
        }}
        data={[
          {title: 'Title Text', key: 'item1'},
          {title: 'Title Text', key: 'item2'},
          {title: 'Title Text', key: 'item3'},
        ]}
        renderItem={renderList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    width: '100%',
    height: 64,
    borderRadius: 10,
    marginBottom: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imageContainer: {
    width: 64,
    height: 64,
  },
  priceMount: {
    alignItems: 'flex-end',
    paddingRight: 8,
  },
});

export default MyFeed;
