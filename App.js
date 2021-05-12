import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Alert, SafeAreaView } from 'react-native';
import { Input } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
      <Text style={styles.title}>Academic Assistant</Text>
      <StatusBar style="auto" />
      </View>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  title: {
    paddingTop: 20,
    fontSize: 30
  }
});
