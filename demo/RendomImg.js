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
import ImageLoader from "./ImageLoader";

const RandomImg = () => {
  const [img, setImg] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  console.log(img);

  const getImage = () => {
    setLoading(true);
    fetch(`https://picsum.photos/v2/list?page=${page}&limit=10`)
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

  //   const renderItem = ({ item }) => {
  //     return (
  //       <View>
  //         <Image
  //           source={{ uri: `https://picsum.photos/201/20${item.id}` }}
  //           width={400}
  //           height={300}
  //           style={{ marginBottom: 10 }}
  //         />
  //       </View>
  //     );
  //   };

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
        renderItem={({ item, index }) => {
          return <ImageLoader key={index} item={item} />;
        }}
        keyExtractor={(item) => item.id}
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
        initialNumToRender={1}
      />
      {loading && <ActivityIndicator size="large" color="#0000ff" />}
    </View>
  );
};

export default RandomImg;
