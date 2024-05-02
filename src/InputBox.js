import React, { useState } from "react";
import {
  Alert,
  Button,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

const InputBox = () => {
  const [val, setVal] = useState("");
  const [data, setData] = useState([]);

  const handleButtonPress = () => {
    setData([...data, val]);
    setVal("");
  };

  const renderData = ({ item }) => {
    return <Text>{item}</Text>;
  };

  return (
    <SafeAreaView style={styles.main}>
      <Text style={{ marginBottom: 12 }}>Text Input</Text>
      <TextInput
        style={styles.input}
        value={val}
        onChangeText={(text) => setVal(text)}
        placeholder="Enter Your Task..."
        // keyboardType="numeric" // set keyBoard Type
        // autoCorrect={true}  // set autoCorrect word
        // enterKeyHint="search" // change the enter button icon (returnKeyType)
        // autoCapitalize="sentences" // set autoCapitalize word
        // autoFocus={true} // set auto
        // blurOnSubmit={true} // set blurOnSubmit  >>>>>?
        // multiline={true} // set multiline
        // numberOfLines={3} // set numberOfLines
        // caretHidden={false} // set caret hidden means thats not show the cursor
        // editable={true} // >>>>>?
        // contextMenuHidden={true} // >>>>>>>?
        // defaultValue="Please Enter Your Task"
        // cursorColor="aqua"
        // editable={true} // You cannot change the word after writing it
        // inputMode="numeric"
        // secureTextEntry={true} // like passwprd
        // textAlign="center"
      />
      <Button title="Click" onPress={handleButtonPress} />

      <FlatList
        data={data}
        renderItem={renderData}
        style={{ marginTop: 12 }}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  input: {
    borderWidth: 1,
    borderRadius: 7,
    width: 150,
    marginBottom: 20,
    padding: 10,
  },
});

export default InputBox;
