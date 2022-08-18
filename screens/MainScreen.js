import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import SubHeader from "../components/SubHeader";
import { CheckBox } from "@rneui/themed";

const data = [
  {
    question: "Capitale du maroc ? ",
    options: ["Rabat", "Casablanca"],
    answer: "Rabat",
    time: 60,
  },
  {
    question:
      "Dans quel pays peut-on trouver la Catalogne, l’Andalousie et la Castille  ?",
    options: ["Espagne", "Italie"],
    answer: "Espagne",
    time: "30",
  },
  {
    question: "Qui a dit : « Le sort en est jeté » (Alea jacta est) ?",
    options: ["Vercingétorix", "César", "Attila"],
    answer: "César",
    time: "60",
  },
];
const MainScreen = ({ navigation }) => {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [form, setForm] = useState([]);
  const [check1, setCkeck1] = useState(false);

  function moveSlides() {
    setCkeck1(false);
    if (current + 1 === data.length) {
      navigation.navigate("Score", { score });
    } else if (!(current > data.length)) {
      setCurrent(current + 1);
    }
  }
  function incrementScore(answer) {
    if (data[current].answer === answer) {
      setScore(score + 5);
    }
  }
  function decrementScore(answer) {
    if (data[current].answer !== answer) {
      setScore(score - 5);
    }
  }
  function onCheckedHandler(index) {
    const array = [];
    form.map((item, i) => {
      if (index === i) {
        array.push({
          optionName: item.optionName,
          isCheked: !item.isCheked,
        });
      } else {
        array.push({ optionName: item.optionName, isCheked: false });
      }
    });

    setForm(array);
  }

  useEffect(() => {
    const array = [];
    data[current]?.options.map((op) => {
      array.unshift({
        optionName: op,
        isCheked: false,
      });
    });
    setForm(array);
  }, [current]);

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <SubHeader
        current={current}
        time={data[current]?.time}
        setCurrent={setCurrent}
        navigation={navigation}
        score={score}
      />
      <View style={styles.questionsContainer}>
        <Text style={{ fontSize: 18 ,marginVertical : 10 }}>{data[current].question}</Text>
        {current !== data.length &&
          form.map((item, index) => (
            <CheckBox
              key={index}
              containerStyle={styles.checkbox}
              size={30}
              checked={item.isCheked}
              onPress={() => {
                setCkeck1(true);
                if (item.isCheked) {
                  if (data[current].answer === item.optionName) {
                    setScore(score - 5);
                  }
                } else {
                  incrementScore(item.optionName);
                  if (check1) {
                    decrementScore(item.optionName);
                  }
                }

                onCheckedHandler(index);
              }}
              title={item.optionName}
              textStyle={{ fontSize: 17 }}
              checkedColor="green"
            />
          ))}
      </View>
      <View style={styles.btnContainer}>
      <TouchableOpacity style={styles.btn} onPress={moveSlides}>
        <Text style={{ color: "white", fontSize: 17 }}>Suivant</Text>
      </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  questionsContainer : {
    alignItems : 'center',
    flex : 1,
    justifyContent : 'center',
    padding : 15
    
  },
  
  checkbox: {
    marginRight: 10,
    width: 300,
    // height: 30,
    backgroundColor: "#eee",
    marginVertical : 10
  },
  btnContainer : {
    flex : 1,
    justifyContent : 'center'
  },
  btn: {
    
    width: "50%",
    // height : 30,
    alignSelf: "center",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: "#3AB4F2",
    alignItems: "center",
    justifyContent: "center",
  },
});
