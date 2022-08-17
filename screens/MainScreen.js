import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, {useState } from "react";
import Header from "../components/Header";

import SubHeader from "../components/SubHeader";
import MyCheckBox from "../components/MyCheckBox";


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
  const [currentAnswer, setCurrentAnswer] = useState(undefined);
  const [score, setScore] = useState(0);
 
  const [slide, setSlide] = useState(1);

 

  
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <SubHeader
        current={current}
        setSlide={setSlide}
        slide={slide}
        time={data[current]?.time}
        setCurrent={setCurrent}
        navigation={navigation}
        score={score}
      />

      <View style={styles.questions}>
        <Text
          style={{
            fontSize: 18,
            marginBottom: 5,
          }}
        >
          Question {current !== data.length && current + 1}
        </Text>
        <Text
          style={{
            fontSize: 16,
            marginBottom: 20,
          }}
        >
          {current !== data.length && data[current].question}
        </Text>
        <View>
          {current !== data.length &&
            data[current].options.map((option, index) => (
              <View style={styles.option} key={index}>
                <MyCheckBox
                  setCurrentAnswer={setCurrentAnswer}
                  id={index}
                  option={option}
                  
                />
              </View>
            ))}
        </View>
      </View>

      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            
            if (slide === data.length) {
              if (
                data[current].answer === data[current].options[currentAnswer]
              ) {
                setScore(score + 5);
                
              }
              navigation.navigate("Score", { score });

            } else {
              if (
                data[current].answer === data[current].options[currentAnswer]
              ) {
                setScore(score + 5);
              }
              setCurrent(current + 1);
              setSlide(slide + 1);
            }
          }}
        >
          <Text style={{ color: "white", fontSize: 18 }}>Suivant</Text>
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
  subHeader: {
    width: "80%",
    flexDirection: "row",
    padding: 8,
    backgroundColor: "white",
    justifyContent: "space-between",
    minHeight: 70,
    top: -35,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  questions: {
    paddingLeft: 40,
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
  },
  ckeckbox: {
    marginRight: 7,
    width: 25,
    height: 25,
    color: "red",
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
