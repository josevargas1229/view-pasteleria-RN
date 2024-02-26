import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const PieConIconos = () => {
  return (
    <View style={styles.pie}>
      <View style={styles.item}>
        <Ionicons name="home" size={24} color="#fff" />
        <Text style={styles.texto}>Inicio</Text>
      </View>
      <View style={styles.item}>
        <Ionicons name="search" size={24} color="#fff" />
        <Text style={styles.texto}>Buscar</Text>
      </View>
      <View style={styles.item}>
        <Ionicons name="wifi" size={24} color="#fff" />
        <Text style={styles.texto}>IOT</Text>
      </View>
      <View style={styles.item}>
        <Ionicons name="cart" size={24} color="#fff" />
        <Text style={styles.texto}>Carrito</Text>
      </View>
      <View style={styles.item}>
        <Ionicons name="person" size={24} color="#fff" />
        <Text style={styles.texto}>Mi cuenta</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pie: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#56070C",
    paddingVertical: 10,
  },
  item: {
    alignItems: "center",
    marginHorizontal: 15,
  },
  texto: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 4,
  },
});

export default PieConIconos;
