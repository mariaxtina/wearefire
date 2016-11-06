import React from 'react';
import {
  Text,
  StyleSheet,
  View,
} from 'react-native';
import {
  Components
} from 'exponent';

import Flames from './Flame.js'
import Logs from './Logs.js'

export default class Fire extends React.Component {
  render() {
    return (
      <View style={styles.fire}>
        <Flames/>
        <Logs/>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  fire: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,

  },

});