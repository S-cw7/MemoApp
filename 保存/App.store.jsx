import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';  //定型文

import Hello from './src/components/Hello';

export default function App() {   //HTMLに相当
//機能(Javascript)に相当
  return (
    <View style={styles.container}>
      <Hello bang={false}>World</Hello>
      <Hello style={{fontSize: 16}}>World</Hello>
      <Text>Open up App.js to start working on your app!</Text>
      {/*eslint-disable-next-line*/}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({    //CSSに相当
  container: {    
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
