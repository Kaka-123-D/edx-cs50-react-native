import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import React, { useState } from "react";
import CountDown from "./CountDown";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    color: "red",
    fontSize: 50,
    fontWeight: "bold",
  },
  noti: {
    fontSize: 35,
    marginBottom: 10,
  },
  buttonGroup: {
    flexDirection: "row",
  },
  clock: {
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 20,
  },
  setTime: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  inputGroup: {
    flexDirection: "row",
  },
  counters: {
    alignItems: "center",
    justifyContent: "center",
  },
  span: {
    marginRight: 15,
    marginTop: 5,
    fontWeight: "bold",
  },  
});

export default function App() {
  const [isRunning, setIsRunning] = useState(false);
  const [noti, setNoti] = useState("Keep working hard");
  const [isPaused, setIsPaused] = useState(false);
  const [isWorking, setIsWorking] = useState(false);
  const [workTime, setWorkTime] = useState({ minute: "15", second: "0" });
  const [breakTime, setBreakTime] = useState({ minute: "5", second: "0" });
  const [prevWorkTime, setPrevWorkTime] = useState({ minute: "15", second: "0" });
  const [prevBreakTime, setPrevBreakTime] = useState({ minute: "5", second: "0" });

  function formatTime(minute, second) {
    if (minute === "") minute = 0;
    if (second === "") second = 0;
    if (minute < 10) minute = "0" + minute;
    if (second < 10) second = "0" + second;
    return minute + ":" + second;
  }

  function start() {
    setIsRunning(true);
    setIsWorking(true);
    setNoti("Working Time");
    setPrevWorkTime(workTime);
    setPrevBreakTime(breakTime);
  }

  function reset() {
    setIsRunning(false);
    setIsWorking(false);
    setIsPaused(false);
    setWorkTime(prevWorkTime);
    setBreakTime(prevBreakTime);
    setNoti("Keep working hard");
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.header}>POMODORO</Text>
      <Text style={styles.noti}>{noti}</Text>

      {!isRunning ? (
        <View>
          <View style={styles.counters}>
            <Text style={styles.clock}>
              {formatTime(workTime.minute, workTime.second)}
            </Text>
            <Button title="Start" onPress={() => start()} />
          </View>
          <View style={styles.setTime}>
            <Text style={{ fontWeight: "bold" }}>Set Working Time: </Text>
            <View style={styles.inputGroup}>
              <TextInput
                onChangeText={(text) =>
                  setWorkTime({ minute: text, second: workTime.second })
                }
                value={workTime.minute.toString()}
                keyboardType="numeric"
                placeholder="..."
              />
              <Text style={styles.span}>Minute</Text>
              <TextInput
                onChangeText={(text) =>
                  setWorkTime({ minute: workTime.minute, second: text })
                }
                value={workTime.second.toString()}
                keyboardType="numeric"
                placeholder="..."
              />
              <Text style={styles.span}>Second</Text>
            </View>
          </View>

          <View style={styles.setTime}>
            <Text style={{ fontWeight: "bold" }}>Set Breaking Time: </Text>
            <View style={styles.inputGroup}>
              <TextInput
                onChangeText={(text) =>
                  setBreakTime({ minute: text, second: breakTime.second })
                }
                value={breakTime.minute.toString()}
                keyboardType="numeric"
                placeholder="..."
              />
              <Text style={styles.span}>Minute</Text>

              <TextInput
                onChangeText={(text) =>
                  setBreakTime({ minute: breakTime.minute, second: text })
                }
                value={breakTime.second.toString()}
                keyboardType="numeric"
                placeholder="..."
              />
              <Text style={styles.span}>Second</Text>
            </View>
          </View>
        </View>
      ) : (
        <View>
          {isWorking ? (
            <CountDown
              time={workTime}
              setTime={setWorkTime}
              isPaused={isPaused}
              formatTime={formatTime}
              setIsWorking={setIsWorking}
              setNoti={setNoti}
            />
          ) : (
            <CountDown
              time={breakTime}
              setTime={setBreakTime}
              isPaused={isPaused}
              formatTime={formatTime}
              setIsWorking={setIsWorking}
              setNoti={setNoti}
            />
          )}

          <View style={styles.buttonGroup}>
            {isPaused ? (
              <Button title="Resume" onPress={() => setIsPaused(false)} />
            ) : (
              <Button title="Pause" onPress={() => setIsPaused(true)} />
            )}

            <Button title="Reset" onPress={() => reset()} />
          </View>
        </View>
      )}
    </View>
  );
}
