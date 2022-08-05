import * as React from "react";
import {
  Button,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TextInput } from "react-native-gesture-handler";
import DateP from "./DateP";

//import DatePicker from "react-datepicker";
//import TasksPage from './Task'
//import Ionicons from 'react-native-vector-icons/Ionicons';

function HomeScreen({ navigation }: any) {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 2 }}>
        <Text style={{ paddingTop: 20, paddingLeft: 20 }}>Welcome Back</Text>
        <Text
          style={{
            paddingTop: 5,
            paddingLeft: 20,
            fontSize: 25,
            fontWeight: "bold",
          }}
        >
          Here's Update Today.
        </Text>
      </View>

      <View
        style={{ flex: 0.3, justifyContent: "center", alignItems: "center" }}
      >
        <TouchableOpacity
          style={styles.BtnTask}
          onPress={() => navigation.navigate("Task")}
        >
          <Text style={{ color: "#fff" }}>
            <Text style={{ backgroundColor: "#fff", color: "#000" }}> + </Text>
            <Text> </Text>
            Add to Task
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function TaskScreen({ navigation }: any) {
  const TCTask = () => {

  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 2, margin: 20 }}>
        <Text>Text Color</Text>

        <View style={styles.linne}>
          <Text style={{ paddingTop: 10 }}>Task Deadline</Text>
          <DateP />
        </View>

        <View style={styles.linne}>
          <Text style={{ paddingTop: 10 }}>Task Title </Text>
          <TextInput style={styles.text}> </TextInput>
        </View>

        <View style={styles.linne}>
          <Text style={{ paddingTop: 10 }}>Task Title</Text>
        </View>

        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity style={styles.basic}>
            <Text> Basic </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.basic}>
            <Text> Urgent </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.basic}>
            <Text> Important </Text>
          </TouchableOpacity>
        </View>
      </View>
      {/*<DateP/>*/}

      <View
        style={{ flex: 0.3, justifyContent: "center", alignItems: "center" }}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
          style={styles.BtnSave}
        >
          <Text style={{ color: "#fff" }}>Save Task</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function Delete({ navigation }: any) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 30, fontWeight: "bold", color: "#c0d9b2" }}>
        Delete Screen
      </Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function HomePage() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "Task Manager",
            headerStyle: {
              backgroundColor: "#c0d9b2",
            },
            headerTintColor: "black",
          }}
        />
        <Stack.Screen
          name="Task"
          component={TaskScreen}
          //options={{
          //  title: 'Edit Task',
          //}}
          options={({ navigation }: any) => ({
            title: "Edit Task",
            headerStyle: {
              backgroundColor: "#fff",
            },
            headerTintColor: "black",

            headerRight: () => (
              <View style={{ flex: 0.1 }}>
                <TouchableOpacity onPress={() => "Delete"}>
                  {/*<Trash />*/}
                  <Image
                    style={{ width: 25, height: 25, marginRight: 15 }}
                    source={require("../assets/trash.png")}
                  />
                </TouchableOpacity>
              </View>
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default HomePage;

const styles = StyleSheet.create({
  BtnTask: {
    backgroundColor: "#000",
    width: 150,
    height: 50,
    borderRadius: 40,
    marginBottom: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  BtnSave: {
    backgroundColor: "#000",
    width: 300,
    height: 50,
    borderRadius: 40,
    marginBottom: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    height: 50,
    fontSize: 25,
  },
  linne: {
    borderTopWidth: 1,
    marginTop: 10,
    marginBottom: 10,
  },
  basic: {
    backgroundColor: "#fff",
    width: 100,
    height: 50,
    borderRadius: 40,
    marginTop: 50,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    marginRight: 10,
  },
});
