import React, { Component } from 'react';
import { ScrollView, Button, Alert } from 'react-native';
import Bananas from './components/Bananas';
import LotsOfGreetings from './components/LotsOfGreetings';
import BlinkApp from './components/BlinkApp';
import LotsOfStyles from './components/LotsofStyles';
import FixedDimensionsBasics from './components/FixedDimensionsBasics';
import PizzaTranslator from './components/PizzaTranslator';

export default class HelloWorldApp extends Component {
  render() {
    return (
      <ScrollView>
        <Bananas />
        {/* <LotsOfGreetings /> */}
        {/* <BlinkApp /> <-- annoying*/}
        {/* <LotsOfStyles /> */}
        {/* <FixedDimensionsBasics /> */}
        <PizzaTranslator />
        <Button
          onPress={() => {
            Alert.alert('You tapped the button!');
          }}
          title="Press Me"
        />
      </ScrollView>
    );
  }
}
