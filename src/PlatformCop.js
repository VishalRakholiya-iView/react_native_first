import React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";

const PlatformCop = () => {
  return (
    <View>
      <Text style={{ fontSize: 30, fontWeight: "800" }}>
        Plat From : {Platform.OS}
      </Text>
      {Platform.OS === "iOS" ? ( //android
        <View
          style={{ backgroundColor: "green", height: 100, width: 100 }}
        ></View>
      ) : (
        <View
          style={{ backgroundColor: "blue", height: 100, width: 100 }}
        ></View>
      )}
      <Text style={styles.text}>Hello How are You???</Text>
      <Text style={styles.text}>minor version : {JSON.stringify(Platform.constants.reactNativeVersion.minor)}</Text>
      <Text style={styles.text}>{JSON.stringify(Platform)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 17,
    color: Platform.OS === "iOS" ? "green" : "blue",
    fontStyle: Platform.OS === "iOS" ? "normal" : "italic",
  },
});
export default PlatformCop;
