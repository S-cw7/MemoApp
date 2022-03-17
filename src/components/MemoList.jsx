import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function MemoList() {
  return (
    <View>
      <View style={styles.memolistItem}>
        <View>
          <Text style={styles.memolistTitle}>買い物リスト</Text>
          <Text style={styles.memolistData}>2022/12/23</Text>
        </View>
        <View>
          <Text>X</Text>
        </View>
      </View>

      <View style={styles.memolistItem}>
        <View>
          <Text style={styles.memolistTitle}>買い物リスト</Text>
          <Text style={styles.memolistData}>2022/12/23</Text>
        </View>
        <View>
          <Text>X</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  memolistItem: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 19,
    borderBottomWidth: 1,
    borderColor: 'rgba(0,0,0,0.15)',
  },
  memolistTitle: {
    fontSize: 16,
    lineHeight: 32,
  },
  memolistData: {
    fontSize: 12,
    lineHeight: 16,
    color: '#848484',
  },
});
