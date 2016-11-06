import React from 'react';
import {
  Text,
  StyleSheet,
  View,
} from 'react-native';
import {
  Components
} from 'exponent';

export default class Log extends React.Component {
  render() {
    return (
      <View style={[styles.log, this.props.style]}>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  log: {
    width: 300,
    height: 50,
    borderRadius: 10,

  },

});
