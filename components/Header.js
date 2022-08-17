import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

const Header = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.userIcon}>
        <FontAwesome name="user" size={30} color="black" />
      </TouchableOpacity>

      <Text
        style={{
          color: "white",
          fontSize: 18,
          fontWeight: "bold",
          marginTop: 10,
        }}
      >
        Hi, User name
      </Text>
      
      <Text
        style={{
          fontSize: 17,
          marginTop: 10,
        }}
      >
        Enjoy your test
      </Text>

      
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#3AB4F2",
    width : '100%',
    height: "30%",
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    padding: 15,
    paddingHorizontal : 25,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  userIcon: {
    backgroundColor: "white",
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 7,
    alignSelf: "flex-end",
  },
});
