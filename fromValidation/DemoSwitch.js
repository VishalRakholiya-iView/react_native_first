import {
  Button,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";

const DemoSwitch = () => {
  const [inputVal, setInputVal] = useState("");
  const [news, setNews] = useState(false);
  const [like, setLike] = useState(false);
  const [comment, setComment] = useState(false);
  const [birthday, setBirthday] = useState(false);
  const [data, setData] = useState([]);

  const getTheData = () => {
    const newData = {
      email: inputVal,
      notifications: {
        news: news,
        like: like,
        comment: comment,
        birthday: birthday,
      },
    };
    setData([...data, newData]);
    setInputVal("");
    setNews(false);
    setLike(false);
    setComment(false);
    setBirthday(false);
  };
  console.log("data>>", data);
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter Youe Valid Email"
        onChangeText={(text) => setInputVal(text)}
        value={inputVal}
      />
      <View style={styles.switchCont}>
        <Text style={{ fontSize: 24, fontWeight: "700" }}>Notifications</Text>
        <View style={styles.second}>
          <View style={styles.innerSwitch}>
            <Switch onValueChange={() => setNews(!news)} value={news} />
            <Text>News Feed</Text>
          </View>
          <View style={styles.innerSwitch}>
            <Switch onValueChange={() => setLike(!like)} value={like} />
            <Text>Like</Text>
          </View>
          <View style={styles.innerSwitch}>
            <Switch
              onValueChange={() => setComment(!comment)}
              value={comment}
            />
            <Text>Comment</Text>
          </View>
          <View style={styles.innerSwitch}>
            <Switch
              onValueChange={() => setBirthday(!birthday)}
              value={birthday}
            />
            <Text>Birthday</Text>
          </View>
        </View>
      </View>
      <Button title="Save" onPress={getTheData} />
    </View>
  );
};

export default DemoSwitch;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 7,
    width: 200,
    textAlign: "center",
    padding: 5,
  },
  switchCont: {
    justifyContent: "center",
    gap: 5,
    marginTop: 10,
  },
  innerSwitch: {
    flexDirection: "row",
    alignItems: "center",
  },
});
