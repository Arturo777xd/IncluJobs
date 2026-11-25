import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  Alert,
} from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import Accesibilidad from '../components/Accesibilidad';
import { useAccesibilidad } from '../context/AccesibilidadContext';
import { Ionicons } from '@react-native-vector-icons/ionicons';

type RootStackParamList = {
  Registro: undefined;
  RecuperarPassword: undefined;
};

export default function Login() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const {
  tema,
  tamañoTexto,
} = useAccesibilidad();

const oscuro = tema === 'oscuro';

const colores = oscuro
  ? {
      fondo: '#252D49',
      tarjeta: '#212B49',
      campo: '#252F4D',
      boton: '#405078',
      textoBoton: '#F1F2FA',
      texto: '#F1F2FA',
      textoSecundario: '#C4CADB',
      morado: '#C8B4FF',
      borde: '#596783',
      decoracion: '#394665',
      icono: '#D5D9EA',
    }
  : {
      fondo: '#F8F7FF',
      tarjeta: '#F8F7FF',
      campo: '#F8F7FF',
      boton: '#405078',
      textoBoton: '#FFFFFF',
      texto: '#1E293B',
      textoSecundario: '#6B7280',
      morado: '#6366F1',
      borde: '#E5E7EB',
      decoracion: '#E8E7F5',
      icono: '#394665',
    };

