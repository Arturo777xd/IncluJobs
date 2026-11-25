import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Pressable,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import RegistroCandidato from '../components/RegistroCandidato';
import RegistroEmpresa from '../components/RegistroEmpresa';
import Accesibilidad from '../components/Accesibilidad';

export default function Registro() {
  const navigation = useNavigation<any>();
  const [tipoCuenta, setTipoCuenta] = React.useState('candidato');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <View>

          {/* regresar */}
          <Pressable
            style={styles.backButton}
            onPress={() => navigation.goBack()}
            accessibilityRole="button"
            accessibilityLabel="Regresar al inicio de sesión"
          >
            <Text style={styles.backText}>← Regresar</Text>
          </Pressable>

          {/* encabezado */}
          <View style={styles.header}>
            <Text style={styles.logo}>IncluJobs</Text>

          <Accesibilidad variant="registro" />
          
          </View>

          {/* titulo */}
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Crear Cuenta</Text>
            <Text style={styles.subtitle}>
              Empieza con lo esencial
            </Text>
          </View>

          {/* selector */}
          <View style={styles.selectorContainer}>
            <Text style={styles.label}>
              ¿Qué deseas hacer?
            </Text>

            <View style={styles.selector}>
              <Pressable
                onPress={() => setTipoCuenta('candidato')}
                style={[
                  styles.option,
                  tipoCuenta === 'candidato' && styles.optionSelected,
                ]}
              >
                <Text style={[
                  styles.optionText,
                  tipoCuenta === 'candidato' && styles.optionTextSelected,
                ]}>
                  Busco empleo
                </Text>
              </Pressable>

              <Pressable
                onPress={() => setTipoCuenta('empresa')}
                style={[
                  styles.option,
                  tipoCuenta === 'empresa' && styles.optionSelected,
                ]}
              >
                <Text style={[
                  styles.optionText,
                  tipoCuenta === 'empresa' && styles.optionTextSelected,
                ]}>
                  Soy empresa
                </Text>
              </Pressable>
            </View>
          </View>

          {/* formularios */}
          {tipoCuenta === 'candidato' ? (
            <RegistroCandidato />
          ) : (
            <RegistroEmpresa />
          )}

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F7FF',
  },

  content: {
    flexGrow: 1,
    padding: 24,
  },

  backButton: {
    alignSelf: 'flex-start',
    paddingVertical: 10,
    marginBottom: 15,
  },

  backText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#394665',
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 35,
  },

  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1E293B',
  },

  accessibilityButton: {
    width: 45,
    height: 45,
    borderRadius: 15,
    backgroundColor: '#E8E7F5',
    justifyContent: 'center',
    alignItems: 'center',
  },

  accessibilityIcon: {
    fontSize: 23,
  },

  titleContainer: {
    marginBottom: 25,
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#1E293B',
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 16,
    color: '#6B7280',
  },

  selectorContainer: {
    marginBottom: 25,
  },

  label: {
    fontSize: 15,
    fontWeight: '600',
    color: '#1E293B',
    marginBottom: 12,
  },

  selector: {
    flexDirection: 'row',
    backgroundColor: '#E8E7F5',
    borderRadius: 15,
    padding: 5,
  },

  option: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
  },

  optionSelected: {
    backgroundColor: '#394665',
  },

  optionText: {
    color: '#6B7280',
    fontWeight: '600',
  },

  optionTextSelected: {
    color: '#FFFFFF',
  },
});

