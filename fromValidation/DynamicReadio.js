import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const DynamicReadio = () => {
  const [selected, setSelected] = useState(1);

  const data = [
    { id: 1, skill: "JAVA" },
    { id: 2, skill: " Css " },
    { id: 3, skill: " PHP " },
    { id: 4, skill: "HTML" },
    { id: 5, skill: "React" },
    { id: 6, skill: "Redux" },
    { id: 7, skill: "Native" },
  ];
  return (
    <View style={styles.main}>
      {data.map((item, index) => (
        <TouchableOpacity onPress={() => setSelected(item.id)}>
          <View style={styles.radioWraper}>
            <View style={styles.radio}>
              {selected === item.id ? <View style={styles.radioBg}></View> : null}
            </View>
            <Text style={styles.radioText}>{item.skill}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  radioText: {
    fontSize: 20,
  },
  radio: {
    height: 20,
    width: 20,
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 10,
  },
  radioWraper: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
    marginTop: 10,
  },
  radioBg: {
    backgroundColor: "black",
    height: 14,
    width: 14,
    borderRadius: 8,
    margin: 1,
  },
});
export default DynamicReadio;
