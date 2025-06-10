import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native-web";
import { useState } from "react";
import { Background } from "@react-navigation/elements";

export default function Count(){

    const [contador, setContador] = useState(2);

    function Aumentar (){
        setContador(contador + 1)

    }

    function Diminuir (){
        if (contador > 0) {
        setContador(contador - 1)
        }
    }

    return(
        <View style={styles.container}>
            
            <Text style={styles.title}>Meu Contador</Text>
            <Text style={styles.txt}> {contador} </Text>
            <View style={styles.row}>
                
                <TouchableOpacity 
                style={styles.button} 
                onPress={Aumentar}>
                    +
                </TouchableOpacity>
                
                <TouchableOpacity 
                style={styles.button} 
                onPress={Diminuir}>
                    -
                </TouchableOpacity>

            <Button 
                title = '+'
                color={'#0000FF'}
                onPress={Aumentar}
            />
            
            <Button 
            title = '-'
            color={'#0000FF'}
            onPress={Diminuir}
            />
            </View>
       </View>
    )
}

const styles = StyleSheet.create({
    container:
        {
            flex:1,
            alignItens: 'center',
            justifyContent: 'center',
        },
        row:
        {
            flexDirection: 'row',
            width: 400,
            justifyContent: 'space-around',
        },
        title:
        {
            fontSize: 40,
            color:'#0000FF'
        },
        txt:
        {
            fontSize: 30,
            color:'#0000FF'
        },
        button: 
        {
            backgroundColor: '#0000FF',
            width: '50%',
        }
        
    })