import React, { Component } from 'react';
import { View, StyleSheet, Text, ActivityIndicator } from 'react-native';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
import TabScene from "./TabScene";

export default class TabViewExample extends Component {
    state = {
        index: 0
    };

    _handleChangeTab = index => this.setState({ index });

    _renderHeader = (props) => { return <TabBar style={styles.tabBar} {...props} /> };


    _renderScene = () => {
        let map = this.props.routes.reduce((acc, i, key) => {
            acc[String(key)] = () => { return <TabScene data={i} /> }
            return acc;
        }, {});
        return SceneMap(map);
    }

    render() {
        if (!this.props.routes.length) {
            return (
                <View style={styles.container}>
                    <ActivityIndicator style={{ flex: 2 }} size="large" />
                    <Text style={[styles.container, styles.loadingText]}>Loading</Text>
                </View>
            )
        }
        return (
            <TabViewAnimated
                style={styles.container}
                navigationState={{ index: this.state.index, routes: this.props.routes }}
                renderScene={this._renderScene()}
                renderHeader={this._renderHeader}
                onRequestChangeTab={this._handleChangeTab}
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    tabBar: {
        paddingTop: 20
    },
    text: {
        flex: 1,
        color: "#ffffff",
        padding: 20
    },
    loadingText: {
        textAlign: 'center',
        fontSize: 20
    }
});