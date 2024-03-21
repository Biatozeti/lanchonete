import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';

function ScrollViewExample(): React.JSX.Element{
    return (
        <View style={styles.container}>
            <ScrollView horizontal={true}>
            <View style={styles.box1}></View>
            <View style={styles.box2}></View>
            <View style={styles.box3}></View>
            <View style={styles.box4}></View>
            </ScrollView>

        </View>
    );
}

const styles = StyleSheet.create({

    container:{
        flex: 1

    },
    box1:{
        height: 50,
        backgroundColor: 'red',
        width: 50

    },
    box2: {

        height:20,
        backgroundColor: 'red',
        width: 20

    },
    box3:{
        height:20,
        backgroundColor: 'blue',
        width:20

    },
    box4:{

        height:20,
        backgroundColor: 'blue',
        width: 20

    }

});

export default ScrollViewExample;