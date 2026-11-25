
import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Alert,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@react-native-vector-icons/ionicons';

import Accesibilidad from '../components/Accesibilidad';
import { useAccesibilidad } from '../context/AccesibilidadContext';

export default function RecuperarPassword() {
  const navigation = useNavigation<any>();

  const { tema, tamañoTexto } = useAccesibilidad();

  const oscuro = tema === 'oscuro';

  const [correo, setCorreo] = useState('');

  const colores = oscuro
    ? {
        fondo: '#252D49',
        tarjeta: '#252D49',
        campo: '#394665',
        boton: '#515F91',
        texto: '#F1F2FA',
        secundario: '#C4CADB',
        borde: '#596783',
        icono: '#D5D9EA',
        morado: '#C8B4FF',
      }
    : {
        fondo: '#F0EFFF',
        tarjeta: '#F8F7FF',
        campo: '#F8F7FF',
        boton: '#394665',
        texto: '#1E293B',
        secundario: '#6B7280',
        borde: '#FFFFFF',
        icono: '#394665',
        morado: '#5520A8',
      };

  const texto = (tamaño: number) => ({
    fontSize: tamaño * tamañoTexto,
  });

  const enviarEnlace = () => {
    if (!correo.trim() || !correo.includes('@') || !correo.includes('.')) {
      Alert.alert(
        'Correo inválido',
        'Por favor, escribe un correo electrónico válido.'
      );
      return;
    }

    Alert.alert(
      'Solicitud enviada',
      'Si el correo está registrado, recibirás instrucciones para restablecer tu contraseña.'
    );
  };

  return (
    <SafeAreaView
      style={[styles.safeArea, { backgroundColor: colores.fondo }]}
    >
      <StatusBar barStyle={oscuro ? 'light-content' : 'dark-content'} />

      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >

        {/* ENCABEZADO */}
        <View style={styles.header}>

          <View style={styles.logoSection}>
            <View style={styles.logo}>
              <View style={[
                styles.logoCabeza,
                { backgroundColor: colores.texto }
              ]} />

              <View style={[
                styles.logoCabeza,
                { backgroundColor: colores.texto, right: 3, left: undefined }
              ]} />

              <View style={[
                styles.logoCuerpo,
                { borderColor: colores.texto }
              ]} />
            </View>

            <Text style={[
              styles.logoText,
              { color: colores.texto }
            ]}>
              IncluJobs
            </Text>
          </View>

          <Accesibilidad variant="login" />

        </View>

        {/* TITULO */}
        <View style={styles.titleContainer}>

          <Text
            style={[
              styles.title,
              texto(36),
              { color: colores.texto }
            ]}
            accessibilityRole="header"
          >
            ¿Olvidaste tu{'\n'}contraseña?
          </Text>

          <Text
            style={[
              styles.subtitle,
              texto(17),
              { color: colores.secundario }
            ]}
          >
            Te enviaremos un enlace para restablecerla.
          </Text>

        </View>

        {/* TARJETA */}
        <View style={[
          styles.formCard,
          {
            backgroundColor: colores.tarjeta,
            borderColor: colores.borde,
          }
        ]}>

          {/* CORREO */}
          <View style={styles.fieldGroup}>

            <Text style={[
              styles.label,
              texto(16),
              { color: colores.texto }
            ]}>
              Correo electrónico
            </Text>

            <View style={[
              styles.inputContainer,
              {
                backgroundColor: colores.campo,
                borderColor: colores.borde,
              }
            ]}>

              <Ionicons
                name="mail-outline"
                size={21}
                color={colores.icono}
                style={{ marginRight: 12 }}
              />

              <TextInput
                style={[
                  styles.input,
                  texto(15),
                  { color: colores.texto }
                ]}
                value={correo}
                onChangeText={setCorreo}
                placeholder="Tu correo electrónico"
                placeholderTextColor={colores.secundario}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                accessibilityLabel="Correo electrónico"
              />

            </View>

          </View>

          {/* BOTON ENVIAR */}
          <TouchableOpacity
            style={[
              styles.primaryButton,
              { backgroundColor: colores.boton }
            ]}
            onPress={enviarEnlace}
            activeOpacity={0.8}
            accessibilityRole="button"
            accessibilityLabel="Enviar enlace"
          >
            <Text style={[
              styles.primaryButtonText,
              texto(18)
            ]}>
              Enviar enlace
            </Text>
          </TouchableOpacity>

          {/* SEPARADOR */}
          <View style={[
            styles.divider,
            { backgroundColor: colores.borde }
          ]} />

          {/* VOLVER AL LOGIN */}
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
            accessibilityRole="button"
            accessibilityLabel="Volver a iniciar sesión"
          >
            <Text style={[
              styles.backText,
              texto(15),
              { color: colores.morado }
            ]}>
              Volver a iniciar sesión
            </Text>
          </TouchableOpacity>

        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  safeArea: {
    flex: 1,
  },

  container: {
    flexGrow: 1,
    paddingHorizontal: 25,
    paddingTop: 25,
    paddingBottom: 35,
    justifyContent: 'flex-start',
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 115,
  },

  logoSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  logo: {
    width: 38,
    height: 35,
    position: 'relative',
    marginRight: 8,
  },

  logoCabeza: {
    position: 'absolute',
    width: 11,
    height: 11,
    borderRadius: 6,
    left: 3,
    top: 1,
  },

  logoCuerpo: {
    position: 'absolute',
    width: 34,
    height: 20,
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    borderWidth: 7,
    borderBottomWidth: 0,
    bottom: 2,
    left: 2,
  },

  logoText: {
    fontSize: 21,
    fontWeight: '800',
  },

  titleContainer: {
    alignItems: 'center',
    marginBottom: 42,
  },

  title: {
    fontSize: 36,
    fontWeight: '800',
    textAlign: 'center',
    lineHeight: 44,
  },

  subtitle: {
    fontSize: 17,
    textAlign: 'center',
    marginTop: 22,
  },

  formCard: {
    borderRadius: 28,
    paddingHorizontal: 24,
    paddingVertical: 26,
    borderWidth: 1,
    elevation: 7,
    shadowColor: '#394665',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.12,
    shadowRadius: 12,
  },

  fieldGroup: {
    marginBottom: 34,
  },

  label: {
    fontSize: 16,
    fontWeight: '800',
    marginBottom: 16,
  },

  inputContainer: {
    height: 49,
    borderRadius: 25,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    elevation: 2,
    shadowColor: '#394665',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
  },

  input: {
    flex: 1,
    height: '100%',
    paddingVertical: 0,
  },

  primaryButton: {
    height: 55,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
    shadowColor: '#394665',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },

  primaryButtonText: {
    fontSize: 18,
    fontWeight: '800',
    color: '#FFFFFF',
  },

  divider: {
    height: 1,
    marginTop: 24,
    marginBottom: 18,
    opacity: 0.7,
  },

  backButton: {
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 30,
  },

  backText: {
    fontSize: 15,
    fontWeight: '800',
    textDecorationLine: 'underline',
  },

});
