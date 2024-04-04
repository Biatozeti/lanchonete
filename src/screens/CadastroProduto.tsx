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
        <View style ={Styles.container}>
            <StatusBar backgroundColor="red" barStyle="light-content"/>
            <View style={Styles.header}>
                <Text style={Styles.headerText}>Top Food</Text>
                

                </View>

               <View style={Styles.form}>
                <TextInput style={Styles.input} placeholder="Nome do Produto" value={nome}
                onChangeText={setNome}/>
<TextInput style={Styles.input} placeholder=" Preço" value={preco}
                onChangeText={setPreco}/>
                   <TextInput style={Styles.input} placeholder="Ingredientes" value={ingredientes}
                onChangeText={setIngredientes} multiline/>
                <View style={Styles.alinhamentoImagemSelecionada}>
                    {imagem ? <Image source={{ uri: imagem}} style={Styles.imagemSelecionada}/>:null}
                </View>
                <TouchableOpacity style={Styles.imageButton}>
                    <Text style={Styles.imageButtonText} onPress={selecionarImagem}>Selecionar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Styles.imageButton}>
                    <Text style={Styles.imageButtonText} onPress={abrirCamera}>Tirar Foto</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Styles.imageButton}>
                    <Text style={Styles.imageButtonText} onPress={cadastrarProduto}>Cadastrar Produto</Text>
                </TouchableOpacity>
               </View>

                </View>
        

      
    );
}

const Styles = StyleSheet.create({

    container:{
        flex: 1
    },
    header:{
        backgroundColor: 'red',
        paddingVertical: 10,
        alignItems: 'center'
    },
    headerText: {
        fontSize:20,
        fontWeight:'bold',
        color:'white',
    },
    form: {
        padding: 10,
        backgroundColor: '#f0f0f0',
        marginBottom: 10
    },
    input: {
        height:40,
        borderColor: 'gray',
        borderWidth:1,
        marginBottom:10,
        paddingHorizontal:10,
        borderRadius: 10
    },
    imageButton: {
        backgroundColor: 'red',
        padding: 10,
        borderRadius:5,
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
        backgroundColor: 'red',
        padding: 10,
        borderRadius:5,
        alignItems:'center'
    },
    buttonText: {
        color:'white',
        fontWeight: 'bold',
    }
});

export default CadastroProduto;