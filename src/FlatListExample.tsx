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
    {id: '1', nome:'𝙓-𝙈𝙞𝙘𝙠𝙚𝙮', preco: 30.99 ,ingredientes: '𝙋𝙖̃𝙤, 𝙝𝙖𝙢𝙗𝙪𝙧𝙜𝙪𝙚𝙧, 𝙖𝙡𝙛𝙖𝙘𝙚, 𝙩𝙤𝙢𝙖𝙩𝙚 ,𝙢𝙪𝙨𝙨𝙖𝙧𝙚𝙡𝙖, 𝙘𝙝𝙚𝙙𝙙𝙖𝙧,', image:require('./assets/image/mickey.png')},
    {id: '2', nome: '𝙓-𝙃𝙪𝙡𝙠', preco: 34.99 ,ingredientes: '𝙋𝙖̃𝙤 𝙫𝙚𝙧𝙙𝙚, 𝙝𝙖𝙢𝙗𝙪𝙧𝙜𝙪𝙚𝙧 ,𝙤𝙫𝙤, 𝙖𝙡𝙛𝙖𝙘𝙚', image:require('./assets/image/hulk.png')},
    {id: '3', nome: '𝙓- 𝙎𝙥𝙞𝙙𝙚𝙧𝙈𝙖𝙣', preco: 39.99,ingredientes: '𝙋𝙖̃𝙤 𝙫𝙚𝙧𝙢𝙚𝙡𝙝𝙤, 𝙝𝙖𝙢𝙗𝙪𝙧𝙜𝙪𝙚𝙧 ,𝙢𝙪𝙨𝙨𝙖𝙧𝙚𝙡𝙖, 𝙗𝙖𝙘𝙤𝙣 ,𝙨𝙖𝙡𝙖𝙙𝙖', image:require('./assets/image/homemaranha.png')},
    {id: '4', nome: '𝙓-𝙋𝙤𝙩𝙩𝙚𝙧', preco: 44.99,ingredientes: '𝙋𝙖̃𝙤, 𝙝𝙖𝙢𝙗𝙪𝙧𝙜𝙪𝙚𝙧, 𝙢𝙪𝙨𝙨𝙖𝙧𝙚𝙡𝙖 , 𝙨𝙖𝙡𝙖𝙙𝙖', image:require('./assets/image/potter.png')},
    {id: '5', nome: '𝙓-𝘽𝙖𝙩𝙢𝙖𝙣', preco: 44.99,ingredientes: '𝙋𝙖̃𝙤 𝙥𝙧𝙚𝙩𝙤, 𝙝𝙖𝙢𝙗𝙪𝙧𝙜𝙪𝙚𝙧, 𝙨𝙖𝙡𝙖𝙙𝙖, 𝙢𝙪𝙨𝙨𝙖𝙧𝙚𝙡𝙖', image:require('./assets/image/batman.png')},
    {id: '6', nome: '𝙓-𝙎𝙩𝙞𝙩𝙘𝙝', preco: 49.99,ingredientes: '𝙋𝙖̃𝙤 𝙖𝙯𝙪𝙡, 𝙝𝙖𝙢𝙗𝙪𝙧𝙜𝙪𝙚𝙧, 𝙢𝙪𝙨𝙨𝙖𝙧𝙚𝙡𝙖',image:require('./assets/image/stitch.png')},
    {id: '7', nome: '𝙓-𝙈𝙖𝙧𝙞𝙤', preco: 44.99,ingredientes: '𝙋𝙖̃𝙤, 𝙝𝙖𝙢𝙗𝙪𝙧𝙜𝙪𝙚𝙧, 𝙢𝙪𝙨𝙨𝙖𝙧𝙚𝙡𝙖', image:require('./assets/image/mario.png')},
    {id:'8', nome: '𝘽𝙖𝙩𝙖𝙩𝙖 𝙨𝙢𝙞𝙡𝙚', preco: 24.99,ingredientes: '𝘽𝙖𝙩𝙖𝙩𝙖 𝙛𝙧𝙞𝙩𝙖, 𝙘𝙝𝙚𝙙𝙙𝙖𝙧, 𝙗𝙖𝙘𝙤𝙣', image:require('./assets/image/batata.png')},
    {id: '9', nome: '𝙎𝙪𝙘𝙤 𝙎𝙩𝙞𝙩𝙘𝙝', preco: 14.99,ingredientes: '𝘾𝙤𝙧𝙤𝙩𝙚 𝙖𝙯𝙪𝙡, 𝙜𝙚𝙡𝙖𝙩𝙞𝙣𝙖' , image:require('./assets/image/beidaazul.png')},
    {id: '10', nome: '𝘽𝙤𝙖 𝙣𝙤𝙞𝙩𝙚 𝙘𝙞𝙣𝙙𝙚𝙧𝙚𝙡𝙖', preco:14.99 ,ingredientes: '𝙑𝙤𝙙𝙠𝙖 𝙙𝙚 𝙗𝙡𝙪𝙚 𝙞𝙘𝙚, 𝙜𝙚𝙡𝙤,𝙡𝙞𝙢𝙖𝙤', image:require('./assets/image/cinderela.png')},
    {id: '11', nome: '𝙎𝙪𝙘𝙤 𝙍𝙖𝙥𝙪𝙣𝙯𝙚𝙡', preco:14.99 ,ingredientes: '𝘾𝙝𝙖𝙢𝙥𝙖𝙣𝙝𝙚, 𝙫𝙤𝙙𝙠𝙖, 𝙨𝙪𝙘𝙤 𝙙𝙚 𝙡𝙞𝙢𝙖𝙤', image:require('./assets/image/rapunzel.png')},
    {id: '12', nome: '𝙎𝙪𝙘𝙤 𝙃𝙪𝙡𝙠', preco:14.99 ,ingredientes: '𝙎𝙪𝙘𝙤 𝙙𝙚 𝙧𝙪𝙘𝙪𝙡𝙖 𝙚 𝙖𝙡𝙛𝙖𝙘𝙚', image:require('./assets/image/hulksuco.png')},
    {id: '13', nome: '𝙈𝙖𝙘̧𝙖 𝙙𝙤 𝙖𝙢𝙤𝙧', preco: 9.99,ingredientes: '𝙈𝙖𝙘̧𝙖 𝙙𝙚 𝙘𝙝𝙤𝙘𝙤𝙡𝙖𝙩𝙚 𝙙𝙤 𝙢𝙞𝙘𝙠𝙚𝙮', image:require('./assets/image/macamickey.png')},
    {id: '14', nome: '𝘽𝙤𝙡𝙖𝙘𝙝𝙖', preco: 4.99,ingredientes: '𝘽𝙤𝙡𝙖𝙘𝙝𝙖 𝙙𝙚 𝙘𝙝𝙤𝙘𝙤𝙡𝙖𝙩𝙚', image:require('./assets/image/bolacha.png')},
    {id: '15', nome: '𝘾𝙤𝙘𝙖-𝘾𝙤𝙡𝙖', preco:4.99 ,ingredientes: '𝘾𝙤𝙘𝙖 𝙘𝙤𝙡𝙖', image:require('./assets/image/coca.png')},
];