const texto = (tamaño: number) => ({
  fontSize: tamaño * tamañoTexto,
});
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');
  const [verPassword, setVerPassword] = useState(false);

  const [errorCorreo, setErrorCorreo] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [mensajeExito, setMensajeExito] = useState('');

  // valida los datos antes de entrar
  const validarYEntrar = () => {
    setErrorCorreo('');
    setErrorPassword('');
    setMensajeExito('');

    let todoBien = true;

    if (!correo.trim() || !correo.includes('@') || !correo.includes('.')) {
      setErrorCorreo('Escribe un correo electrónico válido.');
      todoBien = false;
    }

    if (password.length < 8) {
      setErrorPassword('Tu contraseña debe tener al menos 8 caracteres.');
      todoBien = false;
    }

    if (!todoBien) return;

    setMensajeExito('¡Datos correctos! Entrando a IncluJobs...');
  };

  // muestra las opciones de accesibilidad
  const abrirAccesibilidad = () => {
    Alert.alert(
      'Accesibilidad',
      'Aquí estarán disponibles las opciones de accesibilidad de IncluJobs.'
    );
  };

  // muestra la ayuda para recuperar la contraseña
  const recuperarPassword = () => {
    navigation.navigate('RecuperarPassword');
  };

  return (
    <SafeAreaView
  style={[
    styles.safeArea,
    { backgroundColor: colores.fondo },
  ]}
>
  <StatusBar
    barStyle={oscuro ? 'light-content' : 'dark-content'}
  />

      <View style={[styles.background, { backgroundColor: colores.fondo }]}>
  <View
    style={[
      styles.decoracionSuperior,
      { backgroundColor: colores.decoracion },
    ]}
  />
  <View
    style={[
      styles.decoracionInferior,
      { backgroundColor: colores.decoracion },
    ]}
  />
</View>

      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView
          contentContainerStyle={styles.container}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >

          {/* encabezado */}
          <View style={styles.header}>

            <View style={styles.logoSection}>
              <View style={styles.logo}>
                <View style={styles.logoCabezaUno} />
                <View style={styles.logoCabezaDos} />
                <View style={styles.logoCuerpo} />
              </View>

              <Text style={styles.logoText}>
                IncluJobs
              </Text>
            </View>

            <Accesibilidad variant="login" />

          </View>

          {/* bienvenida */}
          <View style={styles.welcomeSection}>

            {/* ilustracion del maletin */}
            <View style={styles.illustrationContainer}>
              <View style={styles.illustrationBack} />

              <View style={styles.illustrationCard}>
                <View style={styles.briefcaseHandle} />
                <View style={styles.briefcase}>
                  <View style={styles.briefcaseLine} />
                  <View style={styles.briefcaseLock} />
                </View>
              </View>
            </View>

            <Text
              style={[styles.title, texto(20), { color: colores.texto }]}
              accessibilityRole="header"
            >
              Bienvenido de nuevo
            </Text>

            <Text style={[styles.subtitle, texto(14), { color: colores.texto }]}>
              Accede a tu cuenta.
            </Text>

          </View>

          {/* tarjeta del formulario */}
          <View style={[styles.formCard, { backgroundColor: colores.tarjeta, borderColor: colores.borde  }]}>

            {/* correo electronico */}
            <View style={styles.fieldGroup}>
              <Text style={[styles.label, texto(14), { color: colores.texto }]}>Correo electrónico</Text>

              <View
  style={[
    styles.inputContainer,
    { backgroundColor: colores.campo, borderColor: colores.borde },
    errorCorreo ? styles.inputError : null,
  ]}
>

                <Ionicons name="mail-outline"size={20}color={colores.icono} style={{marginRight: 10}} />

                <TextInput
                style={[styles.input, texto(15), { color: colores.texto }]}
                value={correo}
                onChangeText={(texto) => {
                setCorreo(texto);
                if (errorCorreo) setErrorCorreo('');
              }}
                placeholder="Tu correo electrónico"
                placeholderTextColor={colores.textoSecundario}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                accessibilityLabel="Correo electrónico"
                accessibilityHint="Escribe el correo electrónico de tu cuenta"
               />

              </View>

              {errorCorreo ? (
                <Text
                  style={styles.errorText}
                  accessibilityLiveRegion="polite"
                >
                  {errorCorreo}
                </Text>
              ) : null}
            </View>

            {/* contraseña */}
            <View style={styles.fieldGroup}>
              <Text style={[styles.label, texto(14), { color: colores.texto }]}>Contraseña</Text>

              <View style={[
                styles.inputContainer,
                { backgroundColor: colores.campo, borderColor: colores.borde },
                errorPassword ? styles.inputError : null
              ]}>

                <Ionicons name="lock-closed-outline" size={20} color={colores.icono} style={{ marginRight: 10 }}/>

                <TextInput
  style={[styles.input, texto(15), { color: colores.texto }]}
  value={password}
  onChangeText={(texto) => {
    setPassword(texto);
    if (errorPassword) setErrorPassword('');
  }}
  placeholder="Tu contraseña"
  placeholderTextColor={colores.textoSecundario}
  secureTextEntry={!verPassword}
  autoCapitalize="none"
  accessibilityLabel="Contraseña"
  accessibilityHint="Escribe tu contraseña de acceso"
/>

                <TouchableOpacity
                  style={styles.eyeButton}
                  onPress={() => setVerPassword(!verPassword)}
                  accessibilityRole="button"
                  accessibilityLabel={
                    verPassword
                      ? 'Ocultar contraseña'
                      : 'Mostrar contraseña'
                  }
                >
                  <Ionicons name={verPassword ? 'eye-outline' : 'eye-off-outline'} size={22} color={colores.icono}/>
                </TouchableOpacity>

              </View>

              {errorPassword ? (
                <Text
                  style={styles.errorText}
                  accessibilityLiveRegion="polite"
                >
                  {errorPassword}
                </Text>
              ) : null}
            </View>

            {/* recuperar contraseña */}
            <TouchableOpacity
              style={styles.forgotButton}
              onPress={recuperarPassword}
              accessibilityRole="button"
              accessibilityLabel="Olvidaste tu contraseña?"
            >
              <Text style={[styles.forgotText, texto(13), { color: colores.morado }]}>
                ¿Olvidaste tu contraseña?
              </Text>
            </TouchableOpacity>

            {/* mensaje de exito */}
            {mensajeExito ? (
              <View
                style={styles.successBox}
                accessibilityLiveRegion="polite"
              >
                <Text style={[styles.successText, texto(14), { color: colores.texto }]}>
                  {mensajeExito}
                </Text>
              </View>
            ) : null}

            {/* boton principal */}
            <TouchableOpacity
              style={[styles.primaryButton, { backgroundColor: colores.boton }]}
              onPress={validarYEntrar}
              activeOpacity={0.8}
              accessibilityRole="button"
              accessibilityLabel="Iniciar sesión"
              accessibilityHint="Valida tus datos para entrar a tu cuenta"
            >
              <Text style={[styles.primaryButtonText, texto(17), { color: colores.textoBoton }]}>
                Iniciar sesión
              </Text>

            </TouchableOpacity>

            {/* separador */}
            <View style={styles.divider} />

            {/* registro */}
            <View style={styles.registerSection}>

              <Text style={[styles.registerText, texto(14), { color: colores.textoSecundario }]}>
                ¿No tienes una cuenta?
              </Text>

              <TouchableOpacity
                
                onPress={() => navigation.navigate('Registro')}
                accessibilityRole="button"
                accessibilityLabel="Crear cuenta"
              >
                <Text style={[styles.registerLink, texto(14), { color: colores.morado }]}>Crear cuenta</Text>
              </TouchableOpacity>

            </View>

          </View>

        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

// estilos de la pantalla
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F8F7FF',
  },
  flex: {
    flex: 1,
  },
  background: {
    ...StyleSheet.absoluteFill,
    overflow: 'hidden',
  },
  decoracionSuperior: {
    position: 'absolute',
    width: 310,
    height: 310,
    borderRadius: 155,
    backgroundColor: '#E8E7F5',
    opacity: 0.65,
    top: -190,
    right: -120,
  },
  decoracionInferior: {
    position: 'absolute',
    width: 330,
    height: 220,
    borderRadius: 165,
    backgroundColor: '#E8E7F5',
    opacity: 0.7,
    bottom: -155,
    left: -130,
    transform: [{ rotate: '20deg' }],
  },
  container: {
    flexGrow: 1,
    paddingHorizontal: 25,
    paddingTop: 25,
    paddingBottom: 35,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 35,
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
  logoCabezaUno: {
    position: 'absolute',
    width: 11,
    height: 11,
    borderRadius: 6,
    backgroundColor: '#1E293B',
    left: 3,
    top: 1,
  },
  logoCabezaDos: {
    position: 'absolute',
    width: 11,
    height: 11,
    borderRadius: 6,
    backgroundColor: '#1E293B',
    right: 3,
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
    borderColor: '#1E293B',
    bottom: 2,
    left: 2,
  },
  logoText: {
    fontSize: 21,
    fontWeight: '800',
    color: '#1E293B',
  },
  accessibilityButton: {
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
  accessibilityIcon: {
    color: '#FFFFFF',
    fontSize: 23,
    marginRight: 7,
  },
  accessibilityText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '700',
  },
  welcomeSection: {
    alignItems: 'center',
    marginBottom: 35,
  },
  illustrationContainer: {
    width: 125,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  illustrationBack: {
    position: 'absolute',
    width: 90,
    height: 90,
    borderRadius: 25,
    backgroundColor: '#D8D5F1',
    transform: [{ rotate: '15deg' }],
    right: 13,
    top: 12,
  },
  illustrationCard: {
    width: 90,
    height: 90,
    borderRadius: 23,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    transform: [{ rotate: '12deg' }],
    elevation: 7,
    shadowColor: '#394665',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
  },
  briefcase: {
    width: 43,
    height: 31,
    borderWidth: 2.5,
    borderColor: '#1E293B',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  briefcaseHandle: {
    width: 19,
    height: 9,
    borderWidth: 2.5,
    borderColor: '#1E293B',
    borderBottomWidth: 0,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    marginBottom: -1,
  },
  briefcaseLine: {
    width: '100%',
    height: 2,
    backgroundColor: '#1E293B',
  },
  briefcaseLock: {
    position: 'absolute',
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#1E293B',
  },
  title: {
    fontSize: 27,
    fontWeight: '800',
    color: '#1E293B',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 17,
    color: '#6B7280',
    marginTop: 5,
  },
  formCard: {
    backgroundColor: '#F8F7FF',
    borderRadius: 29,
    paddingHorizontal: 20,
    paddingVertical: 24,
    borderWidth: 1,
    borderColor: '#FFFFFF',
    elevation: 7,
    shadowColor: '#394665',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.11,
    shadowRadius: 12,
  },
  fieldGroup: {
    marginBottom: 19,
  },
  label: {
    fontSize: 16,
    fontWeight: '800',
    color: '#1E293B',
    marginBottom: 9,
  },
  inputContainer: {
    height: 49,
    borderRadius: 25,
    backgroundColor: '#F8F7FF',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    elevation: 2,
    shadowColor: '#394665',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.09,
    shadowRadius: 4,
  },
  inputIcon: {
    fontSize: 21,
    color: '#394665',
    width: 34,
    textAlign: 'center',
    marginRight: 7,
  },
  input: {
    flex: 1,
    fontSize: 15,
    color: '#1E293B',
    paddingVertical: 0,
    height: '100%',
  },
  eyeButton: {
    minWidth: 40,
    minHeight: 42,
    alignItems: 'center',
    justifyContent: 'center',
  },
  eyeIcon: {
    fontSize: 24,
    color: '#394665',
  },
  inputError: {
    borderWidth: 2,
    borderColor: '#B91C1C',
  },
  errorText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#B91C1C',
    marginTop: 7,
    lineHeight: 20,
  },
  forgotButton: {
    alignSelf: 'flex-end',
    minHeight: 42,
    justifyContent: 'center',
    marginTop: -10,
    marginBottom: 13,
  },
  forgotText: {
    color: '#6366F1',
    fontSize: 14,
    fontWeight: '700',
    textDecorationLine: 'underline',
  },
  successBox: {
    backgroundColor: '#E8E7F5',
    borderRadius: 12,
    padding: 12,
    marginBottom: 14,
  },
  successText: {
    color: '#1E293B',
    fontSize: 14,
    fontWeight: '700',
    textAlign: 'center',
  },
  primaryButton: {
    minHeight: 54,
    backgroundColor: '#1E293B',
    borderRadius: 27,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#1E293B',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  primaryButtonText: {
    fontSize: 17,
    fontWeight: '800',
    color: '#FFFFFF',
  },
  arrowIcon: {
    fontSize: 25,
    color: '#FFFFFF',
    marginLeft: 13,
  },
  divider: {
    height: 1,
    backgroundColor: '#E5E7EB',
    marginVertical: 24,
  },
  registerSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 12,
  },
  registerText: {
    color: '#6B7280',
    fontSize: 14,
  },
  registerLink: {
    color: '#6366F1',
    fontSize: 15,
    fontWeight: '800',
  },
});
