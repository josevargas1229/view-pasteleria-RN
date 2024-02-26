import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const EncabezadoBuscador = () => {
  return (
    <View style={styles.header}>
      <View style={styles.searchContainer}>
        <View></View>
        <MaterialCommunityIcons
          name="magnify"
          size={24}
          color="#888"
          style={styles.searchIcon}
        />
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar..."
          placeholderTextColor="#888"
        />
      </View>
      <MaterialCommunityIcons
        name="cart-outline"
        size={30}
        color="#fff"
        style={styles.icon}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#56070C",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  searchContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginRight: 10,
    marginTop: 20,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },
  icon: {
    marginTop: 20,
    marginLeft: 30,
  },
});

export default EncabezadoBuscador;
