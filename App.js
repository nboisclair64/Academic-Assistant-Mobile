import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { StyleSheet, Text, View, Button, Alert, SafeAreaView, TextInput } from 'react-native';
import { Input } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
const input = React.createRef();

export default function App() {
  
  const [time, setTime] = useState('');
  const [numAssign, setNum] = useState('');
  const createAssign = () => {
    for (let i = 0; i < numAssign; i++){
      var assign 
        /*ReactDOM.render(
          React.createElement(Input, [], 'Testing'),
        //Try to work on creating new elements to the screen
        );*/
    }
  }
  const ShowData = () => {
    Alert.alert(
      time,
      numAssign,
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.title}>Academic Assistant</Text>
        <Input
          placeholder='Time Studying'
          onChangeText={time => setTime(time)}
          containerStyle={styles.inputBox}
        />
        <Input
          placeholder='Amount of Assignments'
          onChangeText={numAssign => setNum(numAssign)}
          containerStyle={styles.inputBox}
        />
        <Button style={styles.button}
          title="Submit"
          onPress={createAssign}
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
