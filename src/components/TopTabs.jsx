import {View, Text, StyleSheet, Pressable} from 'react-native';
import React, {useState} from 'react';
import TodayBest from './TodayBest';
import MyFeed from './MyFeed';
import {COLOURS, STYLES} from '../assets/constants';
import FeatherIcon from 'react-native-vector-icons/Feather';

const TabCategories = [
  {key: '1', name: 'todaysBest', value: "Today's Best", iconName: 'award'},
  {key: '2', name: 'myFeed', value: 'My Feed', iconName: 'eye'},
];

function RadioButton({data, onSelect}) {
  const [userOption, setUserOption] = useState('todaysBest');
  const selectHandler = name => {
    onSelect(name);
    setUserOption(name);
  };
  return (
    <View style={{width: '100%'}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          marginBottom: 8,
        }}>
        {data.map((item, key) => {
          return (
            <Pressable
              key={key}
              style={
                item.name === userOption ? styles.selected : styles.unselected
              }
              onPress={() => selectHandler(item.name)}>
              <FeatherIcon name={item.iconName} size={18} color="black" />
              <Text style={styles.option}> {item.value}</Text>
            </Pressable>
          );
        })}
      </View>
      {/*TODO Combine TodayBest and MyFeed data and show them in same component */}
      {userOption === 'todaysBest' ? <TodayBest /> : <MyFeed />}
    </View>
  );
}

const TopTabs = () => {
  const [option, setOption] = useState('todaysBest');

  return (
    <View style={styles.container}>
      <RadioButton data={TabCategories} onSelect={value => setOption(value)} />
    </View>
  );
};
const styles = StyleSheet.create({
  selected: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 42,
    width: 150,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOURS.selectGrey,
  },
  option: {
    fontWeight: '700',
    fontSize: 14,
    color: COLOURS.textBlack,
  },
  unselected: {
    flexDirection: 'row',
    height: 42,
    width: 150,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },

  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default TopTabs;
