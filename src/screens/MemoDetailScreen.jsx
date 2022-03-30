import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import AppBar from '../components/AppBar';
import CircleButtom from '../components/CircleButtom';

export default function MemoDetailScreen(props) {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <View style={styles.memoHeader}>
        <Text style={styles.memoTitle}>買い物リスト</Text>
        <Text style={styles.memoDate}>2022/12/24 10:00</Text>
      </View>
      <ScrollView>
        <Text style={styles.memoBody}>
          買い物リスト
          書体やレイアウトなどを確認するために用います。
          本文用なので使い方を間違えると不自然に見えることもありますので要注意。
        </Text>
      </ScrollView>
      <CircleButtom 
        style={{ top: 60, buttom: 'auto' }} 
        name="edit-3"
        onPress={ () => { navigation.navigate('MemoEdit'); }} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  memoHeader: {
    height: 96,
    backgroundColor: '#467FD3',
    justifyContent: 'center',
    paddingVertical: 24,
    paddingHorizontal: 19,
  },
  memoTitle: {
    color: '#ffffff',
    fontSize: 20,
    lineHeight: 32,
    fontWeight: 'bold',
  },
  memoDate: {
    color: '#ffffff',
    lineHeight: 16,
    fontSize: 12,
  },
  memoBody: {
    paddingVertical: 22,
    paddingHorizontal: 27,
  },
  memoText: {
    fontSize: 1,
  },

});
