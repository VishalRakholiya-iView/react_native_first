import React, { useEffect, useState } from "react";
import {
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";

export default function FlatListDamo() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch(`https://dummyjson.com/products`)
      .then((response) => response.json())
      .then((json) => {
        setData(json.products);
      })
      .catch((error) => {
        console.error("Error fetching products Data: ", error);
      });
  };

  const renderItems = ({ item }) => {
    return (
      <View style={styles.task}>
        <Image
          source={{ uri: `${item.thumbnail}` }}
          alt="product Image"
          style={styles.img}
        />
        <Text style={styles.itemList}>Phone Name: {item.title}</Text>
      </View>
    );
  };

  const HeaderCompo = () => {
    return (
      <View style={styles.headerMain}>
        <Text style={styles.header}>Products List</Text>
      </View>
    );
  };

  const footerCompo = () => {
    return (
      <View>
        <Text style={styles.footerCmpo}>Footer</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle={"light-content"} backgroundColor="black" />
      <FlatList
        data={data}
        renderItem={renderItems}
        keyExtractor={(item) => item.id.toString()}
        ListHeaderComponent={HeaderCompo}
        ListFooterComponent={footerCompo}
        numColumns={3}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  task: {
    padding: 16,
    borderWidth: 1,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
    marginBottom: 10,
    width: 110,
    height: 110,
    marginLeft: 10,
  },
  itemList: {
    fontSize: 10,
  },
  divider: {
    borderBottomColor: "black",
    borderWidth: 1,
  },
  footerCmpo: {
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
  },
  empty: {
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
  },
  header: {
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 10,
  },
  img: {
    height: 50,
    width: 50,
  },
});
// // onEndReached={pagerander}
// // onEndReachedThreshold={1}
