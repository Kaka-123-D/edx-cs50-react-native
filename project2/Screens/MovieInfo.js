import React, { useEffect, useState } from "react";
import { View, Image, Text, StyleSheet, ScrollView } from "react-native";
import { getMovie } from "../API/movieData";

export default function MovieInfo(props) {
  const [movie, setMovie] = useState({});
  useEffect(async () => {
    const movieInfo = await getMovie(props.route.params.title);
    setMovie(movieInfo);
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Image
        source={{
          uri: movie ? movie.Poster : "",
          width: 320,
          height: 480,
        }}
        style={styles.poster}
      />
      <View style={styles.infoArea}>
        <Text style={styles.line}>Tên phim: {movie.Title}</Text>
        <Text style={styles.line}>Thời lượng: {movie.Runtime}</Text>
        <Text style={styles.line}>Ngày phát hành: {movie.Released}</Text>
        <Text style={styles.line}>Ngôn ngữ: {movie.Language}</Text>
        <Text style={styles.line}>Diễn viên chính: {movie.Actor}</Text>
        <Text style={styles.line}>Thể loại: {movie.Genre}</Text>
        <Text style={styles.line}>Cốt truyện: {movie.Plot}</Text>
        <Text style={styles.line}>Đánh giá: {movie.imdbRating}/10</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "pink",
  },
  poster: {
    margin: 35,
    borderRadius: 10,
  },
  infoArea: {
    margin: 30,
    marginTop: 10,
  },
  line : {
    fontSize: 18,
  }
});
