// import React, { useRef, useState } from "react";
// import { Alert, Button, StyleSheet, TextInput, View } from "react-native";

// const BtnNfProps = () => {
//   // const [disable, setDisable] = useState(false);
//   // const handlePress = () => {
//   //   console.log("Button Pressed", "You pressed the button!");
//   // };
//   const [inputpreview, setInpitpreview] = useState();
//   const [val, setVal] = useState([]);
//   console.log("val>>>", val);
//   const inputprevi = useRef();
//   const inputtNext = useRef();

//   // //onPress
//   const handlePrevi = () => {
//     inputprevi.current.focus();
//     setVal([...val, inputpreview]);
//   };
//   const handleNext = () => {
//     inputtNext.current.focus();
//   };

//   return (
//     <View style={styles.main}>
//       {/* ================================== useRef focus  =============================== */}
//       <TextInput
//         style={styles.input}
//         placeholder="Focus previ...."
//         ref={inputprevi}
//         nextFocusDown={inputtNext}
//         value={inputpreview}
//         onChangeText={(text) => setInpitpreview(text)}

//       />
//       <Button title="Previ" onPress={handlePrevi} />
//       <Button title="Next" onPress={handleNext} />
//       <TextInput
//         style={styles.input}
//         placeholder="Focus previ...."
//         ref={inputtNext}
//       />
//       <View>
//         {/* onPress + coloe + title  =>*/}
//         {/* <Button
//         title="click Me"
//         onPress={() => Alert.alert("click agine")}
//         color={"red"}
//       /> */}

//         {/* disabled  => */}
//         {/* <Button title="disabled" disabled={disable}  onPress={()=>setDisable(true)}/> */}

//         {/* touchSoundDisabled => */}
//         {/* <Button
//         title="Press Me"
//         onPress={handlePress}
//         accessibilityLabel="Press Me" //blindness use case talk balk
//         // touchSoundDisabled={true} // Disable touch sound
//       /> */}
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   main: {
//     flex: 1,
//     gap: 10,
//     padding: 20,
//   },
//   input: {
//     borderColor: "black",
//     borderWidth: 1,
//     borderRadius: 10,
//     padding: 10,
//   },
// });

// export default BtnNfProps;

import React, { useRef, useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

const BtnNfProps = () => {
  const [inputpreview, setInputPreview] = useState("");
  const [val, setVal] = useState([]);
  const [toggle, setToggle] = useState(true);
  const inputNextRef = useRef();

  const handlePrevi = () => {
    if (toggle) {
      inputNextRef.current.focus();
    } else {
      setVal([...val, inputpreview]);
    }
    setToggle(!toggle);
  };

  return (
    <View style={styles.main}>
      <TextInput
        style={styles.input}
        placeholder="Focus previ...."
        returnKeyType={toggle ? "next" : "done"}
        value={inputpreview}
        onChangeText={(text) => setInputPreview(text)}
        onSubmitEditing={handlePrevi}
      />
      <TextInput
        style={styles.input}
        placeholder="Focus next...."
        ref={inputNextRef}
        returnKeyType="done"
      />
      <Button
        title={toggle ? "Next" : "Done"}
        onPress={handlePrevi}
        // touchSoundDisabled={true} // Disable touch sound
      />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: 20,
    gap: 10,
  },
  input: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
});

export default BtnNfProps;
