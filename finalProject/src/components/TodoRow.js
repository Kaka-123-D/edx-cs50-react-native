import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Switch,
  Button,
} from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/Ionicons";

export default function TodoRow({ todo, setStatus, removeTodo }) {
  const [isSelected, setIsSelected] = useState(todo.status);

  function handleTickBox() {
    setStatus(todo.id);
    setIsSelected(!isSelected);
  }

  return (
    <View style={styles.container}>
      <View style={styles.iconGroup}>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isSelected ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={() => handleTickBox()}
          value={isSelected}
          style={styles.switchIcon}
        />
        <View style={styles.space}></View>
        <Icon
          name="close"
          size={25}
          color="red"
          onPress={() => removeTodo(todo)}
          style={styles.closeIcon}
        />
      </View>
      <Text style={styles.title}>{todo.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 25,
    marginRight: 25,
    marginTop: 10,
    marginBottom: 10,
    borderColor: "green",
    borderWidth: 2,
    borderRadius: 10,
    flexDirection: "column",
    padding: 10,
    paddingTop: 5,
  },
  iconGroup: {
    flexDirection: "row",
    marginBottom: 2,
  },
  switchIcon: {
    flex: 2,
  },
  space: { flex: 10 },
  closeIcon: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    paddingLeft: 10,
  }
});
