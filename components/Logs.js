import React from 'react';
import {
  Text,
  StyleSheet,
  View,
} from 'react-native';
import {
  Components
} from 'exponent';

import Log from './Log'

export default class Logs extends React.Component {
  render() {
    return (
      <View>
        <Log style={styles.log1}/>
        <Log style={styles.log2}/>

      </View>
    );
  }
}

const styles = StyleSheet.create({

  log1: {
    transform: [{rotate: '20deg'}],
    bottom: -40,
    backgroundColor: '#612E25',


  },

  log2: {
    transform: [{rotate: '-20deg'}],
    backgroundColor: '#70392F',

  },
});
