import React, { useState } from "react";
import { Image, StatusBar, StyleSheet,Text, TextInput, TouchableOpacity, View } from "react-native";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import axios from "axios";

const CadastroProduto: React.FC = () => {
    const [produtos,setProdutos]= useState<Produto[]>([]);
    const[nome, setNome] = useState<string>('');
    const[preco, setPreco] = useState<string>('');
    const[ingredientes, setIngredientes] = useState<string>('');
    const[imagem, setImagem] = useState<any>('');

    const cadastrarProduto = async () => {
        try{
        const formData = new FormData();
        formData.append('nome', nome);
        formData.append('preco', preco);
        formData.append('ingredientes', ingredientes);
        formData.append('imagem',{
            uri: imagem,
            type: 'image/jpeg',
            name: new Date () + '.jpg'
        });

        const response = await axios.post('http://10.137.11.233:8000/api/produtos', formData, {
            headers: {
                'Content-Type':'multipart/form-data'
            }
        });
    }

    catch(error){
        console.log(error);
    }
        

    }

    const abrirCamera =()=> {
        const options = {
            mediaType: 'photo',
            includeBase64: false,
            maxHeight:2000,
            maxWidth: 2000
        };
        launchCamera(options, response =>{
            if(response.didCancel){
                console.log('cancelado pelo usuario');
            }else if (response.error){
                console.log('erro ao abrir a camera');
            }else {
                let imageUri = response.uri|| response.assets?.[0]?.uri;
            setImagem(imageUri);
            console.log(imageUri);
                    }
        })
    }

    const selecionarImagem = ()=> {
        const options = {
            mediaType: 'photo',
            incluedeBase64: false,
            maxHeigth:2000,
            maxWidth:2000
        };

        launchImageLibrary(option, (response)=>{
            if(response.didCancel){
                console.log('cancelado pelo usuario');
            }else if (response.error){
                console.log('erro ao abiri a galeria');
            }else {
                let imageUri = response.uri || response.assets?.[0]?.uri;
                setImagem(imageUri)
            }

        })
    }
    return(
        <View style ={styles.container}>
            <StatusBar backgroundColor="black" barStyle="light-content"/>
            <View style={styles.header}>
                <Text style={styles.headerText}>𝓜𝓪𝓰𝓲𝓬 𝓑𝓾𝓻𝓰𝓾𝓮𝓻</Text>
                </View>
                

               <View style={styles.form}>
                <TextInput style={styles.input} placeholder="Nome do Produto" value={nome}
                onChangeText={setNome}/>
<TextInput style={styles.input} placeholder=" Preço" value={preco}
                onChangeText={setPreco}/>
                   <TextInput style={styles.input} placeholder="Ingredientes" value={ingredientes}
                onChangeText={setIngredientes} multiline/>
                <View style={styles.alinhamentoImagemSelecionada}>
                    {imagem ? <Image source={{ uri: imagem}} style={styles.imagemSelecionada}/>:null}
                </View>
                <TouchableOpacity style={styles.imageButton}>
                    <Text style={styles.imageButtonText} onPress={selecionarImagem}>Selecionar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.imageButton}>
                    <Text style={styles.imageButtonText} onPress={abrirCamera}>Tirar Foto</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.imageButton}>
                    <Text style={styles.imageButtonText} onPress={cadastrarProduto}>Cadastrar Produto</Text>
                </TouchableOpacity>
               </View>
               <View style={styles.footer}>
                <TouchableOpacity>
                    <Image
                    source={require('../assets/image/home.png.png')} 
                    style={styles.footerIcon}
                    />
                   
                </TouchableOpacity>
                <TouchableOpacity>
                <Image
                source={require('../assets/image/request.png.png')}
                style={styles.footerIcon}
                />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image 
                    source={require('../assets/image/me.png.png')}
                    style={styles.footerIcon}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image 
                    source={require('../assets/image/cardapiopink.png.png')}
                    style={styles.footerIcon}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image 
                    source={require('../assets/image/cart.png.png')}
                    style={styles.footerIcon}
                    />
                </TouchableOpacity>

                </View>
                </View>
        

      
    );
}

const styles = StyleSheet.create({

    container:{
        flex: 1
    },
    header:{
        backgroundColor: '#E40066',
        paddingVertical: 20,
        alignItems: 'center'
    },
    headerText: {
        fontSize:40,
        fontWeight:'bold',
        color:'white',
    },
    form: {
        padding: 10,
        backgroundColor: '#f0f0f0',
        marginBottom: 10
    },
    input: {
        height:50,
        borderColor: '#E40066',
        borderWidth:4,
        marginBottom:10,
        paddingHorizontal:10,
        borderRadius: 15
    },
    imageButton: {
        backgroundColor: '#E40066',
        padding: 30,
        borderRadius:50,
        alignItems: 'center',
        marginBottom:10
    },
    imageButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    imagemSelecionada: {
        width:200,
        height:200,
        resizeMode:'cover',
        borderRadius: 5,
        marginBottom:10,
    },
    alinhamentoImagemSelecionada: {
        alignItems: 'center'
    },
    button: {
        backgroundColor: '#E40066',
        padding: 10,
        borderRadius:5,
        alignItems:'center'
    },
    buttonText: {
        color:'white',
        fontWeight: 'bold',
    },
    footer: {
        borderRadius: 0.2,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 20,
        marginTop:'auto'
    },
    footerIcon:{
        width: 30,
        height: 30,
        backgroundColor: 'white'
           },
});

export default CadastroProduto;