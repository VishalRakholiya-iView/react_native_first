import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const RadioBtn = () => {
  const [selected, setSelected] = useState(1);
  return (
    <View style={styles.main}>
      <Text>Radio Button</Text>
      <TouchableOpacity onPress={()=>setSelected(1)}>
        <View style={styles.radioWraper}>
          <View style={styles.radio}>
            {selected === 1 ? <View style={styles.radioBg}></View> : null}
          </View>
          <Text style={styles.radioText}>Radio 1</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>setSelected(2)}>
        <View style={styles.radioWraper}>
          <View style={styles.radio}>
            {selected === 2 ? <View style={styles.radioBg}></View> : null}
          </View>
          <Text style={styles.radioText}>Radio 2</Text>
        </View>
      </TouchableOpacity>
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
export default RadioBtn;
