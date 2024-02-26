import React from "react";
import { View, Text, StyleSheet } from "react-native";

const EncabezadoGrafica = ({ onBack }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.perfil}>Mi inventario</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    textAlign: "center",
    paddingHorizontal: 13,
    backgroundColor: "#56070C",
  },
  perfil: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
 
});

export default EncabezadoGrafica;
