/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Linking
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

function callEmail() {
    const subject = 'Hello!';
    const body = 'Hello-World';
    const email = 'feedback@company.com';
    const url = `mailto:${email}?subject=${subject}&body=${body}`;

    console.log("Call Email",url);

    Linking.canOpenURL(url).then(supported => {
      if (supported) {
        Linking.openURL(
         url,
        );
      } else {
        console.log('Link not supported');
      }
    });
}

function Test(): JSX.Element {
  return(
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: Colors.black 
          },
        ]}>
        {"Hello"}
      </Text>
      <Pressable
          style={{margin:20, backgroundColor:'cyan'}}
          onPress={async () => callEmail()}>
          <Text style={{padding: 20}}>Email test</Text>
        </Pressable>
    </View>

  )
}


function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Test/>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
