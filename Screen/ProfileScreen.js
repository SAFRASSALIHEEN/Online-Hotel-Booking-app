// import { StyleSheet, Text, View } from "react-native";
// import React from "react";

// const ProfileScreen = () => {
//   return (
//     <View>
//       <Text>ProfileScreen</Text>
//     </View>
//   );
// };

// export default ProfileScreen;

// const styles = StyleSheet.create({});


import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

const HotelStaffProfileScreen = () => {
  const [name, setName] = useState('Sadalinda B.G.S.');
  const [email, setEmail] = useState('2019e118@eng.jfn.ac.lk');
  const [position, setPosition] = useState('no job');
  const [phoneNumber, setPhoneNumber] = useState('123-456-7890');
  const [address, setAddress] = useState('no 14/11 new town aralaganwila');

  // Function to handle the update profile button
  const handleUpdateProfile = () => {
    // You can add code here to update the user's profile details.
    // For now, we'll just show an alert.
    alert('Profile updated successfully');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Profile</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={(text) => setName(text)}
        placeholder="Name"
      />
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={(text) => setEmail(text)}
        placeholder="Email"
      />
      <TextInput
        style={styles.input}
        value={position}
        onChangeText={(text) => setPosition(text)}
        placeholder="Position"
      />
      <TextInput
        style={styles.input}
        value={phoneNumber}
        onChangeText={(text) => setPhoneNumber(text)}
        placeholder="Phone Number"
      />
      <TextInput
        style={styles.input}
        value={address}
        onChangeText={(text) => setAddress(text)}
        placeholder="Address"
      />
      <Button title="Update Profile" onPress={handleUpdateProfile} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default HotelStaffProfileScreen;
