import {
  Button,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";

const TouchHilight = () => {
  const [count, setCount] = useState(2);
  return (
    <View style={{ gap: 20 }}>
      <TouchableHighlight
        onPress={() => setCount(count * 5)}
        activeOpacity={0.5}
        underlayColor="red"
        style={{ backgroundColor: "#4287f5", padding: 20 }}
        // hitSlop={{ top: 25, bottom: 100, left: 15, right: 15 }} // click aria value
      >
        <View>
          <Text>TouchHilight {count}</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};

export default TouchHilight;

const styles = StyleSheet.create({});
