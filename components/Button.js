import React from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {
  Components
} from 'exponent';

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

    try {
      let result = await fetch('https://fathomless-woodland-98674.herokuapp.com/', {
        headers: {
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({ phoneNumber: "12269733176", message: "ALERT!!" })
      });
      let data = await result.text();
    } catch(e) {
      alert(e.message);
    }
  }
}