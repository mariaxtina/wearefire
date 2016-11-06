import React from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {
  Components
} from 'exponent';

import Environment from '../environments.js';

export default class Button extends React.Component {
  render() {
    return (
      <TouchableOpacity onPress={this._handleHelpPress}>
        <Components.LinearGradient
          colors={['#FFDC01', '#FDAC01', '#F73B01']}
          style={{alignItems: 'center', justifyContent: 'center', width: 200, height: 200, borderRadius: 100}}>
          <Text style={{backgroundColor: 'transparent', fontSize: 30, color: '#fff'}}>
            FIRE!
          </Text>
        </Components.LinearGradient>
      </TouchableOpacity>
    );
  }

  _handleHelpPress = async () => {
    this.props.onPress && this.props.onPress();

    // Make GET to light a fire
    try {
      let result = await fetch('http://raspberrypi:8080');
    } catch(e) {
      alert(e.message);
    }

    // Make POST to send a text
    try {
      let result = await fetch('https://fathomless-woodland-98674.herokuapp.com/', {
        headers: {
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({ phoneNumber: Environment.TEXT_NUM, message: "I NEED HELP!" })
      });
    } catch(e) {
      alert(e.message);
    }
  }
}