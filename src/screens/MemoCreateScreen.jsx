import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import AppBar from '../components/AppBar';
import CircleButtom from '../components/CircleButtom';
import KeyboardSafeView from '../components/KeyBoardSafeView';

export default function MemoCreateScreen(props) {
  const { navigation } = props;
  return (
    <KeyboardSafeView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput value="" multiline style={styles.input} />
      </View>
      <CircleButtom 
        name="check" 
        onPress={ () => { navigation.goBack(); }}
      />
    </KeyboardSafeView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    paddingHorizontal: 27,
    paddingVertical: 32,
    flex: 1,
  },
  input: {
    flex: 1,
    textAlignVertical: 'top',
    fontSize: 16,
    lineHeight: 24,
  },

});
