// single btn multiple use.
// like single btn first time tap single bulets and long press continusly fire the bullets
import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const PressableBtn = () => {
  return (
    <View style={styles.main}>
      <Pressable
        // onPress={() => console.log("press...")}
        // onPressIn={()=>console.log("On In Press")} //// console.log("On Press")
        onPressOut={() => console.log("On Out Press")}
        // onLongPress={() => console.log("On Long Press")}
        // delayLongPress={2000} // by default 500
        // hitSlop={{ top:150, bottom: 20, left: 15, right: 15 }} // button ni upar etli height pr touch thay
        // android_ripple={{
        //   borderless: true,
        //   radius: 120,
        //   foreground: 100,
        // }}
      >
        <Text style={styles.PressableBtn}>Pressable</Text>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "center",
  },
  PressableBtn: {
    padding: 10,
    margin: 10,
    borderRadius: 10,
    fontSize: 20,
    elevation: 5,
  },
});
export default PressableBtn;
