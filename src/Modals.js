import React, { useState } from "react";
import { Button, Modal, Pressable, StyleSheet, Text, View } from "react-native";

const Modals = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <View style={styles.box}>
      <Modal
        transparent={true}
        visible={isOpen}
        // animationType="slide"
        animationType="fade"
        onRequestClose={() => setIsOpen(false)}
        onShow={() => console.log("Modal is open")}
        // statusBarTranslucent={true} // modal statusBar niche javu joye k ny te  determines
      >
        <View style={styles.cneterView}>
          <View style={styles.modalWrap}>
            <Text style={styles.trext}>Modal</Text>
            <Button title="close" onPress={() => setIsOpen(false)} />
          </View>
        </View>
      </Modal>
      <View style={styles.modalView}>
        <Button title="press here" onPress={() => setIsOpen(true)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    flex: 1,
  },
  modalView: {
    flex: 1,
    justifyContent: "flex-end",
  },
  cneterView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalWrap: {
    backgroundColor: "#fff",
    padding: 40,
    borderRadius: 20,
    shadowColor: "black",
    elevation: 10,
  },
  trext: {
    fontSize: 30,
    marginBottom: 10,
  },
});

export default Modals;

// <Modal
// visible={isOpen}
// transparent={true}
// animationType="slide"
// onRequestClose={() => setIsOpen(false)}
// statusBarTranslucent={false}
// >
// <Text>Hello I am Modal</Text>
// <View style={styles.setbtn}>
//   <Button title="close" onPress={() => setIsOpen(false)} />
// </View>
// </Modal>
// <Pressable style={styles.btn} onPress={() => setIsOpen(true)}>
// <Text style={styles.btnText}>Button</Text>
// </Pressable>
