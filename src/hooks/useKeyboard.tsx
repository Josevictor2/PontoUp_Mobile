import { useEffect, useState } from "react";
import { Keyboard } from "react-native";

export const useKeyboard = () => {
    const [PressedKey, setPressedKey] = useState(false);

    const onSelectedKey = Keyboard.addListener("keyboardDidShow", () => {
        setPressedKey(true);
    })

    const onUnselectedKey = Keyboard.addListener("keyboardDidHide", () => {
        setPressedKey(false);
    })

    useEffect(() => {
        return () => {
            onSelectedKey.remove();
            onUnselectedKey.remove();
        }
    }, [PressedKey])

    return {
        PressedKey,
    }

}