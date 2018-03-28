/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import {bindActionCreators} from 'redux'
import {connect} from 'react-redux';
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    Alert
} from 'react-native';
import * as changeCounter from "../actions/index";

type Props = {};
class PageA extends Component<Props> {
    render() {
        if(this.props.pageStatus === 'Enabled')
        {
            return (
                <View style={styles.container}>
                    <Text style={styles.welcome}>
                        Welcome to React Native!
                    </Text>
                    <Text style={styles.instructions}>
                        You are viewing PAGE A
                    </Text>
                    <Text style={{fontSize:30, color:'green'}}>
                        Page Is {this.props.pageStatus}
                    </Text>
                    <View  style={{flexDirection: 'row', marginTop:20}}>
                        <Button
                            onPress={() => {
                                this.props.disablePage()
                            }}
                            title="Disable Page"
                        />
                    </View>
                    <View  style={{marginTop:10, width:300}}>
                        <Button
                            onPress={()=>{this.props.navigation.navigate('Page_B')}}
                            color="#841584"
                            title="GO TO PAGE B"
                        />
                    </View>
                    <View  style={{marginTop:10, width:300}}>
                        <Button
                            onPress={()=>{this.props.increment()}}
                            color="grey"
                            title="Increment Counter at Component C"
                        />
                    </View>

                </View>
            );
        }
        else
        {
            return (
                <View style={styles.container2}>
                    <Text style={styles.welcome}>
                        Welcome to React Native!
                    </Text>
                    <Text style={styles.instructions}>
                        This is a page A
                    </Text>
                    <Text style={{fontSize:30, color:'red'}}>
                        Page Is {this.props.pageStatus}
                    </Text>
                    <View  style={{flexDirection: 'row', marginTop:20}}>
                        <Button
                            onPress={() => {
                                this.props.enablePage()
                            }}
                            title="Enable Page"
                        />
                    </View>

                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5feff',
    },
    container2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#6d7172',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

function mapStateToProps(state) {
    return{
        pageStatus:state.pageStatus
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({...changeCounter}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PageA)
