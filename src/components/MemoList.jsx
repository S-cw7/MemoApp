import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native';
import { Feather } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';

export default function MemoList() {
  const navigation = useNavigation();
  return (
    <View>
      
      <TouchableOpacity 
        style={styles.memolistItem}
        onPress={ () => { navigation.navigate('MemoDetail');}}
      >
        <View>
          <Text style={styles.memolistTitle}>買い物リスト</Text>
          <Text style={styles.memolistData}>2022/12/23</Text>
        </View>
        <TouchableOpacity 
          style ={ styles.memoDelete }
          onPress={ () => { Alert.alert('Are you sure?');}}>
          <Feather name="x" size={16} color="#B0B0B0" />
        </TouchableOpacity>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.memolistItem}
        onPress={ () => { navigation.navigate('MemoDetail');}}
      >
        <View>
          <Text style={styles.memolistTitle}>買い物リスト</Text>
          <Text style={styles.memolistData}>2022/12/23</Text>
        </View>
        <TouchableOpacity 
          style ={ styles.memoDelete }
          onPress={ () => { Alert.alert('Are you sure?');}}>
          <Feather name="x" size={16} color="#B0B0B0" />
        </TouchableOpacity>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.memolistItem}
        onPress={ () => { navigation.navigate('MemoDetail');}}
      >
        <View>
          <Text style={styles.memolistTitle}>買い物リスト</Text>
          <Text style={styles.memolistData}>2022/12/23</Text>
        </View>
        <TouchableOpacity 
          style ={ styles.memoDelete }
          onPress={ () => { Alert.alert('Are you sure?');}}>
          <Feather name="x" size={16} color="#B0B0B0" />
        </TouchableOpacity>
      </TouchableOpacity>

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
  memoDelete: {
    padding: 8,
  }
});
