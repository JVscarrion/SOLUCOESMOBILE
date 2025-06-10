
import { View, Text, StyleSheet, Button, TextInput, TouchableOpacity } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import {auth} from '../controller';
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";


export default function Login({navigation}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const VerificarUser = () =>{
        signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    navigation.navigate('Home')
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    console.log('erro ao logar', error.message);
  });
        
    }
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Login</Text>
            <TextInput 
            placeholder="email"
            value={email}
            onChangeText={setEmail}
            />
            <TextInput 
            placeholder="senha"
            value={password}
            onChangeText={setPassword}
            />
            <Button title="Entrar" onPress={VerificarUser}/>
            <AntDesign name="login" size={24} color="black" />
            <Button title="Cadastro" onPress={() => navigation.navigate('Cadastrar')}/>
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
