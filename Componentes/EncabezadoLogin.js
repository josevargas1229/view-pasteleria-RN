import React from "react";
import { View, Text, StyleSheet } from "react-native";

const EncabezadoLogin = ({ onBack }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.perfil}>Inicio de Sesión</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    textAlign: "center",
    paddingHorizontal: 130,
    backgroundColor: "#56070C",
  },
  perfil: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  icon: {
    marginRight: 10,
  },
});

export default EncabezadoLogin;
