import { Pressable, Text, Image } from "react-native";
import { styles } from "./styles";
import React from "react";

export function Ingredient(){
    return (
        <Pressable style={styles.container}>
            <Image style={styles.image} />

            <Text style={styles.title}>Maça</Text>
        </Pressable>
    )
}