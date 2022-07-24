import React from 'react';
import { SafeAreaView, StyleSheet, TextInput } from 'react-native';
import { clickProps } from 'react-native-web/dist/cjs/modules/forwardedProps';

const UselessTextInput = (props) => {
  const [text, onChangeText] = React.useState('Useless Text');
  const [number, onChangeNumber] = React.useState(null);

  return (
    <SafeAreaView>
      <TextInput style={styles.input} onChangeText={(e)=>props.setInput(e)} />
     
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default UselessTextInput;