import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const EncabezadoPerfil = ({ onBack }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.perfil}>
        <MaterialCommunityIcons
          name="arrow-left"
          size={30}
          color="#fff"
          style={styles.icon}
          onPress={onBack}
        />
        ㅤPerfil
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
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

export default EncabezadoPerfil;
