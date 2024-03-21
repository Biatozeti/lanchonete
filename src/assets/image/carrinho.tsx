import react from "react";
import { carrinho, Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface MenuItem {
    id: string;
    nome: string;
    preco: number;
    image: any;
}
const dados: MenuItem[] = [
    {id: '1', nome:'𝙓-𝙈𝙞𝙘𝙠𝙚𝙮', preco: 30.99,  image:require('./assets/image/mickey.png')},
    {id: '2', nome: '𝙓-𝙃𝙪𝙡𝙠', preco: 34.99, image:require('./assets/image/hulk.png')},
   
]
const renderItem = ({item}: {item: MenuItem}) =>(
    <TouchableOpacity style= {styles.item}>
        <Text style={styles.itemText} >{item.nome}</Text>
        <Text style={styles.itemPreco}>{item.preco}</Text>
        <Image source={item.image}style={styles.image}></Image>
       
        
    </TouchableOpacity>

);

function FlatListExample(): react.JSX.Element {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="black" barStyle='light-content'/>
            <View style={styles.header}>
                <Text style= {styles.headerText}> 𝓜𝓪𝓰𝓲𝓬 𝓑𝓾𝓻𝓰𝓾𝓮𝓻</Text>
            </View>
            <carrinho
        
            showsVerticalScrollIndicator={false}
         
            data={dados}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            />

            <View style={styles.footer}>
                <TouchableOpacity>
                    <Image
                    source={require('./assets/image/casa.png')} 
                    style={styles.footerIcon}
                    />
                   
                </TouchableOpacity>
                <Image
                source={require('./assets/image/requests.png')}
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
   
});

export default carrinho.tsx;
