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

export default class Bacon extends React.Component {
  state = {
    baconProgress1: new Animated.Value(0),
    baconProgress2: new Animated.Value(0),
    baconProgress3: new Animated.Value(0),
    baconProgress4: new Animated.Value(0),
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
    this.state.baconProgress1.setValue(0);
    this.state.baconProgress2.setValue(0);
    this.state.baconProgress3.setValue(0);
    this.state.baconProgress4.setValue(0);
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
    this.state.baconProgress1.setValue(0);

    Animated.timing(this.state.baconProgress1, {
      ...animationConfig,
    }).start(({finished}) => {
      if (!finished) { return; }
      this._startAnimation1();
    });
  }

  _startAnimation2 = () => {
    this.state.baconProgress2.setValue(0);

    Animated.timing(this.state.baconProgress2, {
      ...animationConfig,
    }).start(({finished}) => {
      if (!finished) { return; }
      this._startAnimation2();
    });
  }

  _startAnimation3 = () => {
    this.state.baconProgress3.setValue(0);

    Animated.timing(this.state.baconProgress3, {
      ...animationConfig,
    }).start(({finished}) => {
      if (!finished) { return; }
      this._startAnimation3();
    });
  }

  _startAnimation4 = () => {
    this.state.baconProgress4.setValue(0);

    Animated.timing(this.state.baconProgress4, {
      ...animationConfig,
    }).start(({finished}) => {
      if (!finished) { return; }
      this._startAnimation4();
    });
  }

  render() {
    let {
      baconProgress1,
      baconProgress2,
      baconProgress3,
      baconProgress4,
    } = this.state;

    const transformStylesForValue = (progress, number) => {
      return {
        opacity: progress.interpolate({
          inputRange: [0, 0.8, 1],
          outputRange: [1, 0.9, 0],
        }),
        // backgroundColor: progress.interpolate({
        //   inputRange: [0, 0.4, 1],
        //   outputRange: ['rgba(255, 220, 1, 1)', 'rgba(253, 172, 1, 1)', 'rgba(247, 59, 1, 1)'],
        // }),
        transform: [
          {
            translateY: progress.interpolate({
              inputRange: [0, 1],
              outputRange: [-150, 40],
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

    const bacon1 = transformStylesForValue(baconProgress1, 1);
    const bacon2 = transformStylesForValue(baconProgress2, 2);
    const bacon3 = transformStylesForValue(baconProgress3, 3);
    const bacon4 = transformStylesForValue(baconProgress4, 4);

    return (
      <View style={styles.baconContainer}>
        <Animated.View style={[styles.bacon1, bacon1]} />
        <Animated.View style={[styles.bacon2, bacon2]} />
        <Animated.View style={[styles.bacon3, bacon3]} />
        <Animated.View style={[styles.bacon4, bacon4]} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bacon1: {
    borderRadius: 10,
    backgroundColor: '#BE4A02',
    width: 160,
    height: 40,
    position: 'relative',
    top: 150,
    // left: 110,
  },
  bacon2: {
    borderRadius: 10,
    backgroundColor: '#BE4A02',
    width: 160,
    height: 40,
    position: 'relative',
    top: 50,
    right: 50,
  },
  bacon3: {
    borderRadius: 10,
    backgroundColor: '#BE4A02',
    width: 160,
    height: 40,
    position: 'relative',
    top: 50,
    left: 50,
  },
  bacon4: {
    borderRadius: 10,
    backgroundColor: '#BE4A02',
    width: 160,
    height: 40,
    position: 'relative',
    top: 50,
    left: 110,
  },
  baconContainer: {
    // width: 300,
    // height: 300,
    flex: 1,
  },
});