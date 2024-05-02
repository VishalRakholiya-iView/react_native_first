import React, { useState } from "react";
import { StyleSheet, Switch, Text, View } from "react-native";

const Switchs = () => {
  const [switchVal, setSwitchVal] = useState(false);
  const hendleChange = () => setSwitchVal(!switchVal);
  const handleOnChange = (e) => {
    console.log("onChange Value =>>>", e.nativeEvent.value);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello i am switch</Text>
      <Switch
        onValueChange={hendleChange} // cyou want to instead receive an event
        onChange={(e) => handleOnChange(e)} //  you want to only receive the new value,
        value={switchVal}
        trackColor={{ false: "red", true: "green" }}
        thumbColor={switchVal ? "#fff" : "black"}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
export default Switchs;
