import { ActivityIndicator, Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

const ImageLoader = (props) => {
  const [loading, setLoading] = useState(false);

  console.log("image::::>>", props.item.download_url);

  const onLoadFun = (value) => {
    setLoading(value);
  };

  return (
    <View>
      {loading && (
        <View style={styles.indicator}>
          <ActivityIndicator color={"red"} />
        </View>
      )}
      {
        <Image
          source={{
            uri: `${props.item.download_url}`,
          }}
          width={400}
          height={300}
          onLoadStart={() => onLoadFun(true)}
          onLoadEnd={() => onLoadFun(false)}
          style={styles.img}
        />
      }
    </View>
  );
};

export default ImageLoader;

const styles = StyleSheet.create({
  indicator: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    position: "absolute",
    height: 350,
    zIndex: 0,
    width: "100%",
  },
  img: {
    zIndex: 0,
    marginBottom: 10,
  },
});
