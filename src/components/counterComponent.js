/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import {bindActionCreators} from 'redux'
import {connect} from 'react-redux';
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
    Button,

} from 'react-native';
import * as changeCounter from "../actions/index";

type Props = {};
class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
          <View>
              <Text>This is another component rendered in PAGE B</Text>
          </View>
          <View>
              <Text style={{fontSize:60}}>{this.props.count}</Text>
          </View>
        <View  style={{flexDirection: 'row'}}>
            <Button
                onPress={() => {
                    this.props.increment()
                }}
                title="Increment Count"
            />
            <Button
                color="#841584"
                onPress={() => {
                    this.props.decrement()
                }}
                title="Decrement Count"
            />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#b6bcbe',
  },
});

function mapStateToProps(state) {
    return{
        count:state.count
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({...changeCounter}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
