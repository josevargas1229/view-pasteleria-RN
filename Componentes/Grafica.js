import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";

const Grafica = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/img/adaptive-icon.png")}
        style={styles.image}
        resizeMode="contain"
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>Temperatura</Text>
        <Text style={styles.subtitle}>Temperatura(°C)</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "55%",
  },
  textContainer: {
    position: "absolute",
    top: "25%",
    width: "100%",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    margin:10,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Grafica;
