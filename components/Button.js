import React from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {
  Components,
  Permissions,
  Location,
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
            Fry me!
          </Text>
        </Components.LinearGradient>
      </TouchableOpacity>
    );
  }

  _handleHelpPress = async () => {
    this.props.onPress && this.props.onPress();

    // Make GET to light a fire
    try {
      let result = await fetch('http://10.10.43.74:8080');
      let resText = await result.text();
      // alert(resText);
    } catch(e) {
      // alert(e.message);
    }

    // Make POST to send a text
    try {
      let { coords } = await Location.getCurrentPositionAsync({
        enableHighAccuracy: true,
      });

      let gMapURL = 'http://maps.google.com/maps?z=12&t=m&q=loc:' + coords.latitude + '+' + coords.longitude;
      let result = await fetch('https://fathomless-woodland-98674.herokuapp.com/', {
        headers: {
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({
          phoneNumber: Environment.TEXT_NUM,
          message: 'Join me for bacon! ' + gMapURL
        })
      });

    } catch(e) {
      // alert(e.message);
    }
  }
}