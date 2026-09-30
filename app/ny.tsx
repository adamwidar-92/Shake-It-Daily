import { StyleSheet, Text, View } from "react-native";

export default function NyttInlagg() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Här skriver du. Formulär nästa steg.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, backgroundColor: "#fff" },
  text: { fontSize: 16 },
});