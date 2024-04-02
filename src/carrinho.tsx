import react from "react";
import {  FlatList, Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface MenuItem {
    id: string;
    nome: string;
    preco: number;
    image: any;
    mais:any;
}
const dados: MenuItem[] = [
    {id: '1', nome:'𝙓-𝙈𝙞𝙘𝙠𝙚𝙮', preco: 30.99,  image:require('./assets/image/mickey.png'),mais:require('./assets/image/mais.png')},
    {id: '2', nome: '𝙓-𝙃𝙪𝙡𝙠', preco: 34.99, image:require('./assets/image/hulk.png'),mais:require('./assets/image/mais.png')},
   
]
const renderItem = ({item}: {item: MenuItem}) =>(
    <TouchableOpacity style= {styles.item}>
        <Text style={styles.itemText} >{item.nome}</Text>
        <Text style={styles.itemPreco}>{item.preco}</Text>
        <Image source={item.image}style={styles.image}></Image>
        <Image source={item.mais}style={styles.image1}></Image>
       
        
    </TouchableOpacity>

);

function Carrinho(): react.JSX.Element {
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
                    source={require('./assets/image/home.png.png')} 
                    style={styles.footerIcon}
                    />
                   
                </TouchableOpacity>

                <TouchableOpacity>
                <Image
                source={require('./assets/image/request.png.png')}
                style={styles.footerIcon}
                />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image 
                    source={require('./assets/image/me.png.png')}
                    style={styles.footerIcon}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image 
                    source={require('./assets/image/cardapiopink.png.png')}
                    style={styles.footerIcon}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image 
                    source={require('./assets/image/carrinho.png')}
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
    image1:{
        borderRadius:30,
        width:30,
        height:30,
        marginLeft:200,
        marginVertical:10
      
    }
   
});

export default Carrinho;
