import react, { useEffect, useState } from "react";
import { FlatList, Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import axios from "axios";
import { NavigationContainer, useNavigation } from "@react-navigation/native";



const renderItem = ({item}: {item: Produto}) =>(
    <TouchableOpacity style= {styles.item}>
        <Text style={styles.itemText} >{item.nome}</Text>
        <Text style={styles.itemPreco}>{item.preco}</Text>
        <Image source={item.imagem}style={styles.image}></Image>
        <Text style={styles.itemIngredientes}>{item.ingredientes}</Text>
          </TouchableOpacity>

);

function Cardapio(): react.JSX.Element {


    const [produtos, setProdutos] = useState<Produto[]>([]);
 
    const [erro, setErro] = useState("");

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('http://10.137.11.233:8000/api/produtos/index');
                setProdutos(response.data);

                console.log(produtos)
            } catch (error) {
                setErro("Ocorreu um erro");
                console.log(error);
            }
        }

        fetchData();
    }, []);
const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="black" barStyle='light-content'/>
            <View style={styles.header}>
                <Image source={require('./assets/image/iconmagic.png')} style={styles.headerIcon}/>
            </View>
            <FlatList
        
            showsVerticalScrollIndicator={false}
         
            data={produtos}
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
                <TouchableOpacity onPress={() =>navigation.navigate('Cardapio')}>
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
                    source={require('./assets/image/cart.png.png')}
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
    headerIcon: {
        width: 255,
        height: 255,
        marginBottom: -120,
        marginTop: -90
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
        paddingVertical: 30

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
        fontSize: 15,
        color:'white',
    },
    image1:{
        borderRadius:30,
        width:30,
        height:30,
        marginLeft:250,
        marginVertical:15
      
    }
});

export default Cardapio;
