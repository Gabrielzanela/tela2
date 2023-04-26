import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
      Engenharia do corpo                
      </Text>
      <Card>
        <AssetExample />
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 10,
    justifyContent: 'right',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 2,
  },
  paragraph: {
    margin: 12,
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'left',
    color: 'dark',
  },
});
