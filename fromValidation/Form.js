import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [display, setDisplay] = useState(false);
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passError, setPassError] = useState("");

  const clear = () => {
    setDisplay(false);
    setEmail("");
    setName("");
    setPass("");
    setNameError("");
    setEmailError("");
    setPassError("");
  };

  const handleSubmit = () => {
    setNameError("");
    setEmailError("");
    setPassError("");

    let isValid = true;

    if (name.trim() === "") {
      setNameError("Name is required");
      isValid = false;
    }

    if (email.trim() === "") {
      setEmailError("Email is required");
      isValid = false;
    }

    if (pass.trim() === "") {
      setPassError("Password is required");
      isValid = false;
    }

    if (isValid) {
      setDisplay(true);
    }
  };

  return (
    <View>
      <Text style={{ fontSize: 30,marginTop:30,textAlign:"center" }}>Simple From In React Native</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Enter User Name..."
        onChangeText={(text) => setName(text)}
        value={name}
      />
      {nameError !== "" && <Text style={styles.errorText}>{nameError}</Text>}
      <TextInput
        style={styles.textInput}
        placeholder="Enter User Email..."
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      {emailError !== "" && <Text style={styles.errorText}>{emailError}</Text>}
      <TextInput
        style={styles.textInput}
        placeholder="Enter User password..."
        onChangeText={(text) => setPass(text)}
        value={pass}
        secureTextEntry={true}
      />
      {passError !== "" && <Text style={styles.errorText}>{passError}</Text>}
      <View style={styles.btngroup}>
        <Button title="Print Details" onPress={handleSubmit} />
        <Button title="Clear Details" onPress={clear} />
      </View>
      <View>
        {display ? (
          <View>
            <Text>User : {name}</Text>
            <Text>Email : {email}</Text>
            <Text>Password : {pass}</Text>
          </View>
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    fontSize: 18,
    color: "blue",
    borderWidth: 2,
    borderColor: "blue",
    margin: 20,
    padding: 10,
    borderRadius: 8,
  },
  btngroup: {
    gap: 10,
  },
  errorText: {
    color: "red",
    marginLeft: 20,
  },
});

export default Form;
