import React, { useState } from "react";
import { Image, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import axios from "axios";

const Login: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [pre, setSenha] = useState<string>('');
    
    const cadastrarProduto = async () => {
        try {
            const formData = new FormData();
            formData.append('email', email);
            formData.append('senha', senha);
        };
        const response = await axios.post('http://10.137.11.233:8000/api/login', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log(response);
        }

        catch (error) {
            console.log(error);
        }


    }
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="black" barStyle="light-content" />
            <View style={styles.header}>
                <Text style={styles.headerText}>𝓜𝓪𝓰𝓲𝓬 𝓑𝓾𝓻𝓰𝓾𝓮𝓻</Text>
            </View>

            <View style={styles.container}>
                <StatusBar backgroundColor="black" barStyle="light-content" />
                <View style={styles.header}>
                    <Text style={styles.headerText1}>CADASTRO PRODUTO</Text>

                </View>
                <ScrollView>






                    <View style={styles.form}>
                        <TextInput style={styles.input} placeholder="EMAIL" value={email}
                            onChangeText={setemail} />
                        <TextInput style={styles.input} placeholder=" SENHA" value={senha}
                            onChangeText={setSenha} />
                        </View>
                            <Text style={styles.imageButtonText} onPress={cadastrarProduto}>ℂ𝕒𝕕𝕒𝕤𝕥𝕣𝕒𝕣 Login</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>