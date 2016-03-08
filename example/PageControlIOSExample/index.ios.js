/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';

import PageControlIOS from 'react-native-pagecontrol';

class PageControlIOSExample extends Component {

  constructor(props) {
    super(props);

    this.state = {
      currentPage: 0,
      width: Dimensions.get('window').width
    };

    this._onPageControlValueChange = this._onPageControlValueChange.bind(this);
    this._onScroll = this._onScroll.bind(this);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.pageControlContainer}>
          <PageControlIOS
              currentPage={this.state.currentPage}
              numberOfPages={4}
              onValueChange={this._onPageControlValueChange}
              pageIndicatorTintColor="grey"
              currentPageIndicatorTintColor="rgb(200,200,0)"
          />
        </View>
        <View style={styles.scrollerContainer}>
          <ScrollView
              ref="ScrollView"
              horizontal={true}
              onScroll={this._onScroll}
              pagingEnabled={true}
              scrollEventThrottle={16}>
            <View style={[styles.scrollPage, {width: this.state.width, backgroundColor: '#F00'}]}>
              <Text>Page 1</Text>
            </View>
            <View style={[styles.scrollPage, {width: this.state.width, backgroundColor: '#0F0'}]}>
              <Text>Page 2</Text>
            </View>
            <View style={[styles.scrollPage, {width: this.state.width, backgroundColor: '#00F'}]}>
              <Text style={{color: '#FFF'}}>Page 3</Text>
            </View>
            <View style={[styles.scrollPage, {width: this.state.width, backgroundColor: '#FF0'}]}>
              <Text>Page 4</Text>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }

  _onPageControlValueChange(currentPage) {
    this.refs.ScrollView.scrollResponderScrollTo({x: this.state.width * currentPage, y: 0, animated: true});
  }

  _onScroll({nativeEvent}) {
    let currentPage = Math.round(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
    if (this.state.currentPage !== currentPage) {
      this.setState({currentPage});
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
    paddingTop: 50
  },
  pageControlContainer: {
    alignItems: 'center'
  },
  scrollerContainer: {
    flex: 1
  },
  scrollPage: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    height: 50
  }
});

AppRegistry.registerComponent('PageControlIOSExample', () => PageControlIOSExample);
