import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  SectionList,
  StatusBar,
  Image,
  ScrollView,
} from "react-native";

const DemoSectionList = () => {
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch(`https://dummyjson.com/products`)
      .then((response) => response.json())
      .then((data) => {
        const pd = data?.products.map((pdm) => ({
          title: pdm.title,
          data: pdm.images,
        }));
        setProductsData(pd);
        // setProductsData([{ title: data.title, data: data.images }]);
      })
      .catch((error) => {
        console.error("Error fetching products Data: ", error);
      });
  };
  console.log("productsData>>", productsData);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ fontSize: 24, marginTop: 30 }}>SectionList Data</Text>
      <SectionList
        sections={productsData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.imgBox}>
            <Image style={styles.img} source={{ uri: `${item}` }} />
          </View>
        )}
        renderSectionHeader={({ section }) => (
          <Text style={styles.header}>{section.title}</Text>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    fontSize: 32,
    fontWeight: "700",
    backgroundColor: "green",
  },
  title: {
    fontSize: 24,
  },
  img: {
    height: 200,
    width: 200,
    margin: 5,
  },
  imgBox: {
    gap: 5,
    justifyContent: "cente",
    alignItems: "center",
    flexDirection: "row",
  },
});

export default DemoSectionList;
