import { StyleSheet, Text, ScrollView, View, FlatList } from "react-native";
import React from "react";
import TodoRow from "../components/TodoRow";

export default function TodoList({
  todoList,
  setStatus,
  removeTodo,
}) {

  function getIncompleteCount() {
    var count = 0;
    for (var i = 0; i < todoList.length; i++) {
      if (todoList[i].status === false) count ++;
    }
    return count;
   }

  return (
    <ScrollView>
      <View style={styles.countGroup}>
        <Text style={styles.count}>Total: {todoList.length}</Text>
        <Text style={styles.count}>Incomplete: {getIncompleteCount()}</Text>
      </View>
      {todoList.map((todo) => {
        return (
          <TodoRow
            todo={todo}
            setStatus={setStatus}
            removeTodo={removeTodo}
            key={todo.id}
          />
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  count: {
    fontSize: 20,
    fontWeight: "bold",
    flex: 1,
    marginLeft: 30,
    marginTop: 20,
    marginBottom: 20,
  },
  countGroup: {
    flexDirection: "row",
  }
});
