import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Texts = () => {
  return (
    <View>
      <Text style={styles.text} >hello</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 40,
  },
});
export default Texts;
