import React, { PureComponent } from 'react';
import { View, StyleSheet, Text } from 'react-native';


export default class TabScene extends PureComponent {
    render() {
        return (
            <View style={[styles.container, this.props.data.style]}>
                <Text style={styles.text}>{this.props.data.body}</Text>
            </View>)
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {
        flex: 1,
        color: "#ffffff",
        padding: 20
    }
});