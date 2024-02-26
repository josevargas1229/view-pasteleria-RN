import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  showDetails,
} from "react-native";

const Principal = () => {
  const explorarProduct = () => {
    console.log("Explorando productos...");
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.titulo}>Bienvenido a Lively</Text>
          <Text style={styles.texto}>
            Explora una deliciosa selección de pasteles y productos de
            repostería
          </Text>

          <TouchableOpacity onPress={explorarProduct}>
            <Text style={styles.btnExplorar}>Explorar productos</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.titulo}>Productos destacados</Text>

        <View style={styles.card}>
          <View style={styles.productoContainer}>
            <Image
              source={require("../assets/img/Mikoto_Urabe.png")}
              style={styles.image}
            />
            <View style={styles.textContainer}>
              <Text style={styles.subtitle}>Pasteles para bautizos</Text>
              <View style={styles.linea}></View>
              <Text style={styles.subtitle}>Pastel de chocolate</Text>
              <Text style={styles.texto}>$15.99</Text>
            </View>
          </View>
          <View style={styles.linea}></View>
          <View style={styles.productoContainer}>
            <Image
              source={require("../assets/img/Mikoto_Urabe.png")}
              style={styles.image}
            />
            <View style={styles.textContainer}>
              <View style={styles.linea}></View>
              <Text style={styles.subtitle}>Pastel de Fresa</Text>
              <Text style={styles.texto}>$12.99</Text>
              <View style={styles.linea}></View>
              <Text style={styles.btnToggle}>
                {showDetails ? "Ocultar detalles" : "Mostrar detalles"}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.productoContainer}>
            <Image
              source={require("../assets/img/Mikoto_Urabe.png")}
              style={styles.image}
            />
            <View style={styles.textContainer}>
              <Text style={styles.subtitle}>Pasteles para bautizos</Text>
              <View style={styles.linea}></View>
              <Text style={styles.subtitle}>Pastel de Vainilla</Text>
              <Text style={styles.texto}>$14.99</Text>
            </View>
          </View>
          <View style={styles.linea}></View>
          <View style={styles.productoContainer}>
            <Image
              source={require("../assets/img/Mikoto_Urabe.png")}
              style={styles.image}
            />
            <View style={styles.textContainer}>
              <View style={styles.linea}></View>
              <Text style={styles.subtitle}>Pastel de Boda</Text>
              <Text style={styles.texto}>$49.99</Text>
              <View style={styles.linea}></View>
              <Text style={styles.btnToggle}>
                {showDetails ? "Ocultar detalles" : "Mostrar detalles"}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    padding: 20,
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  btnToggle: {
    color: "#56070C",
    textDecorationLine: "underline",
    marginBottom: 10,
  },
  card: {
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
    width: "94%",
    marginBottom: 20,
  },
  titulo: {
    color: "#000",
    fontSize: 26,
    lineHeight: 30,
    paddingHorizontal: 20,
    marginTop: 10,
    padding: 10,
    fontWeight: "bold",
  },
  texto: {
    color: "#000",
    fontSize: 16,
    lineHeight: 25,
    textAlign: "left",
    paddingHorizontal: 20,
    margin: 10,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    lineHeight: 25,
    margin: 10,
    marginBottom: 10,
  },
  image: {
    width: "23%",
    aspectRatio: 1,
    marginRight: 10,
    borderRadius: 10,
  },
  productoContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  textContainer: {
    flex: 3,
  },
  linea: {
    borderBottomColor: "#D3D3D3",
    borderBottomWidth: 1,
    width: "100%",
    marginBottom: 20,
  },
  btnExplorar: {
    backgroundColor: "#ff6c00",
    fontSize: 18,
    fontWeight: "bold",
    lineHeight: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
    alignSelf: "center",
    color: "#fff",
  },
});

export default Principal;
