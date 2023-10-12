import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";

const Header2 = () => {
  return (
    <View
      style={{
        backgroundColor: "#003580",
        height: 65,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <Pressable
        style={{
          flexDirection: "row",
          alignItems: "center",
          borderColor: "white",
          borderWidth: 2,
          borderRadius: 25,
          padding: 8,
        }}
      >
        <FontAwesome5 name="hotel" size={26} color="white" />
        <Text
          style={{
            marginLeft: 8,
            fontWeight: "bold",
            color: "white",
            fontSize: 15,
          }}
        >
          Hotels
        </Text>
      </Pressable>
    </View>
  );
};

export default Header2;

const styles = StyleSheet.create({});
