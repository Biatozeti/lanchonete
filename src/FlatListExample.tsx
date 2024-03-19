import react from "react";
import { FlatList, Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface MenuItem {
    id: string;
    nome: string;
    preco: number;
    ingredientes: string;
    image: any;
}
const dados: MenuItem[] = [
    {id: '1', nome:'X-Mickey', preco: 30.99 ,ingredientes: 'pão,hamburguer,alface,tomate,mussarela,cheddar', image:require('../assets/image/mickey.png')},
    {id: '2', nome: 'x-Hulk', preco: 35.00 ,ingredientes: 'pão verde,hamburguer,ovo,alface', image:require('../assets/image/hulk.png')},
    {id: '3', nome: 'X- SpiderMan', preco: 40.00,ingredientes: 'pão vermelho, hamburguer,mussarela,bacon,salada', image:require('../assets/image/homemaranha.png')},
    {id: '4', nome: 'X-Potter', preco: 45.00,ingredientes: 'pão,hamburguer,mussarela,salada', image:require('../assets/image/potter.png')},
    {id: '5', nome: 'X-Batman', preco: 45.00,ingredientes: 'pão preto, hamburguer, salada, mussarela', image:require('../assets/image/batman.png')},
    {id: '6', nome: 'X-Stitch', preco: 50.00,ingredientes: 'pão azul, hamburguer,mussarela',image:require('../assets/image/stitch.png')},
    {id: '7', nome: 'X-Mario', preco: 45.00,ingredientes: 'pão,hamburguer,mussarela', image:require('..assets/image/mario.png')},
    {id:'8', nome: 'Batata smile', preco: 25.00,ingredientes: 'batata frita,cheddar,bacon', image:require('..assets/image/batata.png')},
    {id: '9', nome: 'Suco Stitch', preco: 15.00,ingredientes: 'corote azul, gelatina' , image:require('../assets/image/bebidaazul.png')},
    {id: '10', nome: 'Boa noite cinderela', preco:15.00 ,ingredientes: 'vodka de blue ice, gelo,limao', image:require('../assets/image/cinderela.png')},
    {id: '11', nome: 'suco rapunzel', preco:15.00 ,ingredientes: 'champanhe, vodka,suco de limao', image:require('../assets/image/rapunzel.png')},
    {id: '12', nome: 'suco hulk', preco:15.00 ,ingredientes: 'suco de rucula e alface', image:require('../assets/image/hulksuco.png')},
    {id: '13', nome: 'Maca de Chocolate', preco: 10.00,ingredientes: 'maça de chocolate do mickey', image:require('../assets/image/macamickey.png')},
    {id: '14', nome: 'Bolacha', preco: 5.00,ingredientes: 'Bolacha de chocolate', image:require('..assets/image/bolacha.png')},
    {id: '15', nome: 'Coca', preco:5.00 ,ingredientes: 'coca cola', image:require('../assets/image/coca.png')},
];

const renderItem = ({item}: {item: MenuItem}) =>(
    <TouchableOpacity style= {styles.item}>
        <Text>{item.nome}</Text>
        <Text>{item.preco}</Text>
        <Text>{item.ingredientes}</Text>
    </TouchableOpacity>

);

function FlatListExample(): react.JSX.Element {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="green" barStyle='light-content'/>
            <View style={styles.header}>
                <Text style= {styles.headerText}> Flat List</Text>
            </View>
            <FlatList
            showsVerticalScrollIndicator={false}
            data={dados}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            />

            <View style={styles.footer}>
                <TouchableOpacity>
                    <Image
                    source={require('./assets/images/orders.png')} 
                    style={styles.footerIcon}
                    />
                   
                </TouchableOpacity>
                <Image
                source={require('./assets/images/home.png')}
                style={styles.footerIcon}
                />

                <TouchableOpacity>
                    <Image 
                    source={require('./asets/images/profile.png')}
                    style={styles.footerIcon}
                    />
                </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,


    },
    item: {
        backgroundColor: 'yellow',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16

    },
    header: {
        backgroundColor: 'green',
        alignItems:'center',
        paddingVertical: 50

    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color:'white'

    },
    footer: {
        borderTopWidth: 0.2,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 10
    },
    footerIcon:{
 width: 30,
 height: 30
    },
});

export default FlatListExample;
