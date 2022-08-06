import * as React from "react";
import {
  Button,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TextInput } from "react-native-gesture-handler";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function DatePick() {
  const [startDate, setStartDate] = useState(new Date());
  const [date, setDate] = useState(new Date());
  console.log("Date is ", date);
  return (
    <View style={{flex: 1, marginRight: 55,}}>
      
       <DateTimePicker
        testID="dateTimePicker"
        value={date}
        mode="datetime"
        is24Hour={true}
        onChange={(date) => {
          console.log(date);
          
        }}
      />
    </View>
  );
  
}

{/*<DateTimePicker
        selected={startDate}
        onChange={(date) => {
          console.log(date);
        }}
    //      setStartDate(date)}
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={15}
        timeCaption="time"
        dateFormat="MMMM d, yyyy h:mm aa"
      />*/}