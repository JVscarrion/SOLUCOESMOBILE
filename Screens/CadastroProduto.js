import {Text, TextInput, View, StyleSheet,Button} from 'react-native';
import { db } from '../controller';
import {useState} from 'react';
import {collection, addDoc} from 'firebase/firestore';


export default function CadastroProdutos() {
    
    const [nome, setNome] = useState('');
    const [valor, setValor] = useState('');
    const [imagem, setImagem] = useState('');

    const CadastrarProduct = async () => {
        try {
            await addDoc(collection(db, 'produtos'), {
                nome,
                valor: parseFloat(valor),
                imagem
            });
            setNome();
            setValor();
            setImagem();
            console.log('Produto cadastrado')
        }
        catch (error) {
            console.log('erro ao cadastrar produto', error);
    }
    }
        
    return(
        <View style={styles.container}>
            <Text>Cadastro dos Produtos</Text>
                    
                    <TextInput
                     style={styles.input}
                    placeholder="Nome"
                    value={nome}
                    onChangeText={setNome}
        
                    />
                    <TextInput
                    style={styles.input}
                    placeholder="Valor"
                    value={valor}
                    onChangeText={setValor}
                    />

                    <TextInput
                    style={styles.input}
                    placeholder="Imagem"
                    value={imagem}
                    onChangeText={setImagem}
                    />
                    
                    <Button title="Cadastrar"
                    onPress={CadastrarProduct}
                    />
        </View>
    )

   
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input:
    {
        borderWidth: 1,

    }

})