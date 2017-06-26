import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TabViewExample from "./components/TabViewExample";
import config from "./config.json";

const index = 0;
let routes = [];

export default class App extends React.Component {

  state = {
    index: 0,
    routes: []
  }
  componentDidMount() {
    fetch(config.endpoint)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          index: this.state.index, routes: responseJson
        })
      })
  }
  render() {
    return (
      <TabViewExample routes={this.state.routes} index={this.state.index} />
    );
  }
}