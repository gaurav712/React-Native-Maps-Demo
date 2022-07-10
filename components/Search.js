import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import MARKERS from "../markers";
import dismissKeyboard from "react-native/Libraries/Utilities/dismissKeyboard";

const Search = ({
  darkMode,
  showSuggestions,
  setShowSuggestions,
  mapRegion,
  setMapRegion,
}) => {
  const [matches, setMatches] = useState([]);
  const [query, setQuery] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={
          darkMode
            ? {
                ...styles.searchBoxDark,
                borderBottomLeftRadius: showSuggestions ? 0 : 10,
                borderBottomRightRadius: showSuggestions ? 0 : 10,
              }
            : {
                ...styles.searchBox,
                borderBottomLeftRadius: showSuggestions ? 0 : 10,
                borderBottomRightRadius: showSuggestions ? 0 : 10,
              }
        }
        placeholder="Search here"
        placeholderTextColor={darkMode ? "#aaa" : "#808080"}
        value={query}
        onChangeText={(text) => {
          setQuery(text);
          setShowSuggestions(true);
          const matches = MARKERS.filter((elem) =>
            elem.title.toLowerCase().includes(text.toLowerCase())
          ).map((elem) => elem.title);
          setMatches(matches);
        }}
        onSubmitEditing={() => setShowSuggestions(false)}
      />
      <MaterialIcons
        style={styles.searchIcon}
        name={"search"}
        size={25}
        color={"#808080"}
      />
      {showSuggestions && (
        <View
          style={{
            ...styles.suggestions,
            backgroundColor: darkMode ? "#434343" : "#fff",
          }}
        >
          {matches.map((elem) => (
            <TouchableOpacity
              key={elem}
              style={styles.seachEntries}
              onPress={() => {
                setQuery(elem);
                setShowSuggestions(false);
                dismissKeyboard();
                const data = MARKERS.filter((item) => item.title === elem)[0];
                setMapRegion({
                  ...mapRegion,
                  latitude: data.latitude,
                  longitude: data.longitude,
                });
              }}
            >
              <Text
                style={{
                  ...styles.seachEntryText,
                  color: darkMode ? "#fff" : "#eee",
                }}
              >
                {elem}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </SafeAreaView>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 60,
    width: "90%",
    marginHorizontal: "5%",
  },
  searchBox: {
    fontSize: 16,
    height: 40,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingLeft: 35,
    paddingVertical: 2.5,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowRadius: 1,
    shadowOffset: {
      height: 1,
      width: 1,
    },
    shadowOpacity: 0.5,
  },
  searchBoxDark: {
    fontSize: 16,
    height: 40,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingLeft: 35,
    paddingVertical: 2.5,
    backgroundColor: "#434343",
    color: "#fff",
    shadowColor: "#000",
    shadowRadius: 1,
    shadowOffset: {
      height: 1,
      width: 1,
    },
    shadowOpacity: 0.5,
  },
  searchIcon: {
    position: "absolute",
    margin: 7.5,
  },
  suggestions: {
    position: "absolute",
    top: 40,
    width: "100%",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    shadowColor: "#000",
    shadowRadius: 1,
    shadowOffset: {
      height: 1,
      width: 1,
    },
    shadowOpacity: 0.5,
  },
  seachEntries: {
    paddingHorizontal: 12.5,
    paddingVertical: 7.5,
    borderTopWidth: 0.25,
  },
  seachEntryText: {
    fontSize: 17,
  },
});
