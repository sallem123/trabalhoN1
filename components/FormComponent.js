import React, { useState } from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";

const FormComponent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [key, setKey] = useState("");

  return (
    <View>
      <Text style={styles.text}>email: {email}</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu email"
        value={email}
        onChangeText={setEmail}
      />
      <Text style={styles.text}>Olá, {name}</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        value={name}
        onChangeText={setName}
      />

      <Text style={styles.text}>numero: {number}</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu numero"
        value={number}
        onChangeText={setNumber}
      />

      <Text style={styles.text}>senha: {key} </Text>
      <TextInput
        style={styles.input}
        placeholder="Digite sua senha"
        value={key}
        secureTextEntry
        onChangeText={setKey}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 10,
    width: "100%",
    marginBottom: 20,
  },
  text: {
    fontSize: 20,
  },
});

export default FormComponent;
