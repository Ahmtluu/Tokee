import {StyleSheet} from 'react-native';
import {View} from 'react-native';
export const COLOURS = {
  headerColour: '#242132',
  backgroundColour: '#ffffff',
  selectGrey: '#F3F3F3',
  graphicRed: '#972525',
  graphicGreen: '#41BB5B',
  grey: '#567189',
  linkBlue: '#6E77BD',
  textBlack: '#20262E',
};

export const STYLES = StyleSheet.create({
  headerText: {
    fontWeight: '900',
    fontSize: 14,
    color: COLOURS.textBlack,
  },
  tagText: {
    fontWeight: '900',
    fontSize: 16,
    color: COLOURS.textBlack,
  },
  categoryText: {
    fontWeight: '700',
    fontSize: 18,
    color: COLOURS.textBlack,
  },
  linkText: {
    fontSize: 14,
    color: COLOURS.linkBlue,
  },
  cardShadow: {
    backgroundColor: '#fff',
    shadowColor: 'rgba(0,0,0, .4)',
    shadowOffset: {height: 1, width: 1},
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: 2,
  },
});

export const Divider = () => {
  return (
    <View alignItems="center">
      <View
        style={{
          height: 2,
          width: '85%',
          backgroundColor: COLOURS.selectGrey,
        }}
      />
    </View>
  );
};
