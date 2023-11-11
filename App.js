import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import StackNavigator2 from "../my-app/StackNavigator2";
import { ModalPortal } from "react-native-modals";

export default function App() {
  return (
    <>
      <StackNavigator2 />
      <ModalPortal />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
