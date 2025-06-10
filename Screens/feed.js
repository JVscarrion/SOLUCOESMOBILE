import { View, Text, StyleSheet, Image } from "react-native";


export default function feed() {
    return (
        <View>
            <View>
                <Text style={styles.text}>Feed</Text>
            </View>
            <View style={styles.Images}>
            <Image style={{width: 200, height: 200}} source={require('../assets/guts.jpg')} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'space-evenly',
    },
    text: {
        fontSize: 20,
    },
    images: {
        width: 100,
        height: 100,
    }
});
