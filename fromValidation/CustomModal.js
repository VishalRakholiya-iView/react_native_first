import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const CustomModal = () => {
  const [show, setShow] = useState(false);
  return (
    <View style={styles.container}>
      {show ? (
        <View style={styles.modal}>
          <View style={styles.body}>
            <Text>New Custom</Text>
            <Button title="Close" onPress={() => setShow(false)} />
          </View>
        </View>
      ) : null}
      <Button title="Modal" onPress={() => setShow(true)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  modal: {
    flex: 1,
    backgroundColor: "rgba(50,50,50,.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  body: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    height: 150,
    width: 300,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
});

export default CustomModal;
