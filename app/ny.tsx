import * as Haptics from "expo-haptics";
import * as ImagePicker from "expo-image-picker";
import { router } from "expo-router";
import { useState } from "react";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
} from "react-native";
import { useSkakning } from "../hooks/useSkakning";
import { sparaInlagg } from "./lib/lagring";

const PROMPTER = [
  "Vad var det bästa idag?",
  "Vad irriterade dig?",
  "Vad är du tacksam för?",
  "Vad lärde du dig idag?",
  "Vad vill du släppa innan du sover?",
];

export default function NyttInlagg() {
  const [titel, setTitel] = useState("");
  const [text, setText] = useState("");
  const [privat, setPrivat] = useState(false);
  const [prompt, setPrompt] = useState("Vad var det bästa idag?");
  const [bildUri, setBildUri] = useState<string | undefined>();

  useSkakning(() => {
    const i = Math.floor(Math.random() * PROMPTER.length);
    setPrompt(PROMPTER[i]);
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
  });

  async function valjBild() {
    const resultat = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      quality: 0.6,
    });
    if (!resultat.canceled) {
      setBildUri(resultat.assets[0].uri);
    }
  }

  async function spara() {
    if (!text.trim()) return;
    await sparaInlagg({
      titel: titel.trim(),
      text: text.trim(),
      privat,
      prompt,
      bildUri,
    });
    await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    router.back();
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.label}>Prompt (skaka telefonen)</Text>
      <Text style={styles.prompt}>{prompt}</Text>

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

      <Text style={styles.label}>Privat</Text>
      <Switch value={privat} onValueChange={setPrivat} />

      <Pressable style={styles.sekundar} onPress={valjBild}>
        <Text>Välj bild</Text>
      </Pressable>
      {bildUri ? <Image source={{ uri: bildUri }} style={styles.bild} /> : null}

      <Pressable style={styles.knapp} onPress={spara}>
        <Text style={styles.knappText}>Spara</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 24, backgroundColor: "#fff" },
  label: { fontWeight: "600", marginTop: 12, marginBottom: 6 },
  prompt: { fontSize: 18, marginBottom: 8 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
  },
  textarea: { minHeight: 120, textAlignVertical: "top" },
  sekundar: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 16,
  },
  bild: { width: "100%", height: 180, borderRadius: 8, marginTop: 12 },
  knapp: {
    backgroundColor: "#111",
    padding: 14,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 16,
  },
  knappText: { color: "#fff", fontWeight: "600" },
});