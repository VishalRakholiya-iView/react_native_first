import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

const GridSection = () => {
  const userData = [
    {
      id: 1,
      name: "abc",
    },
    {
      id: 1,
      name: "abc",
    },
    {
      id: 1,
      name: "abc",
    },
    {
      id: 1,
      name: "abc",
    },
    {
      id: 1,
      name: "abc",
    },
    {
      id: 1,
      name: "abc",
    },
    {
      id: 1,
      name: "abc",
    },
    {
      id: 1,
      name: "abc",
    },
    {
      id: 1,
      name: "abc",
    },
    {
      id: 1,
      name: "abc",
    },
    {
      id: 1,
      name: "abc",
    },
    {
      id: 1,
      name: "abc",
    },
    {
      id: 1,
      name: "abc",
    },
    {
      id: 1,
      name: "abc",
    },
    {
      id: 1,
      name: "abc",
    },
    {
      id: 1,
      name: "abc",
    },
    {
      id: 1,
      name: "abc",
    },
    {
      id: 1,
      name: "abc",
    },
    {
      id: 1,
      name: "abc",
    },
    {
      id: 1,
      name: "abc",
    },
    {
      id: 1,
      name: "abc",
    },
    {
      id: 1,
      name: "abc",
    },
    {
      id: 1,
      name: "abc",
    },
    {
      id: 1,
      name: "abc",
    },
    {
      id: 1,
      name: "abc",
    },
    {
      id: 1,
      name: "abc",
    },
    {
      id: 1,
      name: "abc",
    },
    {
      id: 1,
      name: "abc",
    },
    {
      id: 1,
      name: "abc",
    },
  ];
  return (
    <View style={{ marginTop: 20 }}>
      <Text style={{ fontSize: 20, fontWeight: "bold",textAlign:"center" }}>Grid Section</Text>
      <ScrollView >
        <View style={styles.maprow}>
          {userData.map((item) => (
            <Text style={styles.text}>{item.name}</Text>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    backgroundColor: "green",
    margin: 5,
    padding: 10,
    height: 125,
    width: 125,
    textAlign: "center",
    textAlignVertical: "center",
  },
  maprow: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
  },
});

export default GridSection;
