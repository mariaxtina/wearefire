import React from 'react';
import {
  Text,
  StyleSheet,
  View,
} from 'react-native';
import {
  Components
} from 'exponent';

export default class Flame extends React.Component {
  render() {
    return (
      <View style={styles.flame}>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  flame: {
    transform: [{rotate: '45deg'}],
    width: 200,
    height: 200,
    backgroundColor: '#FFDC01',
    borderRadius: 30,
    bottom: -40,

  },

});
