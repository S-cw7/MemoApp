import React from 'react';
import { View, StyleSheet } from 'react-native';

import AppBar from '../components/AppBar';
import MemoList from '../components/MemoList';
import CircleButtom from '../components/CircleButtom';

export default function MemoListScreen(props){
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <MemoList />
      <CircleButtom 
        name="plus" 
        onPress={ () => { navigation.navigate('MemoCreate'); }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
  },
});
