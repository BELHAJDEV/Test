import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { FontAwesome5 } from "@expo/vector-icons";

const MyCheckBox = ({ setCurrentAnswer, id, option, isChecked }) => {
  const [check, setCheck] = useState(false);

  

  return (
    <View style={{
        flexDirection : 'row',
        alignItems : 'center'
    }}>
      <TouchableOpacity
        style={[
          styles.container,
          check ? { backgroundColor: "green", borderColor: "green" } : null,
        ]}
        onPress={() => {
          setCurrentAnswer(id);
          setCheck(!check);
          
        }}
      >
        <FontAwesome5
          name="check"
          size={20}
          color="white"
          style={[{ opacity: 0 }, check ? { opacity: 1 } : { opacity: 0 }]}
        />
      </TouchableOpacity>
      <Text>{option}</Text>
    </View>
  );
};

export default MyCheckBox;

const styles = StyleSheet.create({
  container: {
    width: 30,
    height: 30,
    borderColor: "black",
    borderRadius: 5,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 7,
  },
});
