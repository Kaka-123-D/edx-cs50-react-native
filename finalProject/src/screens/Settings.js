import { StyleSheet, Text, View, Switch, ScrollView } from "react-native";
import React, { useState } from "react";
import LogoutButton from "../containers/LogoutButton";

export default function Settings({changeMode, mode}) {
  const [isSelected, setIsSelected] = useState(mode);
  function handleChangeMode() {
    changeMode();
    setIsSelected(!isSelected);
  }
  return (
    <ScrollView>
      <View style={styles.mode}>
        <Text style={styles.title}>Night Mode: </Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isSelected ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={() => handleChangeMode()}
          value={isSelected}
          style={styles.icon}
        />
      </View>
      <LogoutButton />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mode: {
    flexDirection: "row",
    alignItems: "center",
    margin: 30,
    paddingLeft: 10,
  },
  title: { flex: 6, fontWeight: "bold", fontSize: 20},
  icon: { flex: 2}
});
