import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function AssetExample() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Plano Gold/12 meses - EC23    113,23/Mês
      </Text>
      
      <Text style={styles.paragraph}>
        Plano Vip/12 meses(recorrente)- EC23 - 129,90/Mês
      </Text>
      
      <Text style={styles.paragraph}>
        Plano em Dobro(1)- duas pessoas/duas pessoas - 199,90/Mês
      </Text>
      
      <Text style={styles.border}>
        Duração de 12 meses
      </Text> 
 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  paragraph: {
    margin: 15,
    fontSize: 13,
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#7CFC00',
  },
  border: {
    margin: 10,
    fontSize: 10,
    fontWeight: 'bold',
    textAlign: 'left',
    color: 'black',
  },
  logo: {
    height: 5,
    width: 5,
  }
});
