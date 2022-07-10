import React, { useState } from "react";
import { View, StyleSheet, StatusBar } from "react-native";
import BottomBar from "./components/BottomBar";
import Map from "./components/Map";
import Search from "./components/Search";
import Toggles from "./components/Toggles";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [mapRegion, setMapRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  return (
    <View style={styles.container}>
      <StatusBar barStyle={darkMode ? "light-content" : "dark-content"} />
      <Map
        colorScheme={darkMode ? "dark" : "light"}
        setShowSuggestions={setShowSuggestions}
        mapRegion={mapRegion}
      />
      <Toggles darkMode={darkMode} setDarkMode={setDarkMode} />
      <Search
        darkMode={darkMode}
        showSuggestions={showSuggestions}
        setShowSuggestions={setShowSuggestions}
        mapRegion={mapRegion}
        setMapRegion={setMapRegion}
      />
      <BottomBar darkMode={darkMode} />
    </View>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
