import * as React from "react";
import {
  Button,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import HomeScreen from "./Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//import Ionicons from 'react-native-vector-icons/Ionicons';

export default function TasksPage({ navigation }: any) {
  return (
    <View style={{ flex: 1 }}>
    <View style={{  flex: 2, margin: 20,}}>
    <Text>Text Color</Text>
    <Text> </Text>
    </View>
    
      <View style={{flex:0.3,justifyContent: 'center', alignItems: 'center',}}>
    <TouchableOpacity onPress={() => navigation.navigate("Home")} style={styles.BtnTask}>
      <Text style={{ color: '#fff', }}>
          Save Task</Text>
      </TouchableOpacity>
      </View>
 </View>
  );
}

const styles = StyleSheet.create({
  BtnTask: {
    backgroundColor: "#000",
    width: 300,
    height: 50,
    borderRadius: 40,
    marginBottom: 50,
    alignItems: "center",
    justifyContent: "center",
  },
});
