import {
  ActivityIndicator,
  FlatList,
  Image,
  RefreshControl,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";

const ImageLoad = () => {
  const [img, setImg] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  console.log("page>>>", page);

  const getImage = () => {
    setLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=10`)
      .then((res) => res.json())
      .then((data) => {
        setImg([...img, ...data]);
        setPage(page + 1);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    getImage();
  }, []);

  const renderItem = ({ item }) => {
    return (
      <View>
        <Text>{item.id}</Text>
        <Image
          source={{ uri: 'item.url' }}
          width={400}
          height={300}
          style={{ marginBottom: 10 }}
          borderTopRightRadius={50}
        />
      </View>
    );
  };
  const HeaderCompo = () => {
    return (
      <Text style={{ textAlign: "center", fontSize: 24, fontWeight: "800" }}>
        Header
      </Text>
    );
  };

  const footerCompo = () => {
    return (
      <Text style={{ textAlign: "center", fontSize: 24, fontWeight: "800" }}>
        Footer
      </Text>
    );
  };

  const Emptycompo = () => {
    return (
      <Text style={{ textAlign: "center", fontSize: 24, fontWeight: "800" }}>
        Image Not Found !
      </Text>
    );
  };

  const onRefresh = () => {
    setRefreshing(true);
    getImage();
    setRefreshing(false);
    setPage(1);
  };

  const hendleDataRefetch = (index) => {
    console.log(":::::::::");
    getImage();
  };
  return (
    <View style={{ marginTop: 30 }}>
      <FlatList
        data={img}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={HeaderCompo}
        ListFooterComponent={footerCompo}
        ListEmptyComponent={Emptycompo}
        ItemSeparatorComponent={() => (
          <View
            style={{
              borderBottomColor: "black",
              borderWidth: 1,
              marginBottom: 10,
            }}
          ></View>
        )}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        onEndReached={hendleDataRefetch}
        onEndReachedThreshold={0.5}
        initialNumToRender={10}
      />
      {loading && <ActivityIndicator size="large" color="#0000ff" />}
    </View>
  );
};

export default ImageLoad;
