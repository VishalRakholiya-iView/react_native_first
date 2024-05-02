// this componets like ifram tag in html element
import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import { WebView } from "react-native-webview";

const MyWebView = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1 }}>
        {/* <WebView
          source={{ uri: "https://www.google.com/maps" }}
        /> */}
        {/* <WebView
          source={{ uri: "https://www.google.com/maps" }}
        /> */}
        <WebView source={{ uri: "https://www.youtube.com/" }} />
        {/* <WebView source={{ uri: "https://github.com/Darshak2122" }} /> */}
      </SafeAreaView>
    </>
  );
};

export default MyWebView;
