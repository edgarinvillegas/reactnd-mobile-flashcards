import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";

const BasicButton = ({ title, borderColor, fontColor = borderColor, backgroundColor}) => {
    const styles = StyleSheet.create({
        container: {
            borderWidth: 2,
            borderColor,
            borderTopRightRadius: 10,
            borderBottomRightRadius: 10,
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10,
            padding: 17,
            backgroundColor,
            width: 200,
            margin: 10
        },
        text: {
            fontSize: 17,
            fontWeight: 'bold',
            color: fontColor || 'white'
        }
    });
    
    return (
        <TouchableOpacity>
            <View alignItems='center' style={styles.container}>
                <Text style={styles.text}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
};

const Button = ({ title, type }) => {
    switch(type){
        case 'WHITE': return <BasicButton title={title} borderColor="black" />;
        case 'BLACK': return <BasicButton title={title} backgroundColor="black" />;
        case 'GREEN': return <BasicButton title={title} backgroundColor="green" />;
        case 'RED': return <BasicButton title={title} backgroundColor="red" />;
    }
}

export default Button;