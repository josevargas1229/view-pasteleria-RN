import { StyleSheet, Text, View } from "react-native";
// import { Ionicons } from "@expo/vector-icons";
// import Login from "./Componentes/login";
import DetalleProducto from "./Componentes/DetalleProducto";
import EncabezadoDetalle from "./Componentes/EncabezadoDetalle";
// import EncabezadoGrafica from "./Componentes/EncabezadoGrafica";
// import EncabezadoHistorial from "./Componentes/EncabezadoHistorial";
// import BuscadorHistorial from "./Componentes/BuscadorHistorial";
 import Splash from "./Componentes/Splash";
import Pie2 from "./Componentes/pie2";// es el pie de pagina

export default function App() {
  return (
    <View style={styles.container}>
      <Splash/>
    </View>
  );
}
export const Encabezado = () => {
  return <View style={styles.encabezado}>
    <EncabezadoDetalle/>
    </View>;
};

export const Cuerpo = () => {
  return (
    <View style={styles.cuerpo}>
      <DetalleProducto />
    </View>
  );
};

export const Pie = () => {
  
  return (
    <View style={styles.pie}>
       <Pie2 />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "center",
  },
  texto: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },

  Pie1: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  encabezado: {
    flex: 1.5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#56070C",
  },
  cuerpo: {
    flex: 8,
  },
  pie: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#56070C",
  },
});
