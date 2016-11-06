import Exponent from 'exponent';
import React from 'react';
import {
  Animated,
  Easing,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const flameDuration = 1500;

const animationConfig = {
  toValue: 1,
  duration: flameDuration,
};

export default class Fire extends React.Component {
  state = {
    fireProgress1: new Animated.Value(0),
    fireProgress2: new Animated.Value(0),
    fireProgress3: new Animated.Value(0),
    fireProgress4: new Animated.Value(0),
  }

  componentDidMount() {
    this._mounted = true;
  }

  componentWillUnmount() {
    this._mounted = false;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.active === true && this.props.active === false) {
      this._startAnimations();
    } else if (nextProps.active === false && this.props.active === true) {
      this._stopAnimations();
    }
  }

  _stopAnimations = () => {
    this.state.fireProgress1.setValue(0);
    this.state.fireProgress2.setValue(0);
    this.state.fireProgress3.setValue(0);
    this.state.fireProgress4.setValue(0);
  }

  _startAnimations = () => {
    this._startAnimation1();

    setTimeout(() => {
      this.props.active && this._startAnimation2();
    }, flameDuration / 4);

    setTimeout(() => {
      this.props.active && this._startAnimation3();
    }, (flameDuration / 4) * 2);

    setTimeout(() => {
      this.props.active && this._startAnimation4();
    }, (flameDuration / 4) * 3);
  }

  _startAnimation1 = () => {
    this.state.fireProgress1.setValue(0);

    Animated.timing(this.state.fireProgress1, {
      ...animationConfig,
    }).start(({finished}) => {
      if (!finished) { return; }
      this._startAnimation1();
    });
  }

  _startAnimation2 = () => {
    this.state.fireProgress2.setValue(0);

    Animated.timing(this.state.fireProgress2, {
      ...animationConfig,
    }).start(({finished}) => {
      if (!finished) { return; }
      this._startAnimation2();
    });
  }

  _startAnimation3 = () => {
    this.state.fireProgress3.setValue(0);

    Animated.timing(this.state.fireProgress3, {
      ...animationConfig,
    }).start(({finished}) => {
      if (!finished) { return; }
      this._startAnimation3();
    });
  }

  _startAnimation4 = () => {
    this.state.fireProgress4.setValue(0);

    Animated.timing(this.state.fireProgress4, {
      ...animationConfig,
    }).start(({finished}) => {
      if (!finished) { return; }
      this._startAnimation4();
    });
  }

  render() {
    let {
      fireProgress1,
      fireProgress2,
      fireProgress3,
      fireProgress4,
    } = this.state;

    const transformStylesForValue = (progress, number) => {
      return {
        opacity: progress.interpolate({
          inputRange: [0, 0.8, 1],
          outputRange: [1, 0.9, 0],
        }),
        backgroundColor: progress.interpolate({
          inputRange: [0, 0.4, 1],
          outputRange: ['rgba(255, 220, 1, 1)', 'rgba(253, 172, 1, 1)', 'rgba(247, 59, 1, 1)'],
        }),
        transform: [
          {
            translateY: progress.interpolate({
              inputRange: [0, 1],
              outputRange: [40, -150],
            })
          },
          {
            translateX: progress.interpolate({
              inputRange: [0, 0.6, 1],
              outputRange: [0, 0, (Math.floor(Math.random() * 100) % 2 === 0) ? 10 * number : -10 * number],
            })
          },
          {
            scale: progress.interpolate({
              inputRange: [0, 0.1, 1],
              outputRange: [0, 1.3, 0.5],
            })
          },
          {
            rotate: '45deg',
          },
        ]
      }
    }

    const fire1 = transformStylesForValue(fireProgress1, 1);
    const fire2 = transformStylesForValue(fireProgress2, 2);
    const fire3 = transformStylesForValue(fireProgress3, 3);
    const fire4 = transformStylesForValue(fireProgress4, 4);

    return (
      <View style={styles.fireContainer}>
        <Animated.View style={[styles.fire, fire1]} />
        <Animated.View style={[styles.fire, fire2]} />
        <Animated.View style={[styles.fire, fire3]} />
        <Animated.View style={[styles.fire, fire4]} />
        <View style={[styles.log, styles.log2]} />
        <View style={[styles.log, styles.log1]} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  fire: {
    borderRadius: 10,
    backgroundColor: 'red',
    width: 80,
    height: 80,
    position: 'absolute',
    bottom: 50,
    left: 110,
  },
  log: {
    borderRadius: 10,
    position: 'absolute',
    bottom: 0,
    left: 50,
    right: 50,
    height: 30,
    backgroundColor: 'brown',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {width: 2, height: 2},
    shadowRadius: 2,
  },
  log1: {
    backgroundColor: '#612E25',
    transform: [{rotate: '20deg'}],
  },
  log2: {
    backgroundColor: '#70392f',
    transform: [{rotate: '-20deg'}],
  },
  fireContainer: {
    width: 300,
    height: 300,
  },
});