import { StatusBar } from "expo-status-bar"
import React from "react"
import { StyleSheet, Text, View, Image } from "react-native"

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={require("./assets/adaptive-icon.png")}
        style={styles.logo}
      />
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 120,
    height: 120,
    margin: 10,
  },
})
