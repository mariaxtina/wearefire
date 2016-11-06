import React from 'react';
import {
  Text,
  StyleSheet,
  View,
} from 'react-native';
import {
  Components
} from 'exponent';

import Flame from './Flame.js'

export default class Flames extends React.Component {
  render() {
    return (
      <View>
        <Flame/>
        <Flame/>
        <Flame/>
        <Flame/>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  flame1: {

  },

  flame2: {

  },

  flame3: {

  },

});