const renderItem = ({item}: {item: MenuItem}) =>(
    <TouchableOpacity style= {styles.item}>
        <Text style={styles.itemText} >{item.nome}</Text>
        <Text style={styles.itemPreco}>{item.preco}</Text>
        <Image source={item.image}style={styles.image}></Image>
        <Text style={styles.itemIngredientes}>{item.ingredientes}</Text>
        
    </TouchableOpacity>

);

function FlatListExample(): react.JSX.Element {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="black" barStyle='light-content'/>
            <View style={styles.header}>
                <Text style= {styles.headerText}> 𝓜𝓪𝓰𝓲𝓬 𝓑𝓾𝓻𝓰𝓾𝓮𝓻</Text>
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
                    source={require('./assets/image/home.png')} 
                    style={styles.footerIcon}
                    />
                   
                </TouchableOpacity>
                <Image
                source={require('./assets/image/pedidos.png')}
                style={styles.footerIcon}
                />

                <TouchableOpacity>
                    <Image 
                    source={require('./assets/image/perfil.png')}
                    style={styles.footerIcon}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image 
                    source={require('./assets/image/menu.png')}
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
        borderRadius: 10,
        backgroundColor: 'black',
        padding: 25,
        marginVertical: 20,
        marginHorizontal: 30

    },
    header: {
        backgroundColor: '#E40066',
        alignItems:'center',
        paddingVertical: 10

    },
    headerText: {
        fontSize: 40,
        fontWeight: '100',
        color:'white'

    },
    footer: {
        borderRadius: 0.2,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 5
    },
    footerIcon:{
 width: 50,
 height: 50,
 backgroundColor: 'white'
    },
    image:{
        borderRadius:100,
        width:150,
        height:150,
        alignSelf:'center',
       

    },
    itemText:{
        alignSelf:'center',
        fontSize: 20,
        color:'#E40066',
        textDecorationLine: 'underline',
    },
    itemPreco:{
        alignSelf:'center',
        fontSize: 20,
        color:'white',
    },
    itemIngredientes:{
        alignSelf:'center',
        fontSize: 10,
        color:'white',
    }
});

export default FlatListExample;
