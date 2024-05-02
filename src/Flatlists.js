import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  View,
  RefreshControl,
} from "react-native";

export default function Flatlists() {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const fetchUserData = () => {
    setLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/comments`)
      .then((response) => response.json())
      .then((json) => {
        setUserData(json);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const renderItems = ({ item }) => {
    console.log("item>>>", item);
    // return (
    //   <View style={styles.task}>
    //     <Text style={styles.itemList}>ID: {item.id}</Text>
    //     <Text style={styles.itemList}>Name: {item.name}</Text>
    //     <Text style={styles.itemList}>Email: {item.email}</Text>
    //   </View>
    // );
  };

  const HeaderCompo = () => {
    return (
      <View style={styles.headerMain}>
        <Text style={styles.header}>Header</Text>
        <Text>===================================================</Text>
      </View>
    );
  };

  const footerCompo = () => {
    return (
      <View>
        <Text>===================================================</Text>
        <Text style={styles.footerCmpo}>Footer</Text>
      </View>
    );
  };

  const Emptycompo = () => {
    return (
      <View>
        <Text style={styles.empty}>No Data Found !</Text>
      </View>
    );
  };

  const onRefresh = () => {
    setRefreshing(true);
    fetchUserData();
    setTimeout(() => {
      setRefreshing(false);
    }, 5000);
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle={"light-content"} backgroundColor="black" />
      <FlatList
        data={userData}
        renderItem={renderItems}
        keyExtractor={(item) => item.id.toString()}
        ListHeaderComponent={HeaderCompo}
        ListFooterComponent={footerCompo}
        ListEmptyComponent={Emptycompo}
        ItemSeparatorComponent={() => (
          <View style={{ borderBottomColor: "black", borderWidth: 2 }}></View>
        )}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        // numColumns={2}
        // horizontal={false}
      />
      {loading && <ActivityIndicator size="large" color="#0000ff" />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  task: {
    padding: 16,
    margin: 8,
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 10,
  },
  itemList: {
    fontSize: 20,
    fontWeight: "bold",
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
  },
});
// onEndReached={pagerander}
// onEndReachedThreshold={1}
