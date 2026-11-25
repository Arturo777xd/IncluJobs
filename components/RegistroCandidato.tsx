
import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
} from 'react-native';

export default function RegistroCandidato() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Datos personales</Text>

      <Text style={styles.label}>Nombre completo</Text>
      <TextInput
        style={styles.input}
        placeholder="Escribe tu nombre completo"
      />

      <Text style={styles.label}>Correo electrónico</Text>
      <TextInput
        style={styles.input}
        placeholder="ejemplo@correo.com"
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <Text style={styles.label}>Contraseña</Text>
      <TextInput
        style={styles.input}
        placeholder="Crea una contraseña"
        secureTextEntry
      />

      <Text style={styles.label}>Confirmar contraseña</Text>
      <TextInput
        style={styles.input}
        placeholder="Repite tu contraseña"
        secureTextEntry
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },

  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1E293B',
    marginBottom: 20,
  },

  label: {
    fontSize: 15,
    fontWeight: '600',
    color: '#1E293B',
    marginBottom: 8,
  },

  input: {
    height: 52,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 12,
    paddingHorizontal: 15,
    fontSize: 15,
    marginBottom: 18,
    color: '#1E293B',
  },
});
