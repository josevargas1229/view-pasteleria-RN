import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  StyleSheet,
  Modal,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const EncabezadoCarrito = ({ onSearch }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.carrito}>
        <MaterialCommunityIcons
          name="arrow-left"
          size={30}
          color="#fff"
          style={styles.icon}
        />
        ㅤ Carrito de comprasㅤㅤㅤㅤㅤ
        <MaterialCommunityIcons
          name="cart-outline"
          size={40}
          color="#fff"
          style={styles.icon}
        />
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: "#56070C",
  },
  carrito: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  icon: {
    marginRight: 10,
  },
  titulo: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
});

export default EncabezadoCarrito;
