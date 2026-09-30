import { Link } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Hem() {
  return (
    <View style={styles.container}>
      <Text style={styles.titel}>Shake It-Daily</Text>
      <Text style={styles.text}>
        Skriv korta inlägg. Skak kommer i ett senare steg.
      </Text>

      <Link href="/ny" asChild>
        <Pressable style={styles.knapp}>
          <Text style={styles.knappText}>Nytt inlägg</Text>
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#fff",
    justifyContent: "center",
    gap: 12,
  },
  titel: { fontSize: 28, fontWeight: "700" },
  text: { fontSize: 16, color: "#444" },
  knapp: {
    backgroundColor: "#111",
    padding: 14,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 8,
  },
  knappText: { color: "#fff", fontWeight: "600" },
});