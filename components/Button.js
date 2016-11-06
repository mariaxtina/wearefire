import React from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {
  Components
} from 'exponent';

import Sound from 'react-native-sound';


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
      let result = await fetch('http://google.com');
      let sound = await whoosh.play();
      let data = await result.text();
    } catch(e) {
      alert(e.message);
    }
  }

  var whoosh = new Sound('whoosh.mp3', Sound.MAIN_BUNDLE, (error) => {
    if (error) {
      console.log('failed to load the sound', error);
    } else { // loaded successfully
      console.log('duration in seconds: ' + whoosh.getDuration() +
          'number of channels: ' + whoosh.getNumberOfChannels());
    }
  });

whoosh.play((success) => {
  if (success) {
    console.log('successfully finished playing');
  } else {
    console.log('playback failed due to audio decoding errors');
  }
});

}