import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image} from 'react-native';
import React from 'react';
import ButtonGradient from './ButtonGradient';



export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Hola</Text>
      <Text style={styles.subTitle}>Inicia sesión en tu cuenta</Text>

      <TextInput 
      placeholder="example@example.ex"
      style={styles.textInput}
      />
      <TextInput 
      placeholder="Contraseña"
      style={styles.textInput}
      />
      <Text style={styles.forgotPassword}>¿Has olvidado tu contraseña?</Text>
      <ButtonGradient/>
      <Text style={styles.forgotRegis}>No tienes cuenta. Registrate</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  
  container: {
    marginTop: 40,
    backgroundColor: '#f1f1f1',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundImage: require('./assets/img/fondos-pantalla-apple.jpg'),
  },
  titulo: {
    fontSize: 80,
    color: '#3443D',
    fontWeight: 'bold',
  },
  subTitle: {
   fontSize: 20,
   color: 'gray',
  },
  textInput: {
    backgroundColor: '#ffff',
    padding: 10,
    paddingStart: 30,
    width: '80%',
    height: 50,
    marginTop: 20,
    borderRadius: 30,
    backgroundColor: '#fff'

  },
  forgotPassword: {
    fontSize: 14,
    color: 'gray',
    marginTop: 20
  },

  forgotRegis: {
    marginBottom: 20
  }


});
