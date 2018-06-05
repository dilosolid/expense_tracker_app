import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'mobx-react';
import GlobalStore from './store/GlobalStore';
import Main from './src/components/Main';
import TopRibbon from './/src/components/TopRibbon';
import { Font } from 'expo';

export default class App extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = { fontLoaded: false};    
  }

  async componentDidMount() {
    await Font.loadAsync({
      awesome: require('./assets/fonts/fontawesome-webfont.ttf'),
    });
    this.setState({ fontLoaded: true });
  }
  
  render() {
    return (
      <Provider GlobalStore={GlobalStore}>
        <View style={styles.container}>
          {this.state.fontLoaded ? <TopRibbon /> : null}
          {this.state.fontLoaded ? <Main /> : null}
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
});
