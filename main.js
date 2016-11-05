import Exponent, {
  Permissions,
  Location,
} from 'exponent';
import React from 'react';
import {
  AppRegistry,
  Platform,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import {
  NavigationProvider,
  StackNavigation,
} from '@exponent/ex-navigation';
import {
  FontAwesome,
} from '@exponent/vector-icons';

import Router from './navigation/Router';
import cacheAssetsAsync from './utilities/cacheAssetsAsync';

// import { sendSms } from './api/TwilioApi';

class AppContainer extends React.Component {
  state = {
    appIsReady: false,
  }

  componentWillMount() {
    this._loadAssetsAsync();
    this._findLocation();
  }

  _findLocation = async () => {
    const { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status === 'granted') {
      return;
    } else {
      alert('We need your location to send an SOS!')
    }
  }

  async _loadAssetsAsync() {
    try {
      await cacheAssetsAsync({
        images: [
          require('./assets/images/exponent-wordmark.png'),
        ],
        fonts: [
          {'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf')},
        ],
      });
    } catch(e) {
      console.warn(`There was an error caching assets (see: main.js), perhaps due to a network timeout, so we skipped caching. Reload the app to try again.`);
    } finally {
      this.setState({appIsReady: true});
    }
  }

  render() {
    if (this.state.appIsReady) {
      let initialRoute = Router.getRoute('home');

      return (
        <View style={styles.container}>
          <NavigationProvider router={Router}>
            <StackNavigation
              id="root"
              initialRoute={initialRoute}
            />
          </NavigationProvider>

          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          {Platform.OS === 'android' && <View style={styles.statusBarUnderlay} />}
        </View>
      );
    } else {
      return <Exponent.Components.AppLoading />;
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  statusBarUnderlay: {
    height: 24,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
});

Exponent.registerRootComponent(AppContainer);
