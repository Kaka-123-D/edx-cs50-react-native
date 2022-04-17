import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 10,
    margin: 10,
  },
  textGroup: {
    margin: 10,
    paddingLeft: 10,
    width: 200,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold", 
  }
});

export default function MovieRow(movie) {
    const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate("MovieInfo", { title: movie.Title })}
    >
      <Image
        source={{
          uri: movie.Poster,
          width: 160,
          height: 240,
        }}
      />
      <View style={styles.textGroup}>
        <Text style={styles.text}>{movie.Title}</Text>
        <Text style={styles.text}>{movie.Year}</Text>
      </View>
    </TouchableOpacity>
  );
}
