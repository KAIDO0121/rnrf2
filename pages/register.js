import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Actions } from "react-native-router-flux";

const Register = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome} onPress={() => Actions.home()}>
        To home Screen
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#997F3D",
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    color: "#ffffff",
  },
});

export default Register;
