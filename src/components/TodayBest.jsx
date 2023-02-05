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

const TabData = [
  {
    key: 'item1',
    title: 'BiBox',
    brandImg: 'https://picsum.photos/200/300',
    distrobuter: 'BNB Chain',
    price: '13.6K',
    mounted: '113.9%',
  },
  {
    key: 'item2',
    title: 'FTX Token',
    distrobuter: 'BNB Chain',
    brandImg: 'https://picsum.photos/200/300',
    price: '9.6K',
    mounted: '28.9%',
  },
  {
    key: 'item3',
    title: 'THOR CHAIN',
    distrobuter: 'BNB Chain',
    brandImg: 'https://picsum.photos/200/300',
    price: '2.6K',
    mounted: '36.9%',
  },
];

const TabItem = ({title, distrobuter, price, mounted, brandImg}) => {
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
                uri: brandImg,
              }}
            />
          </View>
          <View
            style={{
              justifyContent: 'center',
              paddingLeft: 8,
            }}>
            <Text style={STYLES.headerText}>{title}</Text>
            <Text>{distrobuter}</Text>
          </View>
        </View>
        <View style={styles.priceMount}>
          <Text style={STYLES.headerText}>{price}</Text>
          <Text>{mounted}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const TodayBest = () => {
  return (
    <View style={{backgroundColor: COLOURS.backgroundColour}}>
      <FlatList
        scrollEnabled={false}
        ItemSeparatorComponent={() => {
          return <Divider />;
        }}
        data={TabData}
        renderItem={({item}) => (
          <TabItem
            title={item.title}
            mounted={item.mounted}
            price={item.price}
            distrobuter={item.distrobuter}
            brandImg={item.brandImg}
          />
        )}
        keyExtractor={item => item.key}
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

export default TodayBest;
