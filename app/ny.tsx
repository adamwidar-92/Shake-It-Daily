import { router } from "expo-router";
import { useState } from "react";
import {
    Pressable,
    StyleSheet,
    Switch,
    Text,
    TextInput,
    View,
} from "react-native";

export default function NyttInlagg() {
  const [titel, setTitel] = useState("");
  const [text, setText] = useState("");
  const [privat, setPrivat] = useState(false);

  function spara() {
    if (!text.trim()) {
      return;
    }
    // Tills vidare: bara skriv ut så du ser att värdena stämmer
    console.log({ titel, text, privat });
    router.back();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Titel</Text>
      <TextInput
        style={styles.input}
        value={titel}
        onChangeText={setTitel}
        placeholder="Kort titel"
      />

      <Text style={styles.label}>Text</Text>
      <TextInput
        style={[styles.input, styles.textarea]}
        value={text}
        onChangeText={setText}
        placeholder="Skriv några rader..."
        multiline
      />

      <View style={styles.rad}>
        <Text>Privat</Text>
        <Switch value={privat} onValueChange={setPrivat} />
      </View>

      <Pressable style={styles.knapp} onPress={spara}>
        <Text style={styles.knappText}>Spara</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, backgroundColor: "#fff" },
  label: { fontWeight: "600", marginTop: 12, marginBottom: 6 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
  },
  textarea: { minHeight: 120, textAlignVertical: "top" },
  rad: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 16,
  },
  knapp: {
    backgroundColor: "#111",
    padding: 14,
    borderRadius: 10,
    alignItems: "center",
  },
  knappText: { color: "#fff", fontWeight: "600" },
});