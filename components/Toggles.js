import React from "react";
import { SafeAreaView, TouchableOpacity, StyleSheet } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const Toggles = ({ darkMode, setDarkMode }) => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={{
          ...styles.icon,
          backgroundColor: darkMode ? "#434343" : "#fff",
        }}
        onPress={() => setDarkMode(!darkMode)}
      >
        <MaterialIcons
          name="tune"
          size={25}
          color={darkMode ? "#fff" : "#000"}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          ...styles.icon,
          backgroundColor: darkMode ? "#434343" : "#fff",
        }}
      >
        <MaterialIcons
          name="near-me"
          size={25}
          color={darkMode ? "#fff" : "#000"}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Toggles;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 120,
    right: 25,
  },
  icon: {
    borderRadius: 20,
    padding: 5,
    marginVertical: 5,
    shadowColor: "#000",
    shadowRadius: 1,
    shadowOffset: {
      height: 1,
      width: 1,
    },
    shadowOpacity: 0.5,
  },
});
