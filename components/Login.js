import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { navigationRef } from '../routes/RootNavigation';


export default Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
      
  return (
      <View style={styles.container}>
        <Text style={styles.textTitle}> Faça seu login! </Text>

        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Digite seu e-mail"
            placeholderTextColor="#003f5c"
            onChangeText={(email) => setEmail(email)}
          />
        </View>

        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Digite sua senha"
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
          />
        </View>

        <TouchableOpacity>
          <Text style={styles.forgot_button}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginBtn}>
          <Text
            style={styles.loginText}
            onPress={() => navigationRef.navigate('Menu')}
          >LOGIN</Text>
        </TouchableOpacity>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#23204B",
    alignItems: "center",
    justifyContent: "center",
  },

  textTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 25,
    color: '#fff'
  },

  image: {
    marginBottom: 40,
    width: 100,
    height: 120
  },

  inputView: {
    backgroundColor: "#FBD8DF",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,

    alignItems: "center",
  },

  TextInput: {
    textAlignVertical: 'top',
    textAlign: 'center',
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },

  forgot_button: {
    height: 30,
    marginBottom: 30,
    color: '#fff'
  },

  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#B30F27",
  },

  loginText: {
    color: '#fff',
    fontWeight: 'bold',
  }
});