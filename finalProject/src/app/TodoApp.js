import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";

import LoginScreen from "../containers/Login";
import NewTodoScreen from "../containers/NewTodo";
import TodoListScreen from "../containers/TodoList";
import SettingsScreen from "../containers/Settings";

const TodoStack = createNativeStackNavigator();

function TodoScreen() {
  const navigation = useNavigation();

  return (
    <TodoStack.Navigator
      initialRouteName="TodoList"
      screenOptions={{
        headerTintColor: "white",
        headerStyle: { backgroundColor: "#3CB371" },
        headerTitleAlign: "center",
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <TodoStack.Screen
        name="TodoList"
        component={TodoListScreen}
        options={{
          headerRight: () => (
            <Button
              onPress={() => navigation.navigate("NewTodo")}
              title="+ New Todo"
              color="#3CB371"
            />
          ),
        }}
      />
      <TodoStack.Screen name="NewTodo" component={NewTodoScreen} />
    </TodoStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function MainNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="TodoList"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Todo") {
            iconName = focused ? "list-circle" : "list-circle-outline";
          } else if (route.name === "Settings") {
            iconName = focused ? "settings" : "settings-outline";
          }

          // You can return any component that you like here!
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen
        name="Todo"
        component={TodoScreen}
        options={{ title: "Todo List" }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          headerShown: true,
          headerTintColor: "white",
          headerStyle: { backgroundColor: "#3CB371" },
          headerTitleAlign: "center",
          headerTitleStyle: { fontWeight: "bold" },
        }}
      />
    </Tab.Navigator>
  );
}

const AppStack = createNativeStackNavigator();
const MyTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: "#afaf9d",
  },
};

export default function TodoApp({ status, darkMode }) {
  return (
    <NavigationContainer theme={darkMode ? MyTheme : DefaultTheme}>
      <AppStack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {status === 0 ? (
          <AppStack.Screen name="Login" component={LoginScreen} />
        ) : (
          <AppStack.Screen name="Main" component={MainNavigator} />
        )}
      </AppStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
