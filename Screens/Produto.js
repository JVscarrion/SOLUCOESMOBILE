import {View, Text, StyleSheet,FlatList,Image,} from 'react-native';
import {useState, useEffect} from 'react';
import CardProduct from '../componentes/cardProdutos';
import { db } from '../controller';
import { collection , getDocs } from "firebase/firestore"; 
import { useCarrinho } from '../carrinhoProvider';



export default function Product({navigation}){
    
    const [produtos,setProdutos] = useState([])
    const {adicionarProduto} = useCarrinho()
    useEffect(()=> {
        async function carregarProdutos() {
            try {
                const querySnapshot = await getDocs(collection(db, "produtos"));
                const lista = [];
                
                querySnapshot.forEach((doc) => {
                    lista.push({id:doc.id, ...doc.data()});
                });
                setProdutos(lista);
                } catch (error) {
                console.log('erro ao carregar produtos', error);
            }
        }
        carregarProdutos();
    }, []);

    return (
        <View style={styles.container}>
                <Text style={styles.txt}>Produtos</Text>
                {/*produtos.map((item) => (
                    <Text>Nome: {item.nome} - R$ {item.valor.tofixed(2)}</Text>
                
                ))*/}
                
                <FlatList 
                data={produtos}
                renderItem={({item}) => (
                    <CardProduct
                    //id={item.id}
                    nome={item.nome}
                    valor={item.valor}
                    imagem={item.imagem}
                    comprar={() =>{
                        adicionarProduto(item);
                        navigation.navigate('Carrinho')
                    }}
                    />

                )}
                keyExtractor={item => item.id}
                
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
    txt:{
        fontSize: 25,
        color: '#00BFFF',
        
    },
    txtItem:{
        fontSize: 18,
        fontWeight: 'bold',
        color: '#00BFFF'
    },
    card: {
        backgroundColor: '#DCDCDC',
        width: 300,
        height: 300,
        margin: 10,
        borderRadius: 10,
    },
    img: 
    {
        width: 200,
        height: 100,
    }

})