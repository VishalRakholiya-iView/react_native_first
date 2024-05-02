import React from "react";
import {
  View,
  KeyboardAvoidingView,
  TextInput,
  StyleSheet,
  Text,
  Button,
  ScrollView,
} from "react-native";

const KeyBoard = () => {
  return (
    <ScrollView>
      <KeyboardAvoidingView
        style={styles.container}
        // behavior="padding"
        keyboardVerticalOffset={0}
        enabled
      >
        <View style={styles.inner}>
          <Text style={styles.header}>Header</Text>

          {new Array(50).fill(1).map((item) => (
            <TextInput
              placeholder="Username"
              style={styles.textInput}
              enterKeyHint="send"
            />
          ))}

          <View style={styles.btnContainer}>
            <Button title="Submit" onPress={() => null} />
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    padding: 24,
    flex: 1,
  },
  header: {
    fontSize: 36,
    marginBottom: 48,
  },
  textInput: {
    height: 40,
    borderColor: "#000000",
    borderBottomWidth: 1,
    marginBottom: 36,
  },
  btnContainer: {
    backgroundColor: "white",
    marginTop: 12,
  },
});

export default KeyBoard;
