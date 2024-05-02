import { SectionList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";

const SectionLists = () => {
  const [data, setData] = useState([]);
  console.log("==========",data);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  return (
    <View>
      <Text>SectionList</Text>
      <SectionList
        sections={data}
        renderItem={({ item }) => <Text>{item.title}</Text>}
        renderSectionHeader={({ section }) => <Text>{section.title}</Text>}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default SectionLists;

const styles = StyleSheet.create({});
