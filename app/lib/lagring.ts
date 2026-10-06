import * as FileSystem from "expo-file-system/legacy";

export type Inlagg = {
  id: string;
  titel: string;
  text: string;
  privat: boolean;
  prompt?: string;
  bildUri?: string;
};

const FIL = FileSystem.documentDirectory + "inlagg.json";

export async function hamtaInlagg(): Promise<Inlagg[]> {
  const info = await FileSystem.getInfoAsync(FIL);
  if (!info.exists) return [];
  const raw = await FileSystem.readAsStringAsync(FIL);
  return JSON.parse(raw) as Inlagg[];
}

export async function sparaInlagg(data: Omit<Inlagg, "id">): Promise<void> {
  const alla = await hamtaInlagg();
  const nytt: Inlagg = { ...data, id: Date.now().toString() };
  alla.unshift(nytt);
  await FileSystem.writeAsStringAsync(FIL, JSON.stringify(alla));
}