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

const Carrito = () => {
  const [productName, setProductName] = useState("");
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedUnits, setSelectedUnits] = useState("1");
  const [price, setPrice] = useState("");

  const handleSave = () => {
    // Aquí podrías implementar la lógica para guardar el producto
    // Por ejemplo, enviar los datos a un servidor o almacenarlos localmente
    console.log("Producto guardado:", productName, selectedUnits, price);
  };

  const handleDelete = () => {
    // Aquí podrías implementar la lógica para eliminar el producto
    console.log("Producto eliminado");
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleUnitSelect = (unit) => {
    setSelectedUnits(unit);
    toggleModal();
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          source={require("../assets/img/Mikoto_Urabe.png")}
          style={styles.image}
        />

        <View style={styles.cardBody}>
          <Text style={styles.title}>Productos</Text>

          <Text style={styles.productName}>{productName}</Text>
          <Text style={styles.subtitle}>Pastel de chocolate</Text>
          <View style={styles.actions}>
            <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={handleDelete}>
                <Text style={styles.deleteButton}>Eliminar</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={handleSave}>
                <Text style={styles.saveButton}>Guardar</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}></Text>
            <TouchableOpacity onPress={toggleModal}>
              <Text style={styles.picker}>{selectedUnits} u.</Text>
            </TouchableOpacity>
            <Modal
              animationType="slide"
              transparent={true}
              visible={isModalVisible}
              onRequestClose={() => {
                console.log("Modal cerrado");
              }}
            >
              <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                  <Text>Selecciona las unidades:</Text>
                  <TouchableHighlight onPress={() => handleUnitSelect("1")}>
                    <Text>1 unidades</Text>
                  </TouchableHighlight>
                  <TouchableHighlight onPress={() => handleUnitSelect("2")}>
                    <Text>2 unidades</Text>
                  </TouchableHighlight>
                  <TouchableHighlight onPress={() => handleUnitSelect("3")}>
                    <Text>3 unidades</Text>
                  </TouchableHighlight>
                  <TouchableHighlight onPress={() => handleUnitSelect("4")}>
                    <Text>4 unidades</Text>
                  </TouchableHighlight>
                  <TouchableHighlight onPress={() => handleUnitSelect("1")}>
                    <Text>Ninguno</Text>
                  </TouchableHighlight>
                </View>
              </View>
            </Modal>
          </View>
          <View style={styles.section}>
            <Text style={styles.price}>$15.99</Text>
          </View>

          <View style={styles.footer}>
            <TouchableOpacity onPress={handleSave}>
              <Text style={styles.sendButton}>Enviar</Text>
            </TouchableOpacity>
            <Text style={styles.totalPrice}>$999</Text>
          </View>
        </View>
      </View>
      <View style={styles.menuContainer}>
        <View style={styles.menu}>
          <View style={styles.productos}>
            <Text style={styles.producto}>Productos:</Text>
            <Text style={styles.producto}>Envio</Text>
            <Text style={styles.title}>Total</Text>
            {/* Puedes agregar más productos según sea necesario */}
          </View>
          <View style={styles.total}>
            <Text style={styles.totalAmount}>$15.99</Text>
            {/* Aquí puedes calcular el total a pagar */}
            <Text style={styles.totalAmount}>$999</Text>
            <Text style={styles.totalAmount2}>$1,014.99</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.continueButton}>
          <Text style={styles.continueText}>Continuar Compra</Text>
        </TouchableOpacity>
      </View>
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
    borderRadius: 10,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  image: {
    width: "30%",
    height: 100,
    marginRight: 20,
    borderRadius: 5,
    backgroundColor: "#000",
  },
  cardBody: {
    flex: 1,
  },
  productName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 3,
  },
  deleteButton: {
    color: "#56070C",
  },
  saveButton: {
    color: "#56070C",
  },
  section: {
    marginBottom: 4,
  },
  sectionTitle: {
    fontWeight: "bold",
    marginBottom: 5,
  },
  picker: {
    borderWidth: 2,
    borderColor: "gray",
    borderRadius: 5,
    width: "25%",
    textAlign: "center",
  },
  price: {
    fontWeight: "bold",
    marginBottom: 5,
    textAlign: "right",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    width: "100%",
  },
  sendButton: {
    backgroundColor: "#5e2129",
    color: "white",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: "bold",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  buttonContainer: {
    marginHorizontal: 20,
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
  },
  menuContainer: {
    backgroundColor: "#fffbea",
    borderRadius: 10,
    padding: 18,
    marginTop: 160,
    width: "100%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  menu: {
    flexDirection: "row",
    marginBottom: 20,
  },
  productos: {
    flex: 1,
  },
  total: {
    flex: 1,
    alignItems: "flex-end",
  },
  title: {
    fontSize: 20,
    textAlign: "left",
    fontWeight: "bold",
  },
  producto: {
    fontSize: 16,
    marginBottom: 10,
  },
  totalAmount: {
    fontSize: 16,
    marginBottom: 10,
  },

  totalAmount2: {
    fontSize: 16,
    fontWeight: "bold",
  },
  continueButton: {
    backgroundColor: "#5e2129",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
    alignSelf: "center",
    alignItems: "center",
    width: "95%",
  },
  continueText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default Carrito;
