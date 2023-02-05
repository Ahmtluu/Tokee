import React from 'react';
import {FlatList, View, ScrollView, Text, StatusBar} from 'react-native';
import {COLOURS} from '../assets/constants';
import Searchbar from '../components/Searchbar';
import Tags from '../components/Tags';
import TopTabs from '../components/TopTabs';
import TopTokens from '../components/TopTokens';

const Home = () => {
  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        position: 'relative',
        backgroundColor: COLOURS.backgroundColour,
      }}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={COLOURS.headerColour}
      />
      <View
        style={{
          padding: 32,
          position: 'relative',
          backgroundColor: COLOURS.headerColour,
        }}
      />
      <Searchbar />

      <ScrollView>
        <Tags />
        <TopTabs />
        <TopTokens />
      </ScrollView>
    </View>
  );
};

export default Home;
