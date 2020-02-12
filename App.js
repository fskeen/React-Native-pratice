 import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [outputText, setOutputText] = useState("Open up App.js to start working on your app!")

  const changeText = () => {
    setOutputText("YOOOOOOOO!")
  }
  return (
    <View style={styles.container}>
      <Text>{outputText}</Text>
      <Button title="BUTTON??" onPress={changeText}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c0d6b6',
    // backgroundImage: 'linear-gradient(black, white)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
