import React, { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const Images = () => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      {imageError ? (
        <Text style={styles.errorText}>Error loading image</Text>
      ) : (
        <Image
          style={{ backgroundColor: "red" }}
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Square_dance_sign.svg/1200px-Square_dance_sign.svg.png",
          }}
          height={300}
          width={300}
          onError={handleImageError}
          // resizeMode="cover"
          // fadeDuration={1000} // ?
          // defaultSource={{
          //   uri: "https://assets.imgix.net/examples/bluehat.jpg?w=400&dpr=1 1xÍ", // ?
          // }}
          // srcSet="" // ?
          // onLoad={(event) => {
          //   console.log(event.nativeEvent.source);
          // }}
          // onLoad={() => console.log("onLoad")}
          // onLoadStart={() => console.log("onLoadStart")}
          // onLoadEnd={() => console.log("onLoadEnd")}
          // borderBottomLeftRadius={20}
          // borderTopRightRadius={100}
          borderRadius={150}
          // opacity={0.8}
          // overlayColor="green" // overflow color
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  img: {
    height: 100,
    width: 300,
  },
});

export default Images;
