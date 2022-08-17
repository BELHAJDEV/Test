import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";


const SubHeader = ({navigation ,current, time , setCurrent, setSlide, slide, score}) => {

  const [timeLeft, setTimeLeft] = useState(0);

  

  useEffect(() => {
    setTimeLeft(time);
  }, [time]);

  useEffect(() => {
    const interval = setInterval(() => {
        if(time === 0 ){
            
            if(slide === 3) {
              setSlide(1);
              setCurrent(0)
              navigation.navigate('Score',{score});
            }else{
              
              setSlide(slide +1)
              setCurrent(current +1);
              
              
            }
            
            
        }else{
            time = time - 1;
            setTimeLeft(time);
        }
      
    }, 1000);
    return () => clearInterval(interval);
  }, [time]);
  return (
    <View style={styles.container}>
      <View style={styles.subHeader}>
        <View
          style={{
            width: "25%",
            padding: 7,
          }}
        >
          <Text>Question</Text>
          <View
            style={{
              backgroundColor: "#eee",
              padding: 10,
              marginTop: 5,
              borderRadius: 5,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontSize: 17,
                color: "#14279B",
                fontWeight: "bold",
              }}
            >
              {current + 1}/20
            </Text>
          </View>
        </View>
        <View
          style={{
            // width: "50%",
            padding: 7,
          }}
        >
          <Text>Temps écoulé</Text>
          <View
            style={{
              backgroundColor: "#eee",
              padding: 10,
              marginTop: 5,
              borderRadius: 5,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontSize: 18,
                color: "#F15412",
                fontWeight: "bold",
              }}
            >
              {timeLeft}
            </Text>
          </View>
        </View>
      </View>
      
    </View>
  );
};

export default SubHeader;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
  },
  subHeader: {
    width: 300,
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
});
