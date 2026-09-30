import { Stack } from "expo-router";


export default function RootLayout () {
    return (
        <Stack>
            <Stack.Screen name="index" options= {{title : "Shake It-Daily"}} />
            <Stack.Screen name="ny" options = {{ title : " Nytt inlägg"}} />
        </Stack>
    )
}