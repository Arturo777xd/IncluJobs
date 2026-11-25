
import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
} from 'react-native';

export default function RegistroEmpresa() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Datos de la empresa</Text>

      <Text style={styles.label}>Nombre de la empresa</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre comercial"
      />

      <Text style={styles.label}>Razón social</Text>
      <TextInput
        style={styles.input}
        placeholder="Razón social de la empresa"
      />

      <Text style={styles.label}>RFC</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingresa el RFC"
        autoCapitalize="characters"
      />

      <Text style={styles.label}>Correo electrónico empresarial</Text>
      <TextInput
        style={styles.input}
        placeholder="empresa@correo.com"
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <Text style={styles.label}>Número telefónico</Text>
      <TextInput
        style={styles.input}
        placeholder="Número de contacto"
        keyboardType="phone-pad"
      />

      <Text style={styles.label}>Dirección</Text>
      <TextInput
        style={styles.input}
        placeholder="Dirección de la empresa"
      />

      <Text style={styles.label}>Descripción de la empresa</Text>
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Cuéntanos sobre tu empresa"
        multiline
        numberOfLines={4}
        textAlignVertical="top"
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
    marginBottom: 50,
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

  textArea: {
    height: 110,
    paddingTop: 15,
  },
});
