import { View, Text, StyleSheet, Button, TextInput } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../controller"
import { useState } from "react";


export default function Cadastrar({navigation}) {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const RegistroUsuario = () =>{
    createUserWithEmailAndPassword(auth, email, senha)
  .then((userCredential) => {
    console.log('usuario cadastrado!', userCredential.user.email);
    navigation.navigate('TelaLogin');
  })
  .catch((error) => {
    console.log('error, error.message');
    
  });

    }
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Cadastro do Usuário</Text>
            <TextInput
             style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            />
            <TextInput
            style={styles.input}
            placeholder="senha"
            value={senha}
            onChangeText={setSenha}
            secureTextEntry={true}
            />
            <Button title="Cadatrar"
            onPress={RegistroUsuario}
            />
        
            <Button title="Login" 
            onPress={() => navigation.navigate('TelaLogin')}
            />
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    titulo: {
        fontSize: 30,
    },
    Button: {
        title:"Enviar",
        color: "blue",
    }
});
