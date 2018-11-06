import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Bananas from './components/Bananas';
import LotsOfGreetings from './components/LotsOfGreetings';
import BlinkApp from './components/BlinkApp';
import LotsOfStyles from './components/LotsofStyles';

export default class HelloWorldApp extends Component {
  render() {
    return (
      <>
        <Bananas />
        <LotsOfGreetings />
        {/* <BlinkApp /> <-- annoying*/}
        <LotsOfStyles />
      </>
    );
  }
}
