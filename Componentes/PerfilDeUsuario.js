import React, { useState } from "react";
import { View, Text, TextInput, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const PerfilDeUsuario = () => {
  const [password, setPassword] = useState("");

  const handleSave = () => {
    // Lógica para guardar la contraseña
    console.log("Contraseña guardada:", password);
  };

  const handleLogout = () => {
    // Lógica para cerrar sesión
    console.log("Cerrando sesión...");
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image source={require("../assets/img/Mikoto_Urabe.png")} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.titulo}>User Name</Text>
          <Text style={styles.texto}>ejemplo@ejemplo.org</Text>
        </View>
      </View>

      <View style={styles.card}>
        <View style={styles.textContainer}>
          <Text style={styles.sudtitulo}>Dirección</Text>
          <Text style={styles.texto}>Calle ejemplo, col. ejemplo, Municipio, Estado, CP.0000</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handleSave}>
            <Text style={styles.btnmodificar}>Modificar</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.card}>
        <View style={styles.textContainer}>
          <Text style={styles.sudtitulo}>Contraseña</Text>
          <TextInput
            style={styles.input}
            placeholder="Contraseña"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handleSave}>
            <Text style={styles.btnmodificar}>Modificar</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.card}>
        <View style={styles.textContainer}>
          <Text style={styles.sudtitulo}>Teléfono</Text>
          <TextInput
            style={styles.input}
            placeholder="Número telefónico"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handleSave}>
            <Text style={styles.btnmodificar}>Modificar</Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity onPress={handleLogout} style={styles.cerrarSesion}>
        <Ionicons name="log-out-outline" size={24} color="white" style={styles.icon} />
        <Text style={styles.textCerrar}>Cerrar Sesión</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#fffbea",
    borderRadius: 12,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 30,
    width: "100%",
  },
  titulo: {
    color: "#000",
    fontSize: 24,
    lineHeight: 25,
    fontWeight: "bold",
  },
  sudtitulo: {
    color: "#000",
    lineHeight: 30,
    fontSize: 20,
    fontWeight: "bold",
  },
  texto: {
    color: "#000",
    fontSize: 16,
    lineHeight: 25,
  },
  textCerrar: {
    color: "#fff",
    fontSize: 16,
    lineHeight: 25,
  },
  image: {
    width: "23%",
    aspectRatio: 1,
    marginRight: 10,
    borderRadius: 40,
  },
  icon: {
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    alignItems: "center",
  },
  btnmodificar: {
    color: "#56070C",
  },
  input: {
    height: 40,
    width: "100%",
    borderColor: "gray",
    borderWidth: 1,
    fontSize: 16,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 1,
    borderColor: "gray",
  },
  cerrarSesion: {
    flexDirection: "row",
    alignItems: "center",width: "100%",
    backgroundColor: "red",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
});

export default PerfilDeUsuario;
