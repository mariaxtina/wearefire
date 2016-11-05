import React from 'react';
import {
  Text,
  StyleSheet,
} from 'react-native';
import {
  Components
} from 'exponent';

export default class Button extends React.Component {
  render() {
    return (
      <Components.LinearGradient
        colors={['#4c669f', '#3b5998', '#192f6a']}
        style={{padding: 15, alignItems: 'center', borderRadius: 5}}>
        <Text style={{backgroundColor: 'transparent', fontSize: 15, color: '#fff'}}>
          Set me on fire!
        </Text>
      </Components.LinearGradient>
    );
  }
}