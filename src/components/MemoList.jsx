import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons'; 

export default function MemoList() {
  return (
    <View>
      <View style={styles.memolistItem}>
        <View>
          <Text style={styles.memolistTitle}>買い物リスト</Text>
          <Text style={styles.memolistData}>2022/12/23</Text>
        </View>
        <TouchableOpacity>
          <Feather name="x" size={16} color="#B0B0B0" />
        </TouchableOpacity>
      </View>

      <View style={styles.memolistItem}>
        <View>
          <Text style={styles.memolistTitle}>買い物リスト</Text>
          <Text style={styles.memolistData}>2022/12/23</Text>
        </View>
        <TouchableOpacity>
          <Feather name="x" size={16} color="#B0B0B0" />
        </TouchableOpacity>
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
