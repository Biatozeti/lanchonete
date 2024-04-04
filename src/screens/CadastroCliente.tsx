import React, { useState } from "react";
import { Image, StatusBar, StyleSheet,Text, TextInput, TouchableOpacity, View } from "react-native";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import axios from "axios";

const CadastroCliente: React.FC = () => {
    
    const[nome, setNome] = useState<string>('');
    const[telefone, setTelefone] = useState<string>('');
    const[endereco, setEndereco] = useState<string>('');
    const[email, setEmail] = useState<any>('');
    const[password, setPassword] = useState<any>('');
    const[foto, setFoto] = useState<any>('');


    const cadastroCliente = async () => {
        try{
        const formData = new FormData();
        formData.append('nome', nome);
        formData.append('telefone', telefone);
        formData.append('endereco', endereco);
        formData.append('email',email);
        formData.append('password',password);
        formData.append('foto',{
            uri: foto,
            type: 'image/jpeg',
            name: new Date () + '.jpg'
        });

        const response = await axios.post('http://10.137.11.233:8000/api/cliente', formData, {
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
            setFoto(imageUri);
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
                console.log('erro ao abrir a galeria');
            }else {
                let imageUri = response.uri || response.assets?.[0]?.uri;
                setFoto(imageUri)
            }

        })
    }
    return(
        <View style ={Styles.container}>
            <StatusBar backgroundColor="black" barStyle="light-content"/>
            <View style={Styles.header}>
                <Text style={Styles.headerText}>𝓜𝓪𝓰𝓲𝓬 𝓑𝓾𝓻𝓰𝓾𝓮𝓻</Text>
                

                </View>

               <View style={Styles.form}>
                <TextInput style={Styles.input} placeholder="𝙉𝙊𝙈𝙀" value={nome}
                onChangeText={setNome}/>
<TextInput style={Styles.input} placeholder=" 𝙏𝙀𝙇𝙀𝙁𝙊𝙉𝙀" value={telefone}
                onChangeText={setTelefone}/>
                   <TextInput style={Styles.input} placeholder="𝙀𝙉𝘿𝙀𝙍𝙀𝘾̧𝙊" value={endereco}
                onChangeText={setEndereco} multiline/>
                 <TextInput style={Styles.input} placeholder="𝙀𝙈𝘼𝙄𝙇" value={email}
                onChangeText={setEmail} multiline/>
                 <TextInput style={Styles.input} placeholder="𝙎𝙀𝙉𝙃𝘼" value={password}
                onChangeText={setPassword} multiline/>
                <View style={Styles.alinhamentoImagemSelecionada}>
                    {foto ? <Image source={{ uri: foto}} style={Styles.imagemSelecionada}/>:null}
                </View>
                <TouchableOpacity style={Styles.imageButton}>
                    <Text style={Styles.imageButtonText} onPress={selecionarImagem}>Selecionar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Styles.imageButton}>
                    <Text style={Styles.imageButtonText} onPress={abrirCamera}>Tirar Foto</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Styles.imageButton}>
                    <Text style={Styles.imageButtonText} onPress={cadastroCliente}>Cadastrar Cliente</Text>
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
        backgroundColor: '#E40066',
        paddingVertical: 20,
        alignItems: 'center'
    },
    headerText: {
        fontSize: 40,
        fontWeight: '100',
        color:'white'
    },
    form: {
        padding: 10,
        backgroundColor: '#f0f0f0',
        marginBottom: 10
    },
    input: {
        height:50,
        borderColor: '#E40066',
        borderWidth:3,
        marginBottom:10,
        paddingHorizontal:10,
        borderRadius: 10
    },
    imageButton: {
        backgroundColor: '#E40066',
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
        backgroundColor: '#E40066',
        padding: 10,
        borderRadius:5,
        alignItems:'center'
    },
    buttonText: {
        color:'white',
        fontWeight: 'bold',
    }
});

export default CadastroCliente;