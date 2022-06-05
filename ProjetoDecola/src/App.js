import React from 'react';
import { 
    Text, 
    View, 
    Image, 
    StyleSheet, 
    StatusBar, 
    SafeAreaView,
    Pressable,
    Linking,
 } from 'react-native';

const colorGitHub = '#010409';
const colorFontGitHub = '#C9D1D9';
const colorDarkFontGitHub = '#616161';

const imageProfileGitHub = 'https://avatars.githubusercontent.com/u/70121094?v=4';
const urlMyGitHub = 'https://github.com/rockiir';
const App = () => {
    const handlePressGoToGithub = async () => {
        console.log('verificando');
        const res = await Linking.canOpenURL(urlMyGitHub)
        console.log('aprovado');

        if(res){
            await Linking.openURL(urlMyGitHub)
        }
    }
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={colorGitHub} barStyle="light-content" /*Barra de status*/ />
            <View style={styles.content}>
                <Image
                    accessibilityLabel='avatar pessoa'
                    style={styles.avatar}
                    source={{ uri: imageProfileGitHub }} />
                <Text accessibilityLabel="Nome Raquel matos"
                style={styles.defaultText, styles.name}>Raquel matos</Text>
                <Text accessibilityLabel='nickname' style={styles.defaultText, styles.nick}>@Rockiir</Text>
                <Text accessibilityLabel='descrição' style={styles.defaultText, styles.description}> lorem ipsum | dolor sit amet| consectetur adipiscing elit </Text>
            <Pressable onPress={handlePressGoToGithub}>
            <View style={styles.button}>
               <Text style={[styles.defaultText, styles.textButton]}> Open in Github</Text> 
            </View>
            </Pressable>
            </View>
        </SafeAreaView>
    );
};

export default App;

const styles = StyleSheet.create({
    container: {
        backgroundColor: colorGitHub,
        flex: 1, //Expande o background para toda a tela
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',

    },
    defaultText: {
        color: 'white',
    },
    name: {
        marginTop: 20,
        fontWeight: 'bold',

        fontSize: 25,
        color: colorFontGitHub,
    },
    nick: {
        fontSize: 15,
        color: colorDarkFontGitHub,
    },
    description: {
        marginTop: 10,

        fontSize: 14,
        color: colorFontGitHub,
    },
    content: {
        alignItems: 'center',
        padding: 20,

    },
    avatar: {
        height: 200,
        width: 200,
        borderRadius: 200,
        borderColor: 'pink',
        borderWidth: 2,

    },
    button: {
        backgroundColor: colorDarkFontGitHub,
        borderRadius: 10,
        padding: 20,
        marginTop: 50,

    },
    textButton: {
        fontWeight: 'bold',
        fontSize: 15,
    },
});