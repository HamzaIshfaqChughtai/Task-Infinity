import React, { Fragment } from 'react';
import { StatusBar } from 'react-native';
import { StyleProvider, Container, Root } from 'native-base'
import Navigation from "./app/navigation"
import { Colors } from "./app/styles/colors"
import platform from './native-base-theme/variables/platform'
import getTheme from './native-base-theme/components'
console.disableYellowBox = true;

const App = () => {

  return (
    <Fragment>

      <StyleProvider style={getTheme(platform)}>

        <Root>
          <StatusBar barStyle="light-content" backgroundColor={Colors.GradientTWO} />
          <Navigation />
        </Root>

      </StyleProvider>

    </Fragment >
  );
};

export default App;
