import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { hamtaInlagg, type Inlagg } from "../lib/lagring";

export default function InlaggDetalj() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [inlagg, setInlagg] = useState<Inlagg | undefined>();

  useEffect(() => {
    hamtaInlagg().then((alla) => {
      setInlagg(alla.find((x) => x.id === id));
    });
  }, [id]);

  if (!inlagg) {
    return (
      <View style={styles.container}>
        <Text>Hittade inte inlägget.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titel}>{inlagg.titel || "Utan titel"}</Text>
      <Text style={styles.text}>
        {inlagg.privat ? "Privat inlägg" : inlagg.text}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, backgroundColor: "#fff" },
  titel: { fontSize: 22, fontWeight: "700", marginBottom: 8 },
  text: { fontSize: 16, lineHeight: 22 },
});