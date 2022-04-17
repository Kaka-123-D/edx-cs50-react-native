import React, { useState, useEffect } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { FlatList } from "react-native";
import { searchMovies } from "./../API/movieData";
import MovieRow from "./../components/MovieRow";

export default function MovieList() {
  const [titleSearch, setTitleSearch] = useState("");
  const [movieList, setMovieList] = useState([]);

  const renderItem = ({ item }) => <MovieRow {...item} />;

  useEffect(async () => {
    const list = await searchMovies(titleSearch.trim());
    setMovieList(list);
  }, [titleSearch]);

  return (
    <View style={styles.container}>
      <TextInput
        value={titleSearch}
        onChangeText={(text) => setTitleSearch(text)}
        placeholder="Enter the movie title.."
        placeholderTextColor={'white'}
        style={styles.input}
      />
      <View>
        <FlatList renderItem={renderItem} data={movieList} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  input: {
    margin: 20,
    paddingLeft: 20,
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 10,
    height: 50,
    backgroundColor: 'gray',
    color: 'white',
  },
});
