import { Link, useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { hamtaInlagg, type Inlagg } from "./lib/lagring";

export default function Hem() {
  const [inlagg, setInlagg] = useState<Inlagg[]>([]);

  useFocusEffect(
    useCallback(() => {
      hamtaInlagg().then(setInlagg);
    }, [])
  );

  return (
    <View style={styles.container}>
      <Link href="/ny" asChild>
        <Pressable style={styles.knapp}>
          <Text style={styles.knappText}>Nytt inlägg</Text>
        </Pressable>
      </Link>

      <FlatList
        data={inlagg}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={<Text style={styles.tom}>Inga inlägg ännu.</Text>}
        renderItem={({ item }) => (
          <Link href={`/inlagg/${item.id}`} asChild>
            <Pressable style={styles.kort}>
              <Text style={styles.titel}>{item.titel || "Utan titel"}</Text>
              <Text numberOfLines={2}>
                {item.privat ? "Privat" : item.text}
              </Text>
            </Pressable>
          </Link>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#fff" },
  knapp: {
    backgroundColor: "#111",
    padding: 14,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 16,
  },
  knappText: { color: "#fff", fontWeight: "600" },
  tom: { color: "#777", marginTop: 24 },
  kort: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 12,
    marginBottom: 10,
  },
  titel: { fontSize: 16, fontWeight: "600", marginBottom: 4 },
});