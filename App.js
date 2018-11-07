import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import Bananas from './components/Bananas';
import LotsOfGreetings from './components/LotsOfGreetings';
import BlinkApp from './components/BlinkApp';
import LotsOfStyles from './components/LotsofStyles';
import FixedDimensionsBasics from './components/FixedDimensionsBasics';

export default class HelloWorldApp extends Component {
  render() {
    return (
      <ScrollView>
        <Bananas />
        <LotsOfGreetings />
        {/* <BlinkApp /> <-- annoying*/}
        <LotsOfStyles />
        <FixedDimensionsBasics />
      </ScrollView>
    );
  }
}
