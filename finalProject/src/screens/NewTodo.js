import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

export default function NewTodo({ addTodo }) {
  const navigation = useNavigation();
  const [todo, setTodo] = useState("");
  const [disabled, setDisabled] = useState(true);

  function handleAddTodo() {
    addTodo(todo);
    navigation.goBack();
  }

  useEffect(() => {
    if (todo !== "") setDisabled(false);
    else setDisabled(true);
  }, [todo])

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <TextInput
        multiline={true}
        numberOfLines={6}
        placeholder="Type something ... "
        value={todo}
        onChangeText={(text) => setTodo(text)}
        style={styles.textarea}
        placeholderTextColor={"white"}
      />
      <View style={styles.buttonSubmit}>
        <Button
          title="Add Todo"
          onPress={() => handleAddTodo()}
          disabled={disabled}
        />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textarea: {
    padding: 10,
    paddingLeft: 20,
    borderWidth: 2,
    borderColor: "green",
    borderRadius: 10,
    width: 340,
    marginBottom: 30,
    backgroundColor: "gray",
    color: "white",
  },
  buttonSubmit: {
    width: 200,
  }
});
