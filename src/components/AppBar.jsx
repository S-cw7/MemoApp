import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function AppBar() {
  return (
    <View style={styles.appbar}>
      <View style={styles.appbarInner}>
        <Text style={styles.appbarTitle}>Memo App</Text>
        <Text style={styles.appbarRight}>ログアウト</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appbar: {
    width: '100%',
    height: 104,
    backgroundColor: '#467FD3',
    justifyContent: 'flex-end',
  },
  appbarRight: {
    position: 'absolute',
    right: 19,
    bottom: 8,
    color: 'rgba(255,255,255,0.8)',
  },
  appbarTitle: {
    marginBottom: 8,
    lineHeight: 32,
    fontSize: 22,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  appbarInner: {
    alignItems: 'center',
  },
});
