import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  Button,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import Header2 from "../Components/Header2";
import { Feather } from "@expo/vector-icons";
import { TextInput } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import DatePicker from "react-native-date-ranges";
import { Fontisto } from "@expo/vector-icons";
import {
  BottomModal,
  ModalButton,
  ModalTitle,
  SlideAnimation,
} from "react-native-modals";
import { ModalFooter } from "react-native-modals";
import { ModalContent } from "react-native-modals";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [selectedDates, setSelectedDates] = useState();
  const [rooms, setRooms] = useState(1);
  const [modalVisible, setModalVisible] = useState(false);
  console.log(selectedDates);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Online Hotel Booking",
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
      },
      headerStyle: {
        backgroundColor: "#003580",
        height: 110,
        borderBottomColor: "transparent",
        shadowColor: "transparent",
      },
      headerRight: () => (
        <Ionicons
          name="notifications-outline"
          size={24}
          color="white"
          style={{ marginRight: 12 }}
        />
      ),
    });
  }, []);
  const customButton = (onConfirm) => {
    return (
      <Button
        onPress={onConfirm}
        style={{
          container: { width: "80%", marginHorizontal: "3%" },
          text: { fontSize: 20 },
        }}
        primary
        title="Submit"
      />
    );
  };
  return (
    <>
      <View>
        <Header2 />
        <ScrollView>
          <View
            style={{
              margin: 20,
              borderColor: "#003580",
              borderWidth: 3,
              borderRadius: 6,
            }}
          >
            {/* Destination */}
            <Pressable
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
                paddingHorizontal: 10,
                borderColor: "#003580",
                borderWidth: 2,
                paddingVertical: 15,
              }}
            >
              <Feather name="search" size={24} color="black" />
              <TextInput
                placeholderTextColor="black"
                placeholder="Enter your destination"
              />
            </Pressable>
            {/* Select dates*/}
            <Pressable
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
                paddingHorizontal: 10,
                borderColor: "#003580",
                borderWidth: 2,
                paddingVertical: 15,
              }}
            >
              <FontAwesome name="calendar" size={24} color="black" />
              <DatePicker
                style={{
                  width: 350,
                  height: 30,
                  borderRadius: 0,
                  borderWidth: 0,
                  borderColor: "transparent",
                }}
                customStyles={{
                  placeholderText: {
                    fontSize: 15,
                    flexDirection: "row",
                    alignItems: "center",
                    marginRight: "auto",
                  },
                  headerStyle: {
                    backgroundColor: "#003580",
                  },
                  contentText: {
                    fontSize: 15,
                    flexDirection: "row",
                    alignItems: "center",
                    marginRight: "auto",
                  },
                }}
                selectBgColor="#003580"
                customButton={(onConfirm) => customButton(onConfirm)}
                onConfirm={(startDate, endDate) =>
                  setSelectedDates(startDate, endDate)
                }
                allowFotScaling={false}
                placeholder={"Apr 27, 2019 - Jul 10, 2019"}
                mode={"range"}
              ></DatePicker>
            </Pressable>
            {/* Rooms */}
            <Pressable
              onPress={() => setModalVisible(!modalVisible)}
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
                paddingHorizontal: 10,
                borderColor: "#003580",
                borderWidth: 2,
                paddingVertical: 15,
              }}
            >
              <Fontisto name="room" size={24} color="black" />
              <TextInput
                placeholderTextColor="black"
                placeholder={"Select Rooms"}
              />
            </Pressable>
            {/* Search */}
            <Pressable
              style={{
                paddingHorizontal: 10,
                borderColor: "#003580",
                borderWidth: 2,
                paddingVertical: 15,
                backgroundColor: "#003580",
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 15,
                  fontWeight: "500",
                  color: "white",
                }}
              >
                Search
              </Text>
            </Pressable>
          </View>
        </ScrollView>
      </View>
      <BottomModal
        swipeThreshold={200}
        onBackdropPress={() => setModalVisible(!modalVisible)}
        swipeDirection={["up", "down"]}
        footer={
          <ModalFooter>
            <ModalButton
              text="Apply"
              style={{
                marginBottom: 20,
                color: "white",
                backgroundColor: "#003580",
              }}
              onPress={() => setModalVisible(!modalVisible)}
            />
          </ModalFooter>
        }
        modalTitle={<ModalTitle title="Select Rooms" />}
        modalAnimation={
          new SlideAnimation({
            slideFrom: "bottom",
          })
        }
        onHardwareBackPress={() => setModalVisible(!modalVisible)}
        visible={modalVisible}
        onTouchOutside={() => setModalVisible(!modalVisible)}
      >
        <ModalContent style={{ width: "100%", height: "310" }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginVertical: 15,
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "500" }}>Room</Text>
            <Pressable
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
              }}
            >
              <Pressable
                onPress={() => setRooms(Math.max(1, rooms - 1))}
                style={{
                  height: 26,
                  width: 26,
                  borderRadius: 13,
                  borderColor: "#BEBEBE",
                  backgroundColor: "#E0E0E0",
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 18,
                    fontWeight: "500",
                    paddingHorizontal: 6,
                  }}
                >
                  -
                </Text>
              </Pressable>
              <Pressable>
                <Text>{rooms}</Text>
              </Pressable>
              <Pressable
                onPress={() => setRooms(Math.max(10, rooms + 1))}
                style={{
                  height: 26,
                  width: 26,
                  borderRadius: 13,
                  borderColor: "#BEBEBE",
                  backgroundColor: "#E0E0E0",
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 18,
                    fontWeight: "500",
                    paddingHorizontal: 6,
                  }}
                >
                  +
                </Text>
              </Pressable>
            </Pressable>
          </View>
        </ModalContent>
      </BottomModal>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
