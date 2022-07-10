import React, { useState } from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import dismissKeyboard from "react-native/Libraries/Utilities/dismissKeyboard";
import MARKERS from "../markers";

const Map = ({ colorScheme, setShowSuggestions, mapRegion }) => {
  const [selectedMarker, setSelectedMarker] = useState({
    title: "",
    description: "",
    image: "",
  });

  const [showInfo, setShowInfo] = useState(false);

  return (
    <>
      <MapView
        style={styles.map}
        region={mapRegion}
        userInterfaceStyle={colorScheme}
        onPress={() => {
          dismissKeyboard();
          setShowSuggestions(false);
        }}
      >
        {MARKERS.map((marker, index) => (
          <Marker
            key={index}
            coordinate={{
              latitude: marker.latitude,
              longitude: marker.longitude,
            }}
            title={marker.title}
            image={{
              uri: marker.image,
            }}
            onSelect={() => {
              setShowInfo(true);
              setSelectedMarker(marker);
            }}
            onDeselect={() => {
              setShowInfo(false);
            }}
          />
        ))}
      </MapView>
      {showInfo && (
        <View
          style={{
            ...styles.infoCard,
            backgroundColor: colorScheme === "dark" ? "#434343" : "#fff",
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Image
              style={{ height: 35, width: 35, resizeMode: "contain" }}
              source={{ uri: selectedMarker?.image }}
            />
            <View style={{ alignSelf: "center", marginLeft: 10 }}>
              <Text
                style={{
                  fontSize: 14,
                  color: colorScheme === "dark" ? "#eee" : "#000",
                  fontWeight: "bold",
                }}
              >
                {selectedMarker?.title}
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  color: colorScheme === "dark" ? "#eee" : "#000",
                }}
              >
                {selectedMarker?.description}
              </Text>
            </View>
          </View>
        </View>
      )}
    </>
  );
};

export default Map;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: { alignSelf: "stretch", height: "100%" },
  infoCard: {
    position: "absolute",
    width: "95%",
    marginHorizontal: "2.5%",
    borderRadius: 10,
    bottom: 120,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowRadius: 1,
    shadowOffset: {
      height: 1,
      width: 1,
    },
    shadowOpacity: 0.5,
  },
});
