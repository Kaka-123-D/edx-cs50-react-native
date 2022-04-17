import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";

export default function Login({ login, error }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (username && password) setDisabled(false);
    else setDisabled(true);
  }, [username, password]);

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <Text style={styles.title}>Todo App</Text>
      <Text style={styles.error}>{error}</Text>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Username ... "
          value={username}
          onChangeText={(text) => setUsername(text)}
          autoCapitalize="none"
          style={styles.input}
          placeholderTextColor={"white"}
        />
        <TextInput
          placeholder="Password ..."
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
          autoCapitalize="none"
          style={styles.input}
          placeholderTextColor={"white"}
        />
      </View>
      <TouchableOpacity style={styles.buttonSubmit}>
        <Button
          title="Login"
          onPress={() => login(username, password)}
          disabled={disabled}
        />
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 50,
    color: "red",
    marginBottom: 20,
  },
  error: {},
  inputGroup: {
    marginBottom: 30,
  },
  input: {
    width: 250,
    height: 50,
    margin: 5,
    backgroundColor: "gray",
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 12,
    paddingLeft: 20,
    color: "white",
  },
  buttonSubmit: {
    width: 160,
    borderRadius: 10,
  },
});
