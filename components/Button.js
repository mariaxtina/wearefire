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
        colors={['#FFDC01', '#FDAC01', '#F73B01']}
        style={{alignItems: 'center', justifyContent: 'center', width: 200, height: 200, borderRadius: 100}}>
        <Text style={{backgroundColor: 'transparent', fontSize: 30, color: '#fff'}}>
          FIRE!
        </Text>
      </Components.LinearGradient>
    );
  }
}