import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";

const Card = ({ children }) => {
  return <View style={styles.card}>{children}</View>;
};

const DetalleProducto = () => {
  const [productName, setProductName] = useState("Pastel de chocolate");
  const [productDescription, setProductDescription] = useState(
    "Delicioso pastel de chocolate con cobertura de fresa."
  );
  const [price, setPrice] = useState("15.99");
  const [unitsInStock, setUnitsInStock] = useState(10);
  const [unitsToBuy, setUnitsToBuy] = useState(1);

  const handleSave = () => {
    // Implementa aquí la lógica para guardar los cambios del producto
    console.log("Producto guardado:", productName, price, unitsToBuy);
  };

  const handleDelete = () => {
    // Implementa aquí la lógica para eliminar el producto
    console.log("Producto eliminado:", productName);
  };

  const decreaseUnits = () => {
    if (unitsToBuy > 1) {
      setUnitsToBuy(unitsToBuy - 1);
    }
  };

  const increaseUnits = () => {
    if (unitsToBuy < unitsInStock) {
      setUnitsToBuy(unitsToBuy + 1);
    }
  };

  return (
    <View style={styles.container}>
      <Card>
        <View style={styles.imageContainer}>
          <Image
            source={require("../assets/img/Mikoto_Urabe.png")}
            style={styles.image}
          />
        </View>
        <Text style={styles.title}>Nombre del Producto:</Text>
        <TextInput
          style={styles.input}
          value={productName}
          onChangeText={setProductName}
          editable={false}
        />
        <Text style={styles.title}>Descripción:</Text>
        <TextInput
          style={[styles.input, styles.multilineInput]}
          value={productDescription}
          onChangeText={setProductDescription}
          multiline={true}
          editable={false}
        />
        <Text style={styles.title}>Precio:</Text>
        <TextInput
          style={styles.input}
          value={price}
          onChangeText={setPrice}
          keyboardType="numeric"
          editable={false}
        />
        <Text style={styles.title}>Unidades a comprar:</Text>
        <View style={styles.unitsContainer}>
          <TouchableOpacity onPress={decreaseUnits} style={styles.unitButton}>
            <Text style={styles.unitButtonText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.unitsText}>{unitsToBuy}</Text>
          <TouchableOpacity onPress={increaseUnits} style={styles.unitButton}>
            <Text style={styles.unitButtonText}>+</Text>
          </TouchableOpacity>
          <Text style={styles.availableUnitsText}>
            Disponibles: {unitsInStock}
          </Text>
        </View>
      </Card>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleDelete} style={styles.deleteButton}>
          <Text style={styles.buttonText}>Cancelar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSave} style={styles.saveButton}>
          <Text style={styles.buttonText}>Comprar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    backgroundColor: "#fffbea",
    borderRadius: 10,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 20,
    width: "80%",
  },
  imageContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#5e2129",
  },
  input: {
    height: 40,
    backgroundColor: "#fff",
    borderColor: "#5e2129",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    color: "#333",
  },
  multilineInput: {
    height: 80,
  },
  unitsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  unitButton: {
    backgroundColor: "#5e2129",
    borderRadius: 5,
    padding: 10,
  },
  unitButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  unitsText: {
    paddingHorizontal: 20,
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  availableUnitsText: {
    marginLeft: 20,
    fontSize: 16,
    color: "#5e2129", // Cambiado a un color más oscuro
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "80%",
  },
  deleteButton: {
    backgroundColor: "#ff6347",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  saveButton: {
    backgroundColor: "#008000",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default DetalleProducto;
