import { Button, StatusBar, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

const StatusBars = () => {
  const [show, setShow] = useState(false);
  const [titles, setTitles] = useState("Show");
  const hideAndShow = () => {
    setShow(!show);
    setTitles(show ? "Hide" : "Show");
  };

  return (
    <View>
      <StatusBar
        animated={true}
        backgroundColor="red"
        barStyle="light-content"
        hidden={show}
      />
      <Text>StatusBars</Text>
      <Button title={titles} onPress={hideAndShow} />
    </View>
  );
};

export default StatusBars;

const styles = StyleSheet.create({});
