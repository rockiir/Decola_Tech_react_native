import React from 'react';
import { Text, View, StyleSheet, StatusBar, SafeAreaView } from 'react-native';

const App = () => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={'black'} barStyle="light-content" />
            <View style={styles.container}>
                <Text style={styles.text}>
                    Hello World!🎉
                </Text>
            </View>
        </SafeAreaView>
    );
};

export default App;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'pink',
        flex: 1, //Expande o background para toda a tela

    },
    text: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'red',
    },
});