import React, { useState } from "react";
import { ActivityIndicator, Button, Text, View } from "react-native";

const Activity = () => {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("Press Here");

  const displayLoader = () => {
    setShow(!show);
    setTimeout(() => {
      setShow(false);
    }, 5000);
  };
  return (
    <View>
      <Text>Activity Indicator</Text>
      {show ? (
        <ActivityIndicator
          size={100}
          animating={show} // by default true
          color={"red"}
        />
      ) : null}
      <Button title={title} onPress={displayLoader} />
    </View>
  );
};

export default Activity;


// const [isLoading, setIsLoading] = useState(false);

// const handleLoadData = () => {
//   setIsLoading(true);
//   setTimeout(() => {
//     setIsLoading(false);
//   }, 3000); 
// };

// return (
//   <View style={styles.container}>
//     {isLoading ? (
//       <View style={styles.loadingContainer}>
//         <ActivityIndicator size="large" color="#0000ff" />
//         <Text>Loading...</Text>
//       </View>
//     ) : (
//       <View style={styles.content}>
//         <Text>This is your content.</Text>
//         <Button title="Load Data" onPress={handleLoadData} />
//       </View>
//     )}
//   </View>
// );
// };