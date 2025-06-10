import {View, Text, Image, StyleSheet,FlatList} from 'react-native';
import { useCarrinho } from '../carrinhoProvider';

export default function Carrinho() {
    const {carrinho} = useCarrinho();

    return(
        <View style={styles.container}>
            <Text style={styles.Text}> Carrinho </Text>
            <FlatList
            data={carrinho}
            renderItem={({item}) => (
                <View style={styles.card}>
                    <Image style={styles.img} source={{uri: item.imagem}}/>
                    <Text style={styles.txtprod}> {item.nome}</Text>
                    <Text style={styles.txtprod}>R$ {item.valor}</Text>
                    
                </View>
            )}
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
    txtprod:{
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



