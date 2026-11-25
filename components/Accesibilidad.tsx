import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Modal,
  Switch,
} from 'react-native';

import { useAccesibilidad } from '../context/AccesibilidadContext';
import { Ionicons } from '@react-native-vector-icons/ionicons';

interface Props {
  variant?: 'login' | 'registro';
}

export default function Accesibilidad({ variant = 'registro' }: Props) {
  const [visible, setVisible] = useState(false);

  const {
    tema,
    tamañoTexto,
    altoContraste,
    reducirMovimiento,
    cambiarTema,
    aumentarTexto,
    disminuirTexto,
    alternarContraste,
    alternarMovimiento,
  } = useAccesibilidad();

  const oscuro = tema === 'oscuro';

  return (
    <>
      <Pressable
        style={styles.loginButton}
        onPress={() => setVisible(true)}
        accessibilityRole="button"
        accessibilityLabel="Opciones de accesibilidad"
      >
        <Ionicons name="accessibility-outline" size={23} color="#FFFFFF" style={{ marginRight: 7 }}/>
        <Text style={styles.loginText}>Accesibilidad</Text>
      </Pressable>

      <Modal
        visible={visible}
        transparent
        animationType="fade"
        onRequestClose={() => setVisible(false)}
      >
        <View style={styles.overlay}>
          <View
            style={[
              styles.menu,
              { backgroundColor: oscuro ? '#1E293B' : '#FFFFFF' },
            ]}
          >
            <View style={styles.header}>
              <Text
                style={[
                  styles.title,
                  { color: oscuro ? '#FFFFFF' : '#1E293B' },
                ]}
              >
                Accesibilidad
              </Text>

              <Pressable onPress={() => setVisible(false)}>
                <Text style={styles.close}>✕</Text>
              </Pressable>
            </View>

            <Text style={styles.section}>Tamaño del texto</Text>

            <View style={styles.textControls}>
              <Pressable style={styles.control} onPress={disminuirTexto}>
                <Text style={styles.controlText}>A−</Text>
              </Pressable>

              <Text
                style={[
                  styles.textSize,
                  { color: oscuro ? '#FFFFFF' : '#1E293B' },
                ]}
              >
                {Math.round(tamañoTexto * 100)}%
              </Text>

              <Pressable style={styles.control} onPress={aumentarTexto}>
                <Text style={styles.controlText}>A+</Text>
              </Pressable>
            </View>

            <View style={styles.option}>
              <Text style={[styles.optionText, oscuro && styles.darkText]}>
                Modo oscuro
              </Text>
              <Switch
                value={oscuro}
                onValueChange={valor =>
                  cambiarTema(valor ? 'oscuro' : 'claro')
                }
              />
            </View>

            <View style={styles.option}>
              <Text style={[styles.optionText, oscuro && styles.darkText]}>
                Alto contraste
              </Text>
              <Switch
                value={altoContraste}
                onValueChange={alternarContraste}
              />
            </View>

            <View style={styles.option}>
              <Text style={[styles.optionText, oscuro && styles.darkText]}>
                Reducir movimiento
              </Text>
              <Switch
                value={reducirMovimiento}
                onValueChange={alternarMovimiento}
              />
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  // Botón de accesibilidad para todas las pantallas
  loginButton: {
    minHeight: 48,
    marginTop: 20,
    backgroundColor: '#394665',
    borderRadius: 25,
    paddingHorizontal: 13,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
    shadowColor: '#394665',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  loginIcon: {
    color: '#FFFFFF',
    fontSize: 23,
    marginRight: 7,
  },
  loginText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '700',
  },

  // Menú de accesibilidad
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  menu: {
    width: '100%',
    maxWidth: 400,
    borderRadius: 20,
    padding: 22,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 25,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  close: {
    fontSize: 22,
    color: '#6B7280',
  },
  section: {
    fontSize: 16,
    fontWeight: '600',
    color: '#6366F1',
    marginBottom: 12,
  },
  textControls: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  control: {
    width: 55,
    height: 42,
    borderRadius: 10,
    backgroundColor: '#E8E7F5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  controlText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#394665',
  },
  textSize: {
    fontSize: 17,
    fontWeight: '600',
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 13,
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
  },
  optionText: {
    fontSize: 15,
    color: '#1E293B',
  },
  darkText: {
    color: '#FFFFFF',
  },
});

