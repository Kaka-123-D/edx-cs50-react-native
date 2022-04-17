import { View, Text, StyleSheet } from "react-native";
import { vibrate } from "./utils";
import React, { useEffect } from "react";

const styles = StyleSheet.create({
  clock: {
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 20,
    color: "black",
  },
});

export default function CountDown({
  time,
  setTime,
  isPaused,
  formatTime,
  setIsWorking,
  setNoti,
}) {
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        if (time.second == 0 && time.minute == 0) {
          vibrate();
          setIsWorking(false);
          setNoti("Breaking Time");
        } else if (time.second == 0) {
          setTime({ minute: time.minute - 1, second: 59 });
        } else {
          setTime({ minute: time.minute, second: time.second - 1 });
        }
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [time.second, isPaused]);

  return (
    <View>
      <Text style={styles.clock}>{formatTime(time.minute, time.second)}</Text>
    </View>
  );
}
