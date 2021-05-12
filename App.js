import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Alert, SafeAreaView, TextInput } from 'react-native';
import { Input } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
const input = React.createRef();
var time;
var numAssign;
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.title}>Academic Assistant</Text>
        <Input
          ref={input}
          placeholder='Time Studying'
          containerStyle={styles.inputBox}
          onChangeText={value => this.setState({time:value})}
        />
        <Input
          placeholder='Amount of Assignments'
          containerStyle={styles.inputBox}
        />
        <Button style={styles.button}
        title="Submit"
      />
      <StatusBar style="auto" />
      </View>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
  },
  inputBox: {
    paddingTop:30,
    textAlign: 'left',
    width:250,
  },
  button: {
    paddingTop: 50,
  }
});
