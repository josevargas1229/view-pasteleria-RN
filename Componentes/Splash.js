import React, { useEffect } from "react";
import { View, Image,StyleSheet } from "react-native";

const Splash = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/img/LogoFull.png")}
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 300, // Hacer la imagen más pequeña al 10% del ancho de la pantalla
    height: 400, // Mantener la relación de aspecto de la imagen
  },
});

export default Splash;
