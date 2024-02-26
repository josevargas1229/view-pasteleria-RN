import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from "react-native";
import { MaterialIcons } from '@expo/vector-icons'; 

const BuscadorHistorial = () => {
  const [query, setQuery] = useState("");
  const [historial, setHistorial] = useState([]);

  const realizarBusqueda = () => {
    if (query.trim() !== "") {
      const updatedHistorial = [...historial, query.trim()];
      setHistorial(updatedHistorial);
      setQuery("");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Buscar..."
          value={query}
          onChangeText={setQuery}
        />
        <TouchableOpacity onPress={realizarBusqueda}>
          <MaterialIcons name="search" size={24} color="#007AFF" />
        </TouchableOpacity>
      </View>
      {historial.length > 0 && (
        <View style={styles.historialContainer}>
          <Text style={styles.historialTitulo}>Historial</Text>
          <FlatList
            data={historial}
            renderItem={({ item }) => (
              <View style={styles.historialItemContainer}>
                <MaterialIcons name="search" size={24} color="#007AFF" style={styles.searchIcon} />
                <Text style={styles.historialItem}>{item}</Text>
              </View>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
          <TouchableOpacity onPress={() => setHistorial([])}>
            <MaterialIcons name="clear" size={24} color="#007AFF" style={styles.clearIcon} />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 16,
    color: "#333",
  },
  historialContainer: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
  },
  historialTitulo: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#333",
  },
  historialItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  historialItem: {
    fontSize: 18,
    color: "#007AFF",
    marginLeft: 5,
  },
  searchIcon: {
    marginRight: 5,
  },
  clearIcon: {
    alignSelf: "flex-end",
  },
});

export default BuscadorHistorial;
