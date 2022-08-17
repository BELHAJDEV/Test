import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import Header from "../components/Header";

const Score = ({ navigation, route, }) => {
  const { score } = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.scoreContainer}>
        <Text style={{ fontSize : 20 , marginVertical : 10}}>Félicitation</Text>
        <Text style={{ fontSize : 17}}>Voici vote score</Text>
        <View style={styles.score}>
          <Text
            style={{
              color: "#14279B",
              fontWeight: "bold",
              fontSize: 18,
            }}
          >
            {score}/20
          </Text>
        </View>
        
        <TouchableOpacity style={styles.btn} onPress={() => navigation.replace('Main')}>
          <Text style={{ color: "white", fontSize: 18 }}>Refaire le test</Text>
        </TouchableOpacity>
      </View>
      
    </SafeAreaView>
  );
};

export default Score;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  scoreContainer : {
    width : '100%',
    flex : 1,
    // backgroundColor : 'red',
    alignItems : 'center',
    justifyContent : 'center'
  },
  score: {
    backgroundColor: "#DDDDDD",
    padding: 10,
    borderRadius: 7,
    width: 90,
    alignItems: "center",
    justifyContent: "center",
    marginTop : 20
  },
  btn: {
    width: "40%",
    marginTop : 20,
    alignSelf : 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: "#3AB4F2",
    alignItems: "center",
    justifyContent: "center",
  },
});
