import React from 'react';
import {Button, StatusBar, Text, useColorScheme, View} from 'react-native';

import {Colors, Header} from 'react-native/Libraries/NewAppScreen';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [showMessage, setShowMessage] = React.useState(false);
  const safePadding = '5%';

  return (
    <View style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View style={{paddingRight: safePadding}}>
        <Header />
      </View>
      <Button
        testID="hello_button"
        title="Click me!"
        onPress={() => setShowMessage(true)}
      />
      {showMessage && <Text testID="hello_text">Hello!!!</Text>}
    </View>
  );
}

export default App;
