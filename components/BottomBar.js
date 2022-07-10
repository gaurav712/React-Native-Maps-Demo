import React from "react";
import {
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const BottomBar = ({ darkMode }) => {
  const ICONS = ["explore", "map", "", "", "notifications", "person"];

  return (
    <SafeAreaView
      style={{
        ...styles.container,
        backgroundColor: darkMode ? "#000" : "#fff",
      }}
    >
      {ICONS.map((item, index) => (
        <TouchableOpacity key={index}>
          <MaterialIcons
            style={{ marginTop: 10 }}
            name={item}
            size={30}
            color={darkMode ? "#aaa" : "#303030"}
          />
        </TouchableOpacity>
      ))}
      <TouchableOpacity style={styles.plusIcon}>
        <MaterialIcons name={"add"} size={40} color={"#fff"} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default BottomBar;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "row",
    shadowColor: "#000",
    shadowRadius: 1,
    shadowOffset: {
      height: -1,
      width: 0,
    },
    shadowOpacity: 0.25,
  },
  plusIcon: {
    position: "absolute",
    bottom: 30,
    height: 60,
    width: 60,
    borderRadius: 30,
    backgroundColor: "#ea4743",
    alignItems: "center",
    justifyContent: "center",
    left:
      (Dimensions.get("window").width - 75) / 2 +
      Dimensions.get("window").width * 0.025,
    shadowColor: "#000",
    shadowRadius: 1,
    shadowOffset: {
      height: 1,
      width: 1,
    },
    shadowOpacity: 0.5,
  },
});
