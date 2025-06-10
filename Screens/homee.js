
import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import CardProduct from '../componentes/cardProdutos';
import { useState} from 'react';


export default function Home() {
    const [produtos,setProdutos] = useState([
            
            {id : 1, nome: 'GEL DE LIMPEZA', valor: 49.00, imagem:'https://cdn.principiaskin.com/media/catalog/product/cache/a11fc81ad62814be31cd922a993aa5ec/p/r/principia-skincare-cosmeticos-gl-01-gel-limpeza-acido-salicilico-glicerina-1_3.jpg'},
            {id : 2, nome: 'Tônico Ácido Lático e Salicílico ', valor: 44.00, imagem: 'https://ellebrasil-wp-images.s3.amazonaws.com/2022/09/image-444.jpg'},
            {id : 3, nome: 'Esfoliante Facial Algas Marinhas ', valor:  64.90, imagem: 'https://ellebrasil-wp-images.s3.amazonaws.com/2022/09/image-439.jpg'},
            {id : 4, nome: 'Gel Esfoliante Facial Refrescante', valor: 25.94, imagem: 'https://ellebrasil-wp-images.s3.amazonaws.com/2022/09/image-437.jpg'},
        ])
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
                            id={item.id}
                            nome={item.nome}
                            valor={item.valor}
                            imagem={item.imagem}
                            />
                
                        )}
                        keyExtractor={item => item.id}
                        
                        />
                </View>

                
)}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'space-evenly',
    },
    background: {
        flex: 1,
        width: '100%',
        height: '100%'
    },
    text: {
        fontSize: 20,
    },
    images: {
        width: 100,
        height: 100,
    }
});
